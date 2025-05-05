// Danger don't share publicly

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAqlbhNc759T3zUTvFH52pSxPGhI_b_ujU',
  authDomain: 'auth-integretion-m51.firebaseapp.com',
  projectId: 'auth-integretion-m51',
  storageBucket: 'auth-integretion-m51.firebasestorage.app',
  messagingSenderId: '706523048913',
  appId: '1:706523048913:web:32d440808eb1e3b7d34ef0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
