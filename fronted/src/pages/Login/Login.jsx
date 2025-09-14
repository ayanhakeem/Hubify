import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
  const { login } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      // Update context
      login({
        name: response.data.user.name,
        email: response.data.user.email,
        role: response.data.user.role,
      });

      // Save token & role for admin check
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.user.role);

      alert("Login successful!");

      // Redirect: admin -> /admin, users -> /events
      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/events");
      }
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
          "Something went wrong! Make sure server is running."
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>
          Login to <b>HackHub</b> and continue exploring events & hackathons!
        </p>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-redirect">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
