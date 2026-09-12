// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         <Route path="/" element={<Login />} />

//         <Route path="/home" element={<Home />}>

//           <Route path="about" element={<About />} />

//           <Route path="services" element={<Services />} />

//           <Route path="contact" element={<Contact />} />

//           <Route path="profile" element={<Profile />} />

//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Home() {
//   return (
//     <div>
//       <Navbar />

//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// export default Home;
{/* <Route path="/home" element={<Home />}> */}

//   <Route index element={<HomeBody />} />

//   <Route path="about" element={<About />} />

//   <Route path="services" element={<Services />} />

//   <Route path="contact" element={<Contact />} />

//   <Route path="profile" element={<Profile />} />

// </Route>

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Features from "./Features";
import HowItWork from "./HowItWork"
import ForgotPass from "./ForgotPass";
function MainContainer() {
  return (
    <div>
        <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
         <Route path='/feature' element={<Features />} />
          <Route path='/howItWork' element={<HowItWork />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPass' element={<ForgotPass />} />
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
