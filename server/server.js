const express = require("express");
const path = require("path");
const postRoutes = require("./Posts/routes/posts.routes");
const userRoutes = require("./Users/routes/users.routes");
const authRoutes = require("./Auth/routes/auth.routes");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
require("dotenv").config();

const { dbConnect } = require("./database");
const cookieParser = require("cookie-parser");
const User = require("./Users/models/User");

const app = express();
const EXPRESS_PORT = process.env.EXPRESS_PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return done(null, false);
        }

        const isVerified = await user.verifyPassword(password);
        if (!isVerified) {
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.all("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.listen(EXPRESS_PORT, async () => {
  await dbConnect();
  console.log(`server listening on port ${EXPRESS_PORT}`);
});
