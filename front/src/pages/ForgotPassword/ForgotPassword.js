import React from "react";

const ForgotPassword = () => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <h2>Reset your password</h2>
        <p>
          To reset your password, enter your email below and submit. An email
          will be sent to you with instructions about how to complete the
          process.
        </p>
        <div className="form-field">
          <label for="email">Email:</label>
          <input type="email" id="email" className="form-input" />
        </div>

        <button className="button">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
