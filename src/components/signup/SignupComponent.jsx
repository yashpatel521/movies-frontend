import React, { useState } from "react";
import "./signupComponent.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SignupComponent = () => {
  const [firstName, setFirstName] = useState("Default First Name");
  const [lastName, setLastName] = useState("Default Last Name");
  const [email, setEmail] = useState("default@email.com");
  const [password, setPassword] = useState("DefaultPassword123");
  const [confirmPassword, setConfirmPassword] = useState("DefaultPassword123");
  const [isChecked, setIsChecked] = useState(true);
  const navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const data = {
      username: firstName + " " + lastName,
      email: email,
      password: password,
    };

    fetch("http://localhost:4000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          navigate("/");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="SignupMain">
      <div className="SignupContainer">
        <div className="header">
          <div className="text">SignUp</div>
          <div className="underline"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src="/assets/person.png" alt="" />
            <input
              type="text"
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="/assets/person.png" alt="" />
            <input
              type="text"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="/assets/email.png" alt="" />
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="/assets/password.png" alt="" />
            <input
              type="password"
              placeholder="NewPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <img src="/assets/confirmpassword.png" alt="" />
            <input
              type="password"
              placeholder="ConfirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <input
              type="checkbox"
              id="terms-and-conditions"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms-and-conditions">
              I agree to the terms and conditions of Watchers
            </label>
          </div>
          <button type="submit">Create an account</button>
          <Link to="/login">
            <button className="submit">Log In</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
