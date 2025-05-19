import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = useParams();
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:5000/api/users/register/${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    const data = await res.json();
    if (res.ok) {
      alert("Registration successful. You can log in.");
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form">
        <h2>Complete Your Registration</h2>
        <input
          className="form-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          name="surname"
          placeholder="Surname"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
