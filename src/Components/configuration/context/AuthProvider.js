import React from "react";
import { createContext } from "react";
import useFirebase from "../../hooks/useFirebase";
import initializeAuthentication from "../FireBase/Firebase.init";
// call initializetion
initializeAuthentication();
// export context
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};
// export this function
export default AuthProvider;
