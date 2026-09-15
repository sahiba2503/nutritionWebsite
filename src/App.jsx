import HomeContent from "./pages/HomeContent";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddFood from "./pages/AddFood";
import Suggestions from "./pages/Suggestions";
import Progress from "./pages/Progress";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPass from "./pages/ForgotPass";
import Profile from "./pages/Profile";
import Goal from "./pages/Goal";
function App() {
  return (
    <div className='appContainer'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPassword' element={<ForgotPass />} />
        <Route path='/homeContent' element={<HomeContent />}>
          <Route index element={<Dashboard />} />
          <Route path='/homeContent/dashboard' element={<Dashboard />} />
          <Route path='/homeContent/addFood' element={<AddFood />} />
          <Route path='/homeContent/suggestions' element={<Suggestions />} />
          <Route path='/homeContent/progess' element={<Progress />} />
          <Route path='/homeContent/profile' element={<Profile />} />
          <Route path='/homeContent/goal' element={<Goal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
