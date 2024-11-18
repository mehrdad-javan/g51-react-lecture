import React, { useState } from "react";
import AlertMessage from "./AlertMessage";
import { FaCheckCircle } from "react-icons/fa";

const Person = () => {
  const [email, setEmail] = useState("demo@test.se");
  const [showAlert, setShowAlert] = useState(false);

  const handelEmailChange = (event) => {
    console.log(">>>>>", event.target.value);
    setEmail(event.target.value);
  };

  const handelClick = () => {
    setShowAlert(true);
  };

  const handelResetForm = () => {
    setEmail("");
    setShowAlert(false);
  }
  return (
    <>
      <div className="container mt-3">
        {showAlert && (
          <AlertMessage
            icon={<FaCheckCircle />}
            type="success"
            message="Operation Done!"
          />
        )}

        <form>
          <div className="mb-3 mt-3">
            <label for="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handelEmailChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handelClick}
          >
            Click Me
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handelResetForm}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Person;
