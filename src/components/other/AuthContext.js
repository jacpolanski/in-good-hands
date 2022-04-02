import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

  const monitorAuthState = async () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
  };
  useEffect(() => {
    monitorAuthState();
  }, []);

  const logOut = async (auth) => {
    console.log("wylogowywanie");
    await signOut(auth).then((r) => setCurrentUser(undefined));
    // await monitorAuthState();
  };

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
