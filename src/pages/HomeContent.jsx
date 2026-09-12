
import "../css/Home.css";
 import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';

function HomeContent() {
   return (
   
      <div >  
      <Navbar /> 
      <div>
        <Outlet/>
        </div>  
      
      
            
    </div>

    
      

  );
}

export default HomeContent;




