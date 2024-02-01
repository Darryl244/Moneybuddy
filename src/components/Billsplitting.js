import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  const [expenses, setExpenses] = useState([]);
  const [names, setNames] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    Aos.init();
  }, []);

  const handleNameChange = (index, value) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleAmountChange = (index, value) => {
    const newExpenses = [...expenses];
    newExpenses[index] = parseFloat(value);
    setExpenses(newExpenses);
  };

  const handleAddPerson = () => {
    setNames([...names, ""]);
    setExpenses([...expenses, 0]);
  };

  const handleDeletePerson = (index) => {
    const newNames = [...names];
    const newExpenses = [...expenses];

    newNames.splice(index, 1);
    newExpenses.splice(index, 1);

    setNames(newNames);
    setExpenses(newExpenses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalAmount = expenses.reduce((acc, amount) => acc + amount, 0);
    const averageAmount = totalAmount / expenses.length;
    const newResults = expenses.map((amount, index) => ({
      name: names[index] || `Person ${index + 1}`,
      amount: amount - averageAmount,
    }));

    setResults(newResults);
  };

  return (
    <>
      <div className="gradient-background">
        {/* ... Your existing content ... */}

        <div
          className="container px-4 pt-5 text-center border-bottom"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          <h1 className="display-4 fw-bold " id="header" style={{ color: "white" }}>
            Bill Splitting
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4" id="gg" style={{ color: "white" }}>
              Simplify shared financial responsibilities by creating groups for
              roommates, friends, or family. Users can add shared expenses and
              seamlessly split bills using smart algorithms based on predefined
              rules. Notifications and reminders are sent to all parties
              involved to ensure timely reimbursements.
            </p>
          </div>
          <div className="container px-5">
              <img
                src="https://images.unsplash.com/photo-1598429349964-f780d8ea68fc?auto=format&fit=crop&q=80&w=1986&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid border shadow-lg mb-4"
                alt="Example image"
                width={700}
                height={500}
                loading="lazy"
                style={{ borderRadius: "30px" }}
              />
            </div>
          {/* Your bill splitting form */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <label id="gg" style={{ color: "white" }} className="form-label">Enter Names and Amounts in Rupees:</label>
              {names.map((name, index) => (
                <div key={index} className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={`Person ${index + 1} Name`}
                    value={name || ""}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                  />
                  <span className="input-group-text">₹</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder={`Amount Spent`}
                    value={expenses[index] || ""}
                    onChange={(e) => handleAmountChange(index, e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDeletePerson(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={handleAddPerson}
              >
                + Add Person
              </button>
            </div>

            <button type="submit" className="btn btn-primary">
              Calculate
            </button>
          </form>

          {/* Display the results */}
          <div>
            <h2 id="gg" style={{ color: "white" }} className="mb-3">Results</h2>
            <ul className="list-group">
              {results.map((result) => (
                <li
                  key={result.name}
                  className={`list-group-item ${
                    result.amount > 0 ? "list-group-item-success" : "list-group-item-danger"
                  }`}
                >
                  {`${result.name}: ${result.amount > 0 ? "Will Recieve" : "Pending"} ₹${Math.abs(
                    result.amount
                  )} from the group`}
                </li>
              ))}
            </ul>
          </div>

          {/* ... The rest of your content ... */}
        </div>
      </div>
    </>
  );
};

export default Service;

