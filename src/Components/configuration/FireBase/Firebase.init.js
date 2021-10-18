import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";
const initializeAuthentication = () => {
  // initializetion
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;
