import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // for new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  log in user
  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password);
  };

  //   log Out user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = { createUser, signIn, logOut, loading, setLoading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
