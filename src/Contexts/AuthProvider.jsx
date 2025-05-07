import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from './../firebase.init';

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
    signOutUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
