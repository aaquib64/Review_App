import React from "react";

function Signup() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h3 className="text-center mb-3">Sign Up</h3>
        <form className="row g-3">
          {/* Name Field */}
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Address Field */}
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Enter your password"
              required
            />
            <small id="passwordHelpBlock" className="form-text text-muted">
            Your password must be 8-20 characters long and include letters and numbers.
            </small>
          </div>

          {/* Submit Button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
