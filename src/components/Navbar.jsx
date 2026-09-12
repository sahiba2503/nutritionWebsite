
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  let Navigate = useNavigate();
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo */}
        <Link to='/' className='logo'>
          <div className='logo-icon'>🌿</div>

          <div className='logo-text'>
            <h2>DECODE</h2>
            <h2>YOUR PLATE</h2>
            <span>AI Nutrition Intelligence</span>
          </div>
        </Link>

        {/* Navigation */}
        <div className='nav-links'>
          <li onClick={() => Navigate("/homeContent/home")}>Home</li>
          <li onClick={() => Navigate("/homeContent/feature")}>Features</li>
          <li onClick={() => Navigate("/homeContent/about")}>About</li>
          <li onClick={() => Navigate("/homeContent/howItWork")}>How It Works</li>
        </div>
        
        {/* Auth buttons */}
        <div className='nav-buttons'>
          <li onClick={() => Navigate("/")}>Logout</li>
           </div>
      </div>
    </nav>
  );
}

export default Navbar;
