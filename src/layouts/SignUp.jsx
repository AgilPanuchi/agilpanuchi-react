import React from "react";

const SignUp = ({ toggleForm }) => {
  const handleSignUp = (event) => {
    event.preventDefault();
  };

  return (
    <section className="vh-100" id="signup">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-md-5 offset-1 d-none d-md-inline">
            <h3 className="textUngu loginh1">Sign Up</h3>
            <p className="loginp">Halaman pendaftaran ini dirancang untuk memberikan pengalaman yang mudah dan cepat. Walapu halaman Sign ini baru sebatas konsep</p>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-container">
              <form onSubmit={handleSignUp}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
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
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-ungu w-50">
                    Sign Up
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <small>
                    {toggleForm ? (
                      <p>
                        Sudah punya akun?{" "}
                        <button type="button" className="btn btn-link" onClick={toggleForm}>
                          Login
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

export default SignUp;
