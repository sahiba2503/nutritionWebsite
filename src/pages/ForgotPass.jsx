import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function ForgotPass() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function checkEmail() {
    let parts = email.trim().split("@");

    if (parts.length !== 2) {
      setEmailError("Please enter a valid email");
      return false;
    }

    let username = parts[0];
    let domain = parts[1];

    if (username.length < 3) {
      setEmailError("Email username should be at least 3 characters");
      return false;
    }

    if (
      username.includes("@") ||
      username.includes("#") ||
      username.includes("$") ||
      username.includes("%") ||
      username.includes("!") ||
      username.includes("&") ||
      username.includes("?") ||
      username.includes("+") ||
      username.includes("-") ||
      username.includes("..") ||
      username.includes("_") ||
      username.includes(":") ||
      username.includes(";") ||
      username.includes("^") ||
      username.includes("/") ||
      username.includes(" ") ||
      username.includes(",") ||
      username.includes("'") ||
      username.includes("(") ||
      username.includes(")") ||
      username.includes("{") ||
      username.includes("}") ||
      username.includes("[") ||
      username.includes(">") ||
      username.includes("<") ||
      username.includes("]") ||
      username.includes("|") ||
      username.includes("`") ||
      username.includes("~")
    ) {
      setEmailError("Email contains invalid character");
      return false;
    }

    if (domain !== "gmail.com") {
      setEmailError("Please enter a valid Gmail address");
      return false;
    }

    setEmailError("");
    return true;
  }

  function checkPassword() {
    let userPassword = password.trim();
    if (userPassword.length < 8 || userPassword.length > 12) {
      setPasswordError("user's Password must be 8 to 12 characters");
      return false;
    }

    if (userPassword === userPassword.toLowerCase()) {
      setPasswordError("user's Password must contain one capital letter.");
      return false;
    }

    if (userPassword === userPassword.toUpperCase()) {
      setPasswordError("user's Password must contain one small letter.");
      return false;
    }
    if (userPassword.includes(" ")) {
      setPasswordError("user's Password should not contain space.");
      return false;
    }

    if (
      !( userPassword.includes("!") ||
        userPassword.includes("@") ||
        userPassword.includes("#") ||
        userPassword.includes("$") ||
        userPassword.includes("%") ||
        userPassword.includes("^") ||
        userPassword.includes("&") ||
        userPassword.includes("*") ||
        userPassword.includes("(") ||
        userPassword.includes(")") ||
        userPassword.includes(">") ||
        userPassword.includes("+") ||
        userPassword.includes("{") ||
        userPassword.includes("}") ||
        userPassword.includes("[") ||
        userPassword.includes("]") ||
        userPassword.includes("|") ||
        userPassword.includes("'") ||
        userPassword.includes(";") ||
        userPassword.includes(":") ||
        userPassword.includes("/") ||
        userPassword.includes("?") ||
        userPassword.includes(">") ||
        userPassword.includes("<") ||
        userPassword.includes(".") ||
        userPassword.includes("`") ||
        userPassword.includes("~") ||
        userPassword.includes(","))
    ) {
      setPasswordError("user's Password must contain one special character");
      return false;
    }

    if (
      !(userPassword.includes("0") ||
      userPassword.includes("1") ||
      userPassword.includes("2") ||
      userPassword.includes("3") ||
      userPassword.includes("4") ||
      userPassword.includes("5") ||
      userPassword.includes("6") ||
      userPassword.includes("7") ||
      userPassword.includes("8") ||
      userPassword.includes("9"))
    ) {
      setPasswordError("Password must contain one number");
      return false;
    }

    setPasswordError("");
    return true;
  }

  function handleUpdate(event) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError("");
    setEmailError("");
    setPasswordError("");

    if (!email.trim() || !password) {
      setError("Please fill all fields");
      return;
    }

    let emailValid = checkEmail();

    if (!emailValid) {
      return;
    }

    let passwordValid = checkPassword();

    if (!passwordValid) {
      return;
    }

    setLoading(true);

    fetch("http://localhost:3000/changePass", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          setEmail("");
          setPassword("");
          navigate("/");
        } else {
          setError(data.message || "Please enter correct email");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Server error. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className='auth-page'>
      <div className='auth-left'>
        <li> 🌿 Decode Your Plate</li>
        <li onClick={() => navigate("/")}>◀◁</li>

        <div className='auth-left-content'>
          <p>AI NUTRITION INTELLIGENCE</p>

          <h1>
            Reset
            <br />
            Password!
          </h1>

          <span>
            Enter your email and create a new password for your account.
          </span>

          <div className='auth-food'>🥑 🥗 🍅</div>
        </div>
      </div>

      <div className='auth-right'>
        <form className='auth-form' onSubmit={handleUpdate}>
          <h2>Forgot Password</h2>

          <p className='auth-subtitle'>
            Enter your email and create a new password.
          </p>

          <div className='form-group'>
            <label>Email Address</label>

            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={loading}
            />

            {emailError && <p>{emailError}</p>}
          </div>

          <div className='form-group'>
            <label>New Password</label>

            <input
              type='password'
              placeholder='Enter your new password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading}
            />

            {passwordError && <p>{passwordError}</p>}
          </div>

          {error && <p>{error}</p>}

          <button type='submit' className='auth-button' disabled={loading}>
            {loading ? "Changing Password..." : "Change Password"}
          </button>

          <p className='auth-footer'>
            Remember your password?{" "}
            <Link
              to='/'
              style={{
                pointerEvents: loading ? "none" : "auto",
              }}
            >
              Login
            </Link>
          </p>

          <p className='auth-footer'>
            Don't have an account?{" "}
            <Link
              to='/signup'
              style={{
                pointerEvents: loading ? "none" : "auto",
              }}
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
