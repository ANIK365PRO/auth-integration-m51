import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './../firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    signInUser,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
