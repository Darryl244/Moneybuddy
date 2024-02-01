import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    Aos.init();
  }, []);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username.trim() === '' || formData.email.trim() === '' || formData.password.trim() === '') {
      alert('Username, Email, and Password cannot be blank');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        }),
      });

      if (response.ok) {
        // Registration successful
        alert('User registered successfully');
        // Redirect to login or handle as needed
      } else {
        // Registration failed
        alert('Error registering user');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gradient-background">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5" data-aos="zoom-out">
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
                  type="text"
                  className="form-control"
                  id="floatingUsername"
                  onChange={handleForm}
                  name="username"
                />
                <label htmlFor="floatingUsername">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  onChange={handleForm}
                  name="email"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  onChange={handleForm}
                  name="password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Terms and
                  Conditions
                </label>
              </div>
              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Signing up...' : 'Sign up'}
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
