import { useContext } from "react";
import { AuthContext } from "../configuration/context/AuthProvider";

const useAuth = () => {
  // use context
  return useContext(AuthContext);
};

export default useAuth;
