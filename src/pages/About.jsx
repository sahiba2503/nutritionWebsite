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


      {/* Features */}

      <section className="features-section">

        <div className="section-title">

          <p>WHAT WE OFFER</p>

          <h2>
            Everything You Need to Understand Your Food
          </h2>

        </div>


        <div className="about-features">

          <div className="about-feature-card">

            <div className="feature-icon">
              🤖
            </div>

            <h3>AI Food Recognition</h3>

            <p>
              Upload a food image and let AI identify the food
              automatically.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>Nutrition Analysis</h3>

            <p>
              Get information about calories, protein, carbohydrates,
              fats, vitamins, and minerals.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>Health Score</h3>

            <p>
              Understand the overall nutritional quality of your meal
              with a simple health score.
            </p>

          </div>


          <div className="about-feature-card">

            <div className="feature-icon">
              💡
            </div>

            <h3>Personalized Suggestions</h3>

            <p>
              Receive useful recommendations based on your nutrition
              information.
            </p>

          </div>

        </div>

      </section>


      {/* How It Works */}

      <section className="how-section">

        <div className="section-title">

          <p>HOW IT WORKS</p>

          <h2>
            Simple Steps to Better Nutrition
          </h2>

        </div>


        <div className="steps-container">

          <div className="step">

            <div className="step-number">
              01
            </div>

            <h3>Add Your Food</h3>

            <p>
              Upload a food photo or enter the food details manually.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              02
            </div>

            <h3>AI Analyzes It</h3>

            <p>
              AI identifies the food and analyzes its nutritional
              information.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              03
            </div>

            <h3>Understand Your Nutrition</h3>

            <p>
              View calories, nutrients, health score, and other
              nutrition details.
            </p>

          </div>


          <div className="step">

            <div className="step-number">
              04
            </div>

            <h3>Improve Your Choices</h3>

            <p>
              Follow personalized suggestions to build healthier
              eating habits.
            </p>

          </div>

        </div>

      </section>


      {/* Mission */}

      <section className="mission-section">

        <div className="mission-content">

          <p className="about-small-title">
            OUR MISSION
          </p>

          <h2>
            Making Nutrition Easy to Understand
          </h2>

          <p>
            Our goal is to make nutrition information simple,
            understandable, and useful for everyone. We believe that
            understanding your food is the first step toward making
            healthier decisions.
          </p>

          <Link to="/signup" className="about-button">
            Get Started Free →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;