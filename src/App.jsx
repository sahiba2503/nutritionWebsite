
import HomeContent from "./pages/HomeContent";
import { Routes, Route } from "react-router-dom";
import  Dashboard  from "./pages/Dashboard";
import Analyze from "./pages/Analyze";
import History from "./pages/History";
import Recommendations from "./pages/Recommendations"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import Profile from "./pages/Profile";
function App() {
  return (
    <div>
     <Routes>
  <Route path="/" element={<Login />} />
   <Route path="/signup" element={<Signup />} />
  <Route path="/forgotPass" element={<ForgotPass />} />
  <Route path="/homeContent" element={<HomeContent />}>
    <Route index element={<Dashboard />} />
    <Route path="/homeContent/dashboard" element={<Dashboard />} />
    <Route path="/homeContent/analyze" element={<Analyze />} />
    <Route path="/homeContent/history" element={<History />} />
    <Route path="/homeContent/recommendations" element={<Recommendations />} />
    <Route path="/homeContent/userProfile" element={<Profile />} />
  </Route>
</Routes>
    </div>
  );
}

export default App;
