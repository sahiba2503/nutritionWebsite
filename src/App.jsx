// import { Routes, Route } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import About from "./pages/About";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />

//       <Route
//         path="*"
//         element={
//           <div style={{ padding: "50px", textAlign: "center" }}>
//             <h1>404</h1>
//             <p>Page not found</p>
//           </div>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
// import { Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import MainContainer from "./pages/MainContainer";

function App() {
  return (
    <div>
      <Navbar />
      <MainContainer />
    </div>
    
  );
}

export default App;