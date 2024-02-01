import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { saveAs } from "file-saver";

const Financiallimit = () => {
  const [dailyPurchases, setDailyPurchases] = useState([]);
  const [monthlyTotal, setMonthlyTotal] = useState(0);

  useEffect(() => {
    Aos.init();
    calculateMonthlyTotal(); // Initial calculation
    // You can load data from your storage or backend here if needed
  }, [dailyPurchases]); // Watch for changes in dailyPurchases

  useEffect(() => {
  }, [dailyPurchases]);

  const calculateMonthlyTotal = () => {
    const total = dailyPurchases.reduce((acc, purchase) => acc + parseFloat(purchase.amount), 0);
    setMonthlyTotal(total.toFixed(2));
  };

  const addDailyPurchase = async (name, amount) => {
    try {
      // Make a POST request to your backend
      const response = await fetch('http://localhost:5000/api/add-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, amount }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // If the backend successfully adds the purchase, update the local state
        const newPurchase = { name, amount: parseFloat(amount).toFixed(2) };
        setDailyPurchases([...dailyPurchases, newPurchase]);
      } else {
        console.error('Failed to add purchase');
      }
    } catch (error) {
      console.error('Error adding purchase', error);
    }
  };



  return (
    <>
      <div className="gradient-background">
        <div className="px-4 pt-5 text-center border-bottom">
          <h1 className="display-4 fw-bold " id="header" style={{ color: "white" }}>
          Expense Tracking
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4" id="gg" style={{ color: "white" }}>
             Users can effortlessly link their bank accounts and credit cards
              to automatically track transactions. Customizable categories and
              tags allow for easy expense classification. Expense data is
              presented through interactive graphs and charts for better
              visualization.
            </p>
          </div>
          <div
            className="overflow-hidden"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="container px-5">
              <img
                src="https://images.unsplash.com/photo-1423666523292-b458da343f6a?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="img-fluid border shadow-lg mb-4"
                alt="Example image"
                width={700}
                height={500}
                loading="lazy"
                style={{ borderRadius: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Left Section - Daily */}
      <div className="container mt-5">
        <h2>Daily Purchases</h2>
        <div>
          {/* Form for adding a new daily purchase */}
          <div className="mb-3">
            <label htmlFor="purchaseName" className="form-label">Purchase Name</label>
            <input type="text" className="form-control" id="purchaseName" placeholder="Enter purchase name" />
          </div>
          <div className="mb-3">
            <label htmlFor="purchaseAmount" className="form-label">Purchase Amount (INR)</label>
            <input type="number" className="form-control" id="purchaseAmount" placeholder="Enter purchase amount" />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              const purchaseName = document.getElementById("purchaseName").value;
              const purchaseAmount = document.getElementById("purchaseAmount").value;
              if (purchaseName && purchaseAmount) {
                addDailyPurchase(purchaseName, purchaseAmount);
              }
            }}
          >
            Add Purchase
          </button>
        </div>

        {/* Display daily purchases */}
        <ul>
          {dailyPurchases.map((purchase, index) => (
            <li key={index}>{purchase.name}: ₹{purchase.amount}</li>
          ))}
        </ul>
      </div>

      {/* Right Section - Monthly Total */}
      <div className="container mt-5">
        <h2>Monthly Total Expense</h2>
        <p>Total: ₹{monthlyTotal}</p>
      </div>
    </>
  );
};

export default Financiallimit;

