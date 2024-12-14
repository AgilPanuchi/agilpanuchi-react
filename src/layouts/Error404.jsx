import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-1 textUngu pb-5">404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>We can't seem to find the page you're looking for.</p>
      <Link to="/" className="btn btn-ungu mt-5">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;
