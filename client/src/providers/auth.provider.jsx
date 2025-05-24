import { useState, useEffect } from "react";
import { getCurrentUser } from "../services/auth/auth.service";
import AuthContext from "../contexts/auth.context";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
