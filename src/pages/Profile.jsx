// import "../css/Profile.css";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// function Profile() {
//   let Navigate = useNavigate();
//   const [personalInf, setPersonalInf] = useState([]);
 
//   useEffect(() => {
//   fetch("http://localhost:3000/usersInfor")
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         setPersonalInf(data.users);
//       } else {
//         Navigate("/");
//       }
//     })
//     .catch((error) => {
//       console.log(error);
//       Navigate("/");
//     });
// },[]);

// const user = {
//   fullName: personalInf[0],
//   email: personalInf[1],
//   dob: "00 00 2000",
//   gender: "",
// };


  
//   return (
//     <div className='dyp-page'>
          
//           <div className='dyp-profile-header'>
//             <h2>Profile Information</h2>
//             <button
//               className='dyp-btn dyp-btn--outline'
//               onClick={() => {
//                 Navigate("/");
//               }}
//             >
//               Edit
//             </button>
//           </div>

//           <div className='dyp-profile-card'>
//             <div className='dyp-profile-photo'>s</div>
//             <div>
//               <h3>{user.fullName}</h3>
//               <p>{user.email}</p>
//             </div>
//           </div>

//           <div className='dyp-field-grid'>
//             <div className='dyp-field'>
//               <label>Full Name</label>
//               <div className='dyp-field__value'>{user.fullName}</div>
//             </div>
//             <div className='dyp-field'>
//               <label>Email</label>
//               <div className='dyp-field__value'>{user.email}</div>
//             </div>
//             <div className='dyp-field'>
//               <label>Date of Birth</label>
//               <div className='dyp-field__value'>{user.dob}</div>
//             </div>
//             <div className='dyp-field'>
//               <label>Gender</label>
//               <div className='dyp-field__value'>{user.gender}</div>
//             </div>
//           </div>
      
//       </div>
  
//   );
// }
// export default Profile;
import "../css/Profile.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Profile() {
  const Navigate = useNavigate();
  const [personalInf, setPersonalInf] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/usersInfor")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setPersonalInf(data.users);
        } else {
          Navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
        Navigate("/");
      });
  }, [Navigate]);

  const user = {
    fullName: personalInf[0],
    email: personalInf[1],
    dob: "00 00 2000",
    gender: "",
  };

  return (
    <div className="dyp-page">
      <div className="dyp-profile-header">
        <h2>Profile Information</h2>

        <button
          className="dyp-btn dyp-btn--outline"
          onClick={() => Navigate("/")}
        >
          Edit
        </button>
      </div>

      <div className="dyp-profile-card">
        <div className="dyp-profile-photo">s</div>

        <div>
          <h3>{user.fullName}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="dyp-field-grid">
        <div className="dyp-field">
          <label>Full Name</label>
          <div className="dyp-field__value">{user.fullName}</div>
        </div>

        <div className="dyp-field">
          <label>Email</label>
          <div className="dyp-field__value">{user.email}</div>
        </div>

        <div className="dyp-field">
          <label>Date of Birth</label>
          <div className="dyp-field__value">{user.dob}</div>
        </div>

        <div className="dyp-field">
          <label>Gender</label>
          <div className="dyp-field__value">{user.gender}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;