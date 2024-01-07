import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Ani from "./animations/goal.json";
import Secani from "./animations/secani.json";
import { Link } from "react-router-dom";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="gradient-background">
        <div>
          <div
            class="container col-xxl-9 px-4 py-5"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
          >
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div
                class="col-5 col-l-8 col-xl-6"
                style={{ backgroundColor: "#A7ECEE", borderRadius: "30px" }}
              >
                <Lottie
                  animationData={Ani}
                  style={{ width: "100%", height: "170%" }}
                />
              </div>

              <div class="col-lg-6">
                <h1
                  id="header"
                  class="display-1  lh-1 mb-3"
                  style={{ color: "white" }}
                >
                  <b>Banking Assistance Starts Here.</b>
                </h1>

                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button className="btn btn-info btn-lg" type="submit">
                    <Link id="gg" className="nav-link" to="/login">
                      <b>Login</b>
                    </Link>
                  </button>
                  <button className="btn btn-success btn-lg" type="submit">
                    <Link id="gg" className="nav-link" to="/signup">
                      <b>Signup</b>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
              <div
                style={{
                  width: "50%",
                  height: "40%",
                  backgroundColor: "#F4D160",
                  borderRadius: "30px",
                }}
                data-aos="zoom-in-left"
                data-aos-duration="1500"
              >
                <Lottie animationData={Secani} />
              </div>
              <div
                className="col-10 col-sm-8 col-lg-6"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <h1
                  id="header"
                  className="display-5  lh-1 mb-3"
                  style={{ color: "white" }}
                >
                  Future Growth and Innovation
                </h1>
              </div>
            </div>
          </div>

          <div className="container px-4 py-5" id="custom-cards">
            <h1
              id="header"
              className="pb-2 border-bottom"
              style={{ color: "white" }}
              data-aos="zoom-in"
            >
              Features that we offer
            </h1>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
              <div className="col">
                <a href="/expensetrack">
                  {" "}
                  {/* Add this link */}
                  <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: 'url("unsplash-photo-1.jpg")' }}
                    data-aos="zoom-in-right"
                    data-aos-duration="1500"
                  >
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h3
                        id="gg"
                        className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                      >
                        Expense Tracking
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="/financiallimit">
                  {" "}
                  {/* Add this link */}
                  <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: 'url("unsplash-photo-2.jpg")' }}
                    data-aos="zoom-out-up"
                    data-aos-duration="1500"
                  >
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h3
                        id="gg"
                        className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                      >
                        Financial Goal Setting
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col">
                <a href="/billsplitting">
                  {" "}
                  {/* Add this link */}
                  <div
                    className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                    style={{ backgroundImage: 'url("unsplash-photo-3.jpg")' }}
                    data-aos="zoom-in-left"
                    data-aos-duration="1500"
                  >
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                      <h3
                        id="gg"
                        className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                      >
                        Bill Splitting
                      </h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="container marketing">
            {/* Three columns of text below the carousel */}

            {/* /.row */}
            {/* START THE FEATURETTES */}
            <hr className="featurette-divider" />
            <div
              className="row featurette"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="col-md-7">
                <h2
                  id="header"
                  className="featurette-heading fw-normal lh-1"
                  style={{ color: "white" }}
                >
                  Expense Tracking
                </h2>
                <p id="gg" className="lead" style={{ color: "white" }}>
                  Users can effortlessly link their bank accounts and credit
                  cards to automatically track transactions. Customizable
                  categories and tags allow for easy expense classification.
                  Expense data is presented through interactive graphs and
                  charts for better visualization.
                </p>
              </div>
              <div className="col-md-5">
                <img
                  src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
                  alt="Featurette Image"
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <hr className="featurette-divider" />
            <div
              className="row featurette"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="500"
            >
              <div className="col-md-7 order-md-2">
                <h2
                  id="header"
                  className="featurette-heading fw-normal lh-1"
                  style={{ color: "white" }}
                >
                  Bill Splitting
                </h2>
                <p id="gg" className="lead" style={{ color: "white" }}>
                  Simplify shared financial responsibilities by creating groups
                  for roommates, friends, or family. Users can add shared
                  expenses and seamlessly split bills using smart algorithms
                  based on predefined rules. Notifications and reminders are
                  sent to all parties involved to ensure timely reimbursements.
                </p>
              </div>
              <div className="col-md-5 order-md-1">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
                  alt="Featurette Image"
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <hr className="featurette-divider" />
            <div
              className="row featurette"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div className="col-md-7">
                <h2
                  id="header"
                  className="featurette-heading fw-normal lh-1"
                  style={{ color: "white" }}
                >
                  Financial Limits
                </h2>
                <p id="gg" className="lead" style={{ color: "white" }}>
                  Users can define short-term and long-term financial goals,
                  such as saving for a vacation or reducing debt. The system
                  tracks users' progress toward their goals and provides
                  actionable steps to stay on track.
                </p>
              </div>
              <div className="col-md-5">
                <img
                  src="https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
                  alt="Featurette Image"
                  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <hr className="featurette-divider" />

            {/* /END THE FEATURETTES */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
