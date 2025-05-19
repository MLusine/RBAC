import React from "react";

const ResetPassword = () => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-field">
          <label for="email">Email:</label>
          <input type="email" id="email" className="form-input" />
        </div>

        <div className="form-field">
          <label for="password">New Password:</label>
          <input type="password" id="password" className="form-input" />
        </div>
        <div className="form-field">
          <label for="password">Confirm Password:</label>
          <input type="password" id="password" className="form-input" />
        </div>
        <button className="button">Save</button>
      </form>
    </div>
  );
};

export default ResetPassword;
