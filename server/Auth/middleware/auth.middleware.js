const authenticate = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "unauthorized." });
};

module.exports = { authenticate };
