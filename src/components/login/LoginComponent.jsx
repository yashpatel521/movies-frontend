import React, { useState } from "react";
import "./loginComponent.css";
import { Link, useNavigate } from "react-router-dom";

export const LoginComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "user2@user.com",
    password: "User1234",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          // Store user data in local storage
          localStorage.setItem("user", JSON.stringify(data.data));

          // Redirect user to home page
          navigate("/");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="loginMain">
      <form className="loginContainer" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div>
          <div className="input">
            <img src="/assets/email.png" alt="" />
            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div className="input">
            <img src="/assets/password.png" alt="" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="forgot-password">
          Forgot password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <Link to="/signup">
            <button className="submit">Sign Up</button>
          </Link>
          <button type="submit" className="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
