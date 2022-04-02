import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext(undefined);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const signUp = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
