import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Financiallimit = () => {
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
            Financial Limit
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4" id="gg" style={{ color: "white" }}>
              Users can define short-term and long-term financial goals, such as
              saving for a vacation or reducing debt. The system tracks users'
              progress toward their goals and provides actionable steps to stay
              on track.
            </p>
          </div>
          <div
            className="overflow-hidden"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="container px-5">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

export default Financiallimit;
