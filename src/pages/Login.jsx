import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    if (loading) {
      return;
    }

    setLoading(true);

    if (!email || !password) {
      setError("Please enter name and password ");
       setLoading(false);
      return;
    }
    if (email.length < 3 || password.length < 3) {
      setError("Please enter correct information");
       setLoading(false);
      return;
    }
    //  send this data to Node.js API.

    fetch("http://localhost:3000/validateAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("welcome  to you ");
          setEmail("");
          setError("");
          setPassword("");
          navigate("/");
        } else {
          setError("Please enter correct email and password");
          alert("Please enter correct email and password");
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("please enter correct email and password");
        alert("server error");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='auth-page'>
      {/* Left Section */}

      <div className='auth-left'>
        <Link to='/' className='auth-logo'>
          🌿 Decode Your Plate
        </Link>

        <div className='auth-left-content'>
          <p>AI NUTRITION INTELLIGENCE</p>

          <h1>
            Welcome
            <br />
            Back!
          </h1>

          <span>Login to your account and continue your healthy journey.</span>

          <div className='auth-food'>🥑 🥗 🍅</div>
        </div>
      </div>

      {/* Right Section */}

      <div className='auth-right'>
        <form className='auth-form'>
          <h2>Login to Your Account</h2>

          <p className='auth-subtitle'>
            Welcome back! Please enter your details.
          </p>

          {/* Email */}

          <div className='form-group'>
            <label>Email Address</label>

            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          {/* Password */}

          <div className='form-group'>
            <div className='label-row'>
              <label>Password</label>

              <li onClick={() => navigate("/forgotPass")}>Forgot Password?</li>
            </div>

            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {error ? error : ""}
          <button type='submit' className='auth-button' onClick={handleLogin}>
            Login
          </button>

          <p className='auth-footer'>
            Don't have an account?
            <li onClick={() => navigate("/signup")}> Sign Up</li>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
