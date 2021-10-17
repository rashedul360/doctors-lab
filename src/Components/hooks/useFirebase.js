import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import userPhoto from "../Images/user.png";
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  // google sign in method
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // setuser on state
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // facebook sign in
  const facebook = () => {};
  // registration method
  const registration = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setuser on state
        setUser(result.user);
        updateUserInfo(name);
        setError("");
      })
      .catch((error) => {
        // setError
        setError(error.message);
      })
      .finally(() => {});
  };

  // login method
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setuser on state
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        // setError
        setError(error.message);
      });
  };
  // log out method
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // empty user
        setUser({});
      })
      .catch((error) => {
        // setError
        setError(error.message);
      });
  };
  // update information
  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://i.ibb.co/nbQ79zc/user.png",
    }).catch(() => {
      // setError
    });
  };
  // reset password
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("reset email sended");
      })
      .catch((error) => {
        // setError
        setError(error.message);
      });
  };
  // email verification
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      // set message
      setError("check your email. we have sended you the verification email");
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user && setUser(user);
    });

    return () => unsubscribe;
  }, []);
  // return some method and veriable
  return {
    user,
    error,
    googleSignIn,
    loginUser,
    registration,
    logOut,
    updateUserInfo,
    resetPassword,
    verifyEmail,
  };
};

export default useFirebase;