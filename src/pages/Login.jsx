// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import "../css/Auth.css";

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   function handleLogin(event) {
//     event.preventDefault();
//     if (loading) {
//       return;
//     }

//     setLoading(true);

//     if (!email || !password) {
//       setError("Please enter name and password ");
//       setLoading(false);
//       return;
//     }
//     if (email.length < 3 || password.length < 3) {
//       setError("Please enter correct information");
//       setLoading(false);
//       return;
//     }
//     //  send this data to Node.js API.

//     fetch("http://localhost:3000/validateAccount", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//            navigate("/homeContent");
//         } else {
//           setError("Please enter correct email and password");
//           alert("Please enter correct email and password");

//         }
//       })
//       .catch((error) => {
//         console.log(error);
//         setError("please enter correct email and password");
//         alert("server error");
//       })
//       .finally(() => {
//         setLoading(false);
//          setEmail("");
//           setError("");
//           setPassword("");
//       });
//   }

//   return (
//     <div className='auth-page'>
//       {/* Left Section */}

//       <div className='auth-left'>
//         <Link to='/' className='auth-logo'>
//           🌿 Decode Your Plate
//         </Link>

//         <div className='auth-left-content'>
//           <p>AI NUTRITION INTELLIGENCE</p>

//           <h1>
//             Welcome
//             <br />
//             Back!
//           </h1>

//           <span>Login to your account and continue your healthy journey.</span>

//           <div className='auth-food'>🥑 🥗 🍅</div>
//         </div>
//       </div>

//       {/* Right Section */}

//       <div className='auth-right'>
//         <form className='auth-form'>
//           <h2>Login to Your Account</h2>

//           <p className='auth-subtitle'>
//             Welcome back! Please enter your details.
//           </p>

//           {/* Email */}

//           <div className='form-group'>
//             <label>Email Address</label>

//             <input
//               type='email'
//               placeholder='Enter your email'
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//             />
//           </div>

//           {/* Password */}

//           <div className='form-group'>
//             <div className='label-row'>
//               <label>Password</label>

//               <li onClick={() => navigate("/forgotPass")}>Forgot Password?</li>
//             </div>

//             <input
//               type='password'
//               placeholder='Enter your password'
//               value={password}
//               onChange={(event) => setPassword(event.target.value)}
//             />
//           </div>
//           {error ? error : ""}
//           <button type='submit' className='auth-button' onClick={handleLogin}>
//             Login
//           </button>

//           <p className='auth-footer'>
//             Don't have an account?
//             <li onClick={() => navigate("/signup")}> Sign Up</li>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function Login() {
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
      username.includes("!") ||
      username.includes("#") ||
      username.includes("$") ||
      username.includes("%") ||
      username.includes("&") ||
      username.includes("*") ||
      username.includes("+") ||
      username.includes("-")
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
    if (password.length < 8 || password.length > 12) {
      setPasswordError("Password must be 8 to 12 characters");
      return false;
    }

    if (password === password.toLowerCase()) {
      setPasswordError("Password must contain one capital letter");
      return false;
    }

    if (password === password.toUpperCase()) {
      setPasswordError("Password must contain one small letter");
      return false;
    }

    if (
      !password.includes("!") &&
      !password.includes("@") &&
      !password.includes("#") &&
      !password.includes("$") &&
      !password.includes("%") &&
      !password.includes("&") &&
      !password.includes("*")
    ) {
      setPasswordError("Password must contain one special character");
      return false;
    }

    if (
      !password.includes("0") &&
      !password.includes("1") &&
      !password.includes("2") &&
      !password.includes("3") &&
      !password.includes("4") &&
      !password.includes("5") &&
      !password.includes("6") &&
      !password.includes("7") &&
      !password.includes("8") &&
      !password.includes("9")
    ) {
      setPasswordError("Password must contain one number");
      return false;
    }

    setPasswordError("");
    return true;
  }

  function handleLogin(event) {
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

    fetch("http://localhost:3000/loginAccount", {
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
          navigate("/homeContent");
        } 
        else {
            alert(data.message);
          
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Server error. Please try again.");
      })
      .finally(() => {
        setLoading(false);
        setError("");
        setEmailError("");
        setPasswordError("");
      });
  }

  return (
    <div className='auth-page'>
      <div className='auth-left'>
        <Link
          to='/'
          className='auth-logo'
          style={{
            pointerEvents: loading ? "none" : "auto",
          }}
        >
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

      <div className='auth-right'>
        <form className='auth-form' onSubmit={handleLogin}>
          <h2>Login to Your Account</h2>

          <p className='auth-subtitle'>
            Welcome back! Please enter your details.
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
           
            { emailError? emailError : ""}
          </div>

          <div className='form-group'>
            <div className='label-row'>
              <label>Password</label>

              <Link
                to='/forgotPass'
                style={{
                  pointerEvents: loading ? "none" : "auto",
                }}
              >
                Forgot Password?
              </Link>
            </div>

            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={loading}
            />

            {passwordError ? passwordError : ""}
          </div>

        

          <button type='submit' className='auth-button' disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
             {error ? error : ""}
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

export default Login;
