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
import { useHistory } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

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
      })
      .finally(() => {
        setIsLoading(false);
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
  const loginUser = (email, password, location_uri) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // setuser on state
        history.push(location_uri);
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
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // empty user
        setUser({});
      })
      .catch((error) => {
        // setError
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
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
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, []);
  // return some method and veriable
  return {
    user,
    error,
    isLoading,
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
