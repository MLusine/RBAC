import React, { useState } from "react";
import "./CreateUser.css";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleInvite = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Invitation sent! Check your email.");
        setEmail("");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error inviting user", err);
      alert("Error inviting user");
    }
  };

  return (
    <div className="wrapper create-user-wrapper">
      <h2 className="header">Create User</h2>
      <div className="form">
        <input
          type="email"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <button onClick={handleInvite} className="button">
          Send Invite
        </button>
        <a href="/home" className="btn back">
          {" "}
          Back
        </a>
      </div>
    </div>
  );
};

export default CreateUser;
