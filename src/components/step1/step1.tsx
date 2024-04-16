import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./step1.css";

const Step1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    if (!number.trim()) {
      errors.number = "Phone number is required";
    } else if (!/^\+?\d+$/.test(number)) {
      errors.number = "Invalid phone number";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleStep1 = () => {
    if (validateForm()) {
      // Proceed to the next step
      navigate("/step2");
    }
  };

  return (
    <>
      <div className="stepContainer">
        <h1>Personal info</h1>
        <h3>Please provide your name, email address, and phone number.</h3>
        <form>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="e.g. Stephen King"
            className={errors.name ? "error" : ""}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </label>
        <label>
          Email Address
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="e.g. stephenking@example.com"
            className={errors.email ? "error" : ""}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </label>
        <label>
          Phone Number
          <input
            type="text"
            value={number}
            onChange={handleNumberChange}
            placeholder="e.g. +1 234 567 890"
            className={errors.number ? "error" : ""}
          />
          {errors.number && <div className="error-message">{errors.number}</div>}
        </label>
        </form>
      </div>
      <div className="navContainer">
        <button id="goBackBtn" style={{ display: "none" }}>
          Go back
        </button>
        <button id="nextBtn" onClick={handleStep1}>
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step1;