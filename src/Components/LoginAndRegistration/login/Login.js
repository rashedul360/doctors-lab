import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import UserInfo from "../../Pages/userInfo/userInfo";
import { useHistory } from "react-router-dom";
import "./login.css";
const Login = () => {
  // common function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn, loginUser, user, error } = useAuth();
  const history = useHistory();
  // collect email
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // collect password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // submit handaler
  const useFormControl = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  return (
    <div>
      {/* condition  */}
      {user.email ? (
        // components
        // <UserInfo></UserInfo>
        history.push("/")
      ) : (
        <div
          className="mx-auto mt-5"
          style={{ width: "90%", marginTop: "200px" }}
        >
          <div className="row justify-content-center align-items-center ">
            <div className="col-md-6">
              {" "}
              {/* login form  */}
              <form
                className="form-container"
                action=""
                onSubmit={useFormControl}
              >
                {/* handle email  */}
                <input
                  onBlur={handleEmail}
                  type="email"
                  name="email"
                  placeholder="your email address"
                  required
                />
                {/* handle password  */}
                <input
                  onBlur={handlePassword}
                  type="password"
                  name="password"
                  placeholder="type your valid password"
                  required
                />
                {/* submit information  */}
                <input type="submit" value="Login" />
                {/* error handle  */}
                <p className="mt-2">{error}</p>

                {/* other sign in method */}
                <div>
                  <p className="mt-3">Other SignIn Method</p>
                  <div className="mb-5">
                    {/* google sign in method   */}
                    <button
                      onClick={googleSignIn}
                      className="button  btn btn-warning mx-2"
                    >
                      <i className="fab fa-google"></i> Google
                    </button>
                    {/* facebook sign in  method */}
                    <button className="button  btn btn-primary mx-2">
                      <i className="fab fa-facebook"></i> Facebook
                    </button>
                  </div>
                  {/* go to registration  */}
                  <Link to="/register">
                    <p className="user-redirects">Create an account!</p>
                  </Link>
                  {/* reset password  */}
                  <Link to="/reset">
                    <p className="user-redirects text-danger">Reset password</p>
                  </Link>
                </div>
              </form>
            </div>
            {/* login image  */}
            <div className="col-md-6">
              <img
                className="img-fluid mt-5"
                src="https://assignment-9-edu-tech.netlify.app/static/media/login.0d545116.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
