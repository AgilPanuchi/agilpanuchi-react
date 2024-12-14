import React from "react";

const Login = ({ toggleForm }) => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <section className="vh-100" id="login">
      <div className="container-fluid">
        <div className="row d-flex align-items-center pt-5">
          <div className=" col-md-5 offset-1 d-none d-md-inline">
            <h1 className="textUngu loginh1">Login</h1>
            <p className="loginp">Walaupun halaman login ini baru sebatas konsep, saya berkomitmen untuk menghadirkan desain yang menarik dan fungsional.</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-container mx-auto">
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-ungu w-50">
                    Login
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <small>
                    <a href="#">Forgot password?</a>
                  </small>
                </div>
                <div className="mt-3 text-center">
                  <small>
                    {toggleForm ? (
                      <p>
                        Belum punya akun?{" "}
                        <button type="button" className="btn btn-link" onClick={toggleForm}>
                          Sign Up
                        </button>
                      </p>
                    ) : null}
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
