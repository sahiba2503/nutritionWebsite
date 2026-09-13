import "../css/Profile.css";
import { useNavigate } from "react-router-dom";


function Profile( ) {
    let Navigate = useNavigate();
    const SECTIONS = [
  { key: "profile", icon: "👤" },
  { key: "notifications", icon: "🔔" },
  { key: "password", icon: "🔒" },
  { key: "help", icon: "🕐" },
];


  const user = {
    fullName: "Sahiba Parveen",
    email: "sahiba@gmail.com",
    dob: "10 Jul 2003",
    gender: "Female",
  }



  return (
    <div className='dyp-page'>
      <div className='dyp-profile-shell'>
        <aside className='dyp-side'>
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.key} className="asideListItem">
                 <span>{s.icon}</span>                  
                 <p>{s.key}</p>
              </li>
            ))}
            <li>
              <button className='is-danger' onClick={()=>{Navigate("/")}}>
                <span>⏻</span> Logout
              </button>
            </li>
          </ul>
        </aside>

        <section className='dyp-content'>
          
              <div className='dyp-profile-header'>
                <h2>Profile Information</h2>
                <button className='dyp-btn dyp-btn--outline' onClick={()=>{Navigate("/")}}>Edit</button>
              </div>

              <div className='dyp-profile-card'>
                <div className='dyp-profile-photo'>s</div>
                <div>
                  <h3>{user.fullName}</h3>
                  <p>{user.email}</p>
                </div>
              </div>

              <div className='dyp-field-grid'>
                <div className='dyp-field'>
                  <label>Full Name</label>
                  <div className='dyp-field__value'>{user.fullName}</div>
                </div>
                <div className='dyp-field'>
                  <label>Email</label>
                  <div className='dyp-field__value'>{user.email}</div>
                </div>
                <div className='dyp-field'>
                  <label>Date of Birth</label>
                  <div className='dyp-field__value'>{user.dob}</div>
                </div>
                <div className='dyp-field'>
                  <label>Gender</label>
                  <div className='dyp-field__value'>{user.gender}</div>
                </div>
              </div>           
        </section>
      </div>
    </div>
  );
}
export default Profile;
