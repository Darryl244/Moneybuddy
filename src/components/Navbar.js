import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  // Function to add spaces between each character in a string
  const addSpacesBetweenLetters = (text) => {
    return text.split("").join("\u00A0");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link id="navbar" className="navbar-brand text-dark fs-2" to="/">
            <b>{addSpacesBetweenLetters("MONEYBUDDY")}</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
              <li id="gg" className="nav-item">
                <Link
                  className="navbar nav-link custom-link"
                  aria-current="page"
                  to="/"
                >
                  <b>Home</b>
                </Link>
              </li>
              <li id="gg" className="nav-item">
                <Link
                  className="navbar nav-link custom-link"
                  to="/expensetrack"
                >
                  <b>Expense Track</b>
                </Link>
              </li>
              <li id="gg" className="nav-item">
                <Link
                  className="navbar nav-link custom-link"
                  to="/billsplitting"
                >
                  <b>Bill Splitting</b>
                </Link>
              </li>
              <li id="gg" className="nav-item">
                <Link
                  className="navbar nav-link custom-link"
                  to="/financiallimit"
                >
                  <b>Financial Limits</b>
                </Link>
              </li>
              <li id="gg" className="nav-item">
                <Link className="navbar nav-link custom-link" to="/contact">
                  <b>Contact Us</b>
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <button className="btn" type="submit">
                <Link id="gg" className="nav-link text-dark" to="/login">
                  <b>Login</b>
                </Link>
              </button>
              <h3>/</h3>
              <button className="btn" type="submit">
                <Link id="gg" className="nav-link text-dark" to="/signup">
                  <b>Signup</b>
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
