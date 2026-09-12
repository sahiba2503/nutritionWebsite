
import HomeContent from "./pages/HomeContent";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowItWork from "./pages/HowItWork"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
function App() {
  return (
    <div>
     <Routes>
  <Route path="/" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
  <Route path="/forgotPass" element={<ForgotPass />} />
  <Route path="/homeContent" element={<HomeContent />}>
    <Route index element={<Home />} />
    <Route path="/homeContent/home" element={<Home />} />
    <Route path="/homeContent/about" element={<About />} />
    <Route path="/homeContent/feature" element={<Features />} />
    <Route path="/homeContent/howItWork" element={<HowItWork />} />
  </Route>
</Routes>
    </div>
  );
}

export default App;
