import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {

    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    // Temporary navigation
    // Later we will connect the backend API here.
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">

      {/* Left Section */}

      <div className="auth-left">

        <Link to="/" className="auth-logo">
          🌿 Decode Your Plate
        </Link>

        <div className="auth-left-content">

          <p>AI NUTRITION INTELLIGENCE</p>

          <h1>
            Welcome
            <br />
            Back!
          </h1>

          <span>
            Login to your account and continue
            your healthy journey.
          </span>

          <div className="auth-food">
            🥑 🥗 🍅
          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="auth-right">

        <form
          className="auth-form"
          onSubmit={handleLogin}
        >

          <h2>
            Login to Your Account
          </h2>

          <p className="auth-subtitle">
            Welcome back! Please enter your details.
          </p>

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

            <div className="label-row">

              <label>
                Password
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Login
          </button>

          {/* Divider */}

          <div className="divider">
            <span>or</span>
          </div>

          {/* Social buttons */}

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

          <p className="auth-footer">
            Don't have an account?

            <Link to="/signup">
              {" "}Sign Up
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;