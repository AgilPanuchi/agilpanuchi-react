import React, { useState } from "react";
import Login from "../layouts/Login";
import SignUp from "../layouts/SignUp";

const Registration = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row w-100">
        <div className="col-12">
          {isLogin ? (
            <div className="pt-5">
              <Login toggleForm={toggleForm} />
            </div>
          ) : (
            <div className="pt-5">
              <SignUp toggleForm={toggleForm} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
