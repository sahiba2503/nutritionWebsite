import { Link } from "react-router-dom";
import "../css/About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}

      <section className="about-hero">

        <div className="about-hero-content">

          <p className="about-small-title">
            ABOUT DECODE YOUR PLATE
          </p>

          <h1>
            Understand Your Food.
            <br />
            Improve Your Health.
          </h1>

          <p>
            Decode Your Plate is an AI-powered nutrition intelligence
            website that helps you understand the nutritional value of
            your food and make better food choices.
          </p>

          <Link to="/signup" className="about-button">
            Start Your Health Journey →
          </Link>

        </div>

        <div className="about-hero-image">
          <div className="food-circle">
            🥗
          </div>
        </div>

      </section>


      {/* What is Decode Your Plate */}

      <section className="about-section">

        <div className="section-title">

          <p>WHAT IS DECODE YOUR PLATE?</p>

          <h2>
            Your Personal Nutrition Assistant
          </h2>

        </div>


        <div className="about-description">

          <p>
            Decode Your Plate helps users understand what they eat.
            Users can upload a food photo or enter food information
            manually.
          </p>

          <p>
            The system uses Artificial Intelligence to analyze the food
            and provide useful nutrition information such as calories,
            protein, carbohydrates, fats, vitamins, and minerals.
          </p>

          <p>
            It also provides a health score and personalized
            recommendations to help users improve their daily diet.
          </p>

        </div>

      </section>


    </div>
  );
}

export default About;