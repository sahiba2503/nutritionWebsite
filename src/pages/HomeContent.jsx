
import { Link } from "react-router-dom";
function HomeContent() {
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

              <Link to="/signup" className="primary-button">
                Get Started Free →
              </Link>

              <a href="#how-it-works" className="secondary-button">
                Learn More
              </a>

            </div>

          </div>

          <div className="hero-image">

            <div className="food-circle">
              🥗
            </div>

            <div className="floating-card card-one">
              🍎 AI Food Recognition
            </div>

            <div className="floating-card card-two">
              💚 Health Score
            </div>

          </div>

        </div>

     
    </div>
  )
}

export default HomeContent
