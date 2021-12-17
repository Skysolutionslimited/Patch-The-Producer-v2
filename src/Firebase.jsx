import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useContext } from 'react';
import { getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Loading } from './components/Styled';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { useState } from 'react';

export const firebase = initializeApp({
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
});

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  onAuthStateChanged(auth, (user) => {
    if(user) {
      setLoading(false);
      // eslint-disable-next-line
      const uid = user.uid;
      setUser(user);
    } else {
      navigate('/Login');
    }
  }, [])
  if(loading) {
    return <Loading />
  }
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
};