import React from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./userInfo.css";
const UserInfo = () => {
  // destructuring from AUth
  const { user, verifyEmail, error, resetPassword } = useAuth();
  const history = useHistory();
  const handleReset = () => {
    alert("are your want to reset your password");
    history.push("/reset");
  };
  return (
    <div className="mt-5">
      <div className="row user-info-container">
        <div className="col-md-6">
          {/* user information  */}
          <h5 className="mt-3">user information</h5>
          <hr />
          <div className="row mb-3 container">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10 text-md-start">
              <h4>
                {user.displayName}{" "}
                <sup>
                  {user.emailVerified && (
                    <i
                      className="fas fa-check-circle"
                      title="this user is verifyed by assignment 10 team"
                    ></i>
                  )}
                </sup>{" "}
              </h4>
            </div>
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10 text-md-start">
              <h4>{user.email}</h4>
            </div>
          </div>
        </div>
        {/* user photo */}
        <div className="col-md-6 ">
          <h5 className="mt-3">User photo</h5>
          <hr />
          <img src={user.photoURL} alt="" />
          <p>{user.displayName}</p>
        </div>
        {/* reset password  */}
        <button
          // onClick={() => resetPassword(user.email)}
          onClick={handleReset}
          className="btn btn-danger w-25 border-raunded mx-auto"
          style={{ borderRadius: "10rem" }}
        >
          <i className="fas fa-key"></i> {"  "} reset passsword
        </button>
        {/* when the user not verifyed  */}
        <div className="mt-5">
          {!user.emailVerified && (
            <div className="w-75 mx-auto alert">
              {!user.displayName && (
                <div className="animate__heartBeat">
                  <h5>
                    <span>Reload this page please for more show details</span>
                  </h5>
                </div>
              )}
              {/* warning  */}
              <h4>
                dear <span>{user.displayName}</span> thanks for logined our
                website. and also welcome,we are proide a new fetures that is
                blue badge verification system{" "}
                <i className="fas fa-check-circle"></i>. you you want to want to
                blue verification badge <i className="fas fa-check-circle"></i>{" "}
                for you. please click on the <kbd>verify your email</kbd>{" "}
                button, thank you.{" "}
              </h4>
              {/* verification button  */}
              <button className="btn btn-warning mt-5" onClick={verifyEmail}>
                verify your email
              </button>
            </div>
          )}
          {/* error message  */}
          <p className="text-danger mt-2">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
