import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="gradient-background">
        <div className="px-4 pt-5 text-center border-bottom">
          <h1
            className="display-4 fw-bold "
            id="header"
            style={{ color: "white" }}
          >
            Express Tracking
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
          <div className="overflow-hidden">
            <div
              className="container px-5"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
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
    </>
  );
};

export default About;
