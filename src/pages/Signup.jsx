import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  function handleSignup (event) {
    event.preventDefault();
    if(loading){
      return;
    }
     
    setLoading(true);

    if (!name || !email || !password) {
      setError("Please fill all fields ")
       return;
    }
    if (name.length < 3 || email.length < 3 || password.length < 3) {
      setError("Please  enter correct information");
       return;
    }
     //  send this data to Node.js API.
    

      fetch("http://localhost:3000/createAccount",{
        method:"POST",
        headers: {
  "Content-Type": "application/json"
       },
       body:JSON.stringify({name,email,password})
         })
         .then((res)=>res.json())
         .then((data)=>{
          if(data.success){
            alert("your account is created");
            setName("");
             setEmail("");
            setError("");
            setPassword("");
             navigate("/login");
          }
          else{
            setError("something wrong please try again");
          }
         })
        //  .catch((error)=>{
        //   console.log(error);
        //  })
         .finally(()=>{
          setLoading(false);
         })
      
     
     
   
  };

  return (
    <div className='auth-page'>
      {/* Left Section */}

      <div className='auth-left signup-left'>
        <Link to='/' className='auth-logo'>
          🌿 Decode Your Plate
        </Link>

        <div className='auth-left-content'>
          <p>AI NUTRITION INTELLIGENCE</p>

          <h1>
            Start Your
            <br />
            Health Journey
          </h1>

          <span>
            Create your account and get personalized nutrition insights, track
            your meals and build healthier habits.
          </span>

          <div className='auth-food'>🥣 🫐 🍌</div>
        </div>
      </div>

      {/* Right Section */}

      <div className='auth-right'>
        <form className='auth-form'>
          <h2>Create Account</h2>

          <p className='auth-subtitle'>
            Already have an account?
            <Link to='/login'> Login</Link>
          </p>

          {/* Full Name */}

          <div className='form-group'>
            <label>Full Name</label>

            <input
              type='text'
              placeholder='Enter your full name'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

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
            <label>Password</label>

            <input
              type='password'
              placeholder='Create a password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
             {error ? error : ""}
          <button onClick={handleSignup} className='auth-button' disabled={loading}>
            Sign Up
          </button>

          <p className='terms'>
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
