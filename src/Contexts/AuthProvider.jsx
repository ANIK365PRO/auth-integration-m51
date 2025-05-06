import React from 'react';
import { AuthContext } from './AuthContext';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './../firebase.init';

const AuthProvider = ({ children }) => {
  // create user for Register
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn user for login

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /**
   *{ Get the currently signed-in user}
   */

  onAuthStateChanged(auth, currentUser => {
    if (currentUser) {
      console.log('has current user', currentUser);
    } else {
      console.log('current user', currentUser);
    }
  });

  const userInfo = {
    createUser,
    signInUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
