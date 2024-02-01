import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li id="gg" className="nav-item">
            <Link to="/" className="nav-link px-2 text-body-secondary">
              <b>Home</b>
            </Link>
          </li>
          <li id="gg" className="nav-item">
            <Link
              to="/expensetrack"
              className="nav-link px-2 text-body-secondary"
            >
              <b>Expense Track</b>
            </Link>
          </li>
          <li id="gg" className="nav-item">
            <Link
              to="/billsplitting"
              className="nav-link px-2 text-body-secondary"
            >
              <b>Bill Splitting</b>
            </Link>
          </li>
          <li id="gg" className="nav-item">
            <Link
              to="/financiallimit"
              className="nav-link px-2 text-body-secondary"
            >
              <b>Financial Limits</b>
            </Link>
          </li>
        </ul>
        <p id="gg" className="text-center text-body-secondary">
          <b>© 2024 MoneyBuddy, Inc</b>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
