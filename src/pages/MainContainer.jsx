import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Features from "./Features";
import HowItWork from "./HowItWork"
function MainContainer() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
         <Route path='/feature' element={<Features />} />
          <Route path='/howItWork' element={<HowItWork />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        <Route
          path='*'
          element={
            <div style={{ padding: "50px", textAlign: "center" }}>
              <h1>404</h1>
              <p>Page not found</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default MainContainer;
