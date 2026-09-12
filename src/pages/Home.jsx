
import "../css/Home.css";
// import { useNavigate } from "react-router-dom";

function Home() {
  // let Navigate = useNavigate();
  return (
   
      <div className="hero">
      

        <div className="hero-content">

          <div className="hero-text">

            <p className="small-title">
              AI NUTRITION INTELLIGENCE
            </p>

            <h1>
              Understand Your Food.
              <br />
              <span>Improve Your Health.</span>
            </h1>

            <p className="hero-description">
              Upload your food photo or enter food details.
              Get instant nutrition analysis, detect deficiencies
              and build healthier habits with AI.
            </p>

            <div className="hero-buttons">
             <li className="primary-button" >Get Started Free</li>
              {/* <li className="primary-button" onClick={()=>Navigate("/signup")}>Get Started Free</li> */}
              {/* <li className="secondary-button" onClick={()=>Navigate("/howItWork")}>Learn More</li> */}
               <li className="secondary-button" >Learn More</li>

            </div>

          </div>

          <div className="hero-image">

            <div className="food-circle">
              🥗
            </div>
           


          </div>

        </div>

     
    </div>

    
      

  );
}

export default Home;

