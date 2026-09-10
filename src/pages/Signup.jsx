import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSignup = (event) => {

    event.preventDefault();

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);

    // Later we will send this data to Node.js API.

    navigate("/login");
  };

  return (
    <div className="auth-page">

      {/* Left Section */}

      <div className="auth-left signup-left">

        <Link to="/" className="auth-logo">
          🌿 Decode Your Plate
        </Link>

        <div className="auth-left-content">

          <p>AI NUTRITION INTELLIGENCE</p>

          <h1>
            Start Your
            <br />
            Health Journey
          </h1>

          <span>
            Create your account and get personalized
            nutrition insights, track your meals and
            build healthier habits.
          </span>

          <div className="auth-food">
            🥣 🫐 🍌
          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="auth-right">

        <form
          className="auth-form"
          onSubmit={handleSignup}
        >

          <h2>
            Create Account
          </h2>

          <p className="auth-subtitle">

            Already have an account?

            <Link to="/login">
              {" "}Login
            </Link>

          </p>

          {/* Full Name */}

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
            />

          </div>

          {/* Email */}

          <div className="form-group">

            <label>
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
            />

          </div>

          {/* Password */}

          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

          </div>

          {/* Confirm Password */}

          <div className="form-group">

            <label>
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Sign Up
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button
            type="button"
            className="social-button"
          >
            Continue with Google
          </button>

          <button
            type="button"
            className="social-button"
          >
            Continue with Facebook
          </button>

          <p className="terms">
            By signing up, you agree to our
            Terms & Conditions and Privacy Policy.
          </p>

        </form>

      </div>

    </div>
  );
}

export default Signup;