import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Import Firebase with compatibility mode
import 'firebase/compat/auth'; // Import Firebase Auth module

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        // If user is authenticated, set the user state
        setUser(authUser);
      } else {
        // If user is not authenticated, set the user state to null
        setUser(null);
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return { user };
};

export default useAuth;
