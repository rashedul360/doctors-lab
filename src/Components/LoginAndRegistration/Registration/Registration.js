import React from "react";
import "./Registration.css";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../../Pages/userInfo/userInfo";
import registerIMG from "../../Images/registration.svg";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Registration = () => {
  // some common function
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registration, error, updateUserInfo, googleSignIn, user } = useAuth();
  const history = useHistory();
  // collect name
  const handleName = (e) => {
    setname(e.target.value);
  };
  // collect email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // collect password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // submit handaler
  const handleForm = (e) => {
    e.preventDefault();
    registration(name, email, password);
    updateUserInfo(name);
  };
  return (
    <div>
      {/* condition  */}
      {user.email ? (
        // <UserInfo></UserInfo>
        history.push("/")
      ) : (
        <div>
          <div className="mx-auto mt-5" style={{ width: "90%" }}>
            <div className="row justify-content-center align-items-center ">
              <div className="col-md-6">
                {" "}
                {/* registration form  */}
                <form
                  className="register-form-container"
                  onSubmit={handleForm}
                  action=""
                >
                  {/* input name  */}
                  <input
                    onBlur={handleName}
                    type="text"
                    name="name"
                    placeholder="your name"
                    required
                  />
                  {/* injput email  */}
                  <input
                    onBlur={handleEmail}
                    type="email"
                    name="email"
                    placeholder="your email address"
                    required
                  />
                  {/* input [password ] */}
                  <input
                    onBlur={handlePassword}
                    type="password"
                    name="password"
                    placeholder="type your valid password"
                    required
                  />
                  {/* submit  */}
                  <input type="submit" value="Registration" />
                  {/* error message  */}
                  <p className="mt-2 text-danger">
                    {error ===
                    "Cannot read properties of undefined (reading 'push')"
                      ? ""
                      : error}
                  </p>
                  {/* other sign in method  */}
                  <div>
                    <p className="mt-3">Other SignIn Method</p>
                    <div className="mb-5">
                      {/* google sign in  */}
                      <button
                        onClick={googleSignIn}
                        className="button  btn btn-warning mx-2"
                      >
                        <i className="fab fa-google"></i> Google
                      </button>
                      {/* facebook sign in  */}
                      <button className="button  btn btn-primary mx-2">
                        <i className="fab fa-facebook"></i> Facebook
                      </button>
                    </div>
                    {/* goto registration route  */}
                    <Link to="/login">
                      <p className="user-redirects">Already a user?</p>
                    </Link>
                  </div>
                </form>
              </div>
              {/* regiastration image  */}
              <div className="col-md-6">
                <img className="img-fluid mt-5" src={registerIMG} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Registration;
