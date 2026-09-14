
import { useNavigate } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  let Navigate = useNavigate();
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo */}
        <div className='logo'>
          <div className='logo-icon'>🌿</div>

          <div className='logo-text'>
            <h2>DECODE</h2>
            <h2>YOUR PLATE</h2>
            <span>AI Nutrition Intelligence</span>
          </div>
        </div>

        {/* Navigation */}
      
       

        {/* Auth buttons */}
            
           <button className='dyp-nav__user' onClick={() => Navigate("/homeContent/profile")}>
            Sahiba <span className='dyp-nav__avatar'>S</span>
          </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
