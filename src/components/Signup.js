import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Signup = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const [form, setForm] = useState({});
  const [user, setUsers] = useState([]);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:8080/demo", {
      method: "GET",
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="gradient-background">
      <div
        className="container col-xl-10 col-xxl-8 px-4 py-5"
        data-aos="zoom-out"
      >
        <h1 id="header" style={{ color: "white" }}>
          Join us today and unlock a world of possibilities
        </h1>
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  onChange={handleForm}
                  name="email"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  onChange={handleForm}
                  name="password"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Terms and
                  Conditions
                </label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
