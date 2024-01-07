import React from "react";

const Contact = () => {
  return (
    <div className="gradient-background">
      <div className="container my-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label
              htmlFor="firstName"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="lastName"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" />
          </div>
          <div className="col-12 my-2">
            <label
              htmlFor="inputAddress"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-6 my-2">
            <label
              htmlFor="inputCity"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4 my-2">
            <label
              htmlFor="inputState"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              State
            </label>
            <select
              id="inputState"
              className="form-select"
              style={{ color: "white" }}
            >
              <option selected>Choose...</option>
              <option>Maharashtra</option>
              <option>Gujrat</option>
              <option>Goa</option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Rajasthan</option>
            </select>
          </div>
          <div className="col-md-2 my-2">
            <label
              htmlFor="inputZip"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12 my-2">
            <label
              htmlFor="comment"
              id="gg"
              className="form-label"
              style={{ color: "white" }}
            >
              Comment
            </label>
            <textarea className="form-control" id="comment" rows="4"></textarea>
          </div>
          <div className="col-12 my-2">
            <button
              type="submit"
              id="gg"
              className="btn btn-primary"
              style={{ color: "white" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
