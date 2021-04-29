import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

function Login() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                    <Link to="/login">login</Link>
                      {/* <h3>Login</h3> */}
                    </div>
                    <form action="/">
                      <div className="form-group form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          className="form-control floating"
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-right">
                        <Link to="/forgot-password" className="forgot-link">
                          Forgot Password ?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>

                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
