import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
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
          <div
            className="overflow-hidden"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
