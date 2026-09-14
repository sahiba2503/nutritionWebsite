
import "../css/Dashboard.css";
 import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';
import Sidnavbar from "../components/Sidnavbar";

function HomeContent() {
   return (
   
      <div >  
      <Navbar /> 
      <div className="mainBody">
        <Sidnavbar />
        <Outlet/>
        </div>  
      
      
            
    </div>

    
      

  );
}

export default HomeContent;




