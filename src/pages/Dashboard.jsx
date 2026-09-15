
 import "../css/Dashboard.css";
 import {useNavigate} from "react-router-dom";


export function Dashboard({userName="Sahiba"}) {
 const onNavigate = useNavigate();
  return (
    <div className="dyp-page">
           
        <section className="dyp-hero">
          <h1>Good Morning, {userName}! 🌿</h1>
          <p>Your health matters. Keep going!</p>
         
        </section>

        <section className="dyp-quickadd">
          <h2>Quick Add Meal</h2>
          <div className="dyp-tiles">
            
            <button className="dyp-tile" onClick={() => onNavigate("/addfood")}>
              <span className="dyp-tile__icon">📷</span>
              <div className="dyp-tile__title">Upload Food Photo</div>
              <div className="dyp-tile__sub">Let AI identify your food</div>
            </button>
            <button className="dyp-tile" onClick={() => onNavigate("/addfood")}>
              <span className="dyp-tile__icon">🔍</span>
              <div className="dyp-tile__title">Search Food</div>
              <div className="dyp-tile__sub">Enter food name or details</div>
            </button>
          </div>
        </section>

        <section className="dyp-banner">
          <div className="dyp-banner__img">🥗</div>
          <div className="dyp-banner__text">
            <h3>Small steps every day lead to big changes.</h3>
            <button className="dyp-btn">View Suggestions →</button>
          </div>
          <div className="dyp-banner__leaf">🌿🍃</div>
        </section>
     
    </div>
  );
}
 export default Dashboard;