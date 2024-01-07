import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="gradient-background">
      <div>
        <div
          className="container col-xl-10 col-xxl-8 px-4 py-5"
          data-aos="zoom-out"
        >
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-md-10 mx-auto col-lg-5">
              <h1 id="header" style={{ color: "white" }}>
                Welcome Back!
              </h1>
              <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
