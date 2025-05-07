import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from './../firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // create user for Register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user for login

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signIN with google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  /**
   *{ Get the currently signed-in user}
   */

  // onAuthStateChanged(auth, currentUser => {
  //   if (currentUser) {
  //     console.log('has current user', currentUser);
  //   } else {
  //     console.log('current user', currentUser);
  //   }
  // });

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('inside use Effect on Auth State Change', currentUser);

      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,

    createUser,
    signInUser,
    googleSignIn,

    signOutUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
