"use client";

import { useState } from "react";
import "./EmailValidation.css";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log("submitted");
}

export function EmailValidationForm() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setEmail(newValue);

    if (newValue === "") {
      setIsValid(true);
      return;
    }
    setIsValid(e.target.checkValidity());
  }

  const isInvalid = !isValid && email !== "";
  const isEmpty = email === "";

  return (
    <>
      <h1>Email Validation</h1>
      <form onSubmit={handleSubmit}>
        <div className="input__email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Type your email"
            required
          />
          {isInvalid && (
            <p className="input__email--error">Error: invalid email</p>
          )}
        </div>
        {/* with JS disabled, this button will never be enabled */}
        <button disabled={isInvalid || isEmpty} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
