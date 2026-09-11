import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../css/Auth.css";

function ForgotPass() {
  const navigate = useNavigate();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  function handleUpdate (event) {
    event.preventDefault();
    if(loading){
      return;
    }
     
    setLoading(true);

    if (!email || !password) {
      setError("Please enter name and password ")
      setLoading(false);
       return;
    }
    if (email.length < 3 || password.length < 3) {
      setError("Please enter correct email information and password should be more than 3 character.");
      setLoading(false);
       return;
    }
     //  send this data to Node.js API.
    

      fetch("http://localhost:3000/changePass",{
        method:"POST",
        headers: {
  "Content-Type": "application/json"
       },
       body:JSON.stringify({email,password})
         })
         .then((res)=>res.json())
         .then((data)=>{
          if(data.success){
               alert("changed your password");
               navigate("/");
          }
          else{
            setError("Enter correct email");
            alert("Please Enter correct email ");
           
          }
         })
         .catch((error)=>{
          console.log(error);
          alert("server error");
          
         })
         .finally(()=>{
             setEmail("");
            setError("");
            setPassword("");
          setLoading(false);
         })   
     
   
  };

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
          <h2>Forgot Password</h2>

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
              <label>New Password</label>
             
            </div>

            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
           {error ? error : ""}
          <button  className='auth-button' onClick={handleUpdate}>
            change password
          </button>          

        
        </form>
      </div>
    </div>
  );
}

export default ForgotPass;
