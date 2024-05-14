import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./step1.css";

interface ErrorState {
  name?: string;
  email?: string;
  number?: string;
}

const Step1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState<ErrorState>({});
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
    const validationErrors: ErrorState = {};

    if (!name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!number.trim()) {
      validationErrors.number = "Phone number is required";
    } else if (!/^\+?\d+$/.test(number)) {
      validationErrors.number = "Invalid phone number";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
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
      <div className="navContainer step1">
        <button className="goBackBtn">
          Go back
        </button>
        <button className="nextBtn" onClick={handleStep1}>
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step1;