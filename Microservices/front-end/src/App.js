import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import DevicesPage from "./pages/DevicesPage";
import MonitoringPage from "./pages/MonitoringPage";
// import backgroundImage from "../src/assets/IotImage.jpeg"; // Import de l'image
import WeatherDashboard from "./pages/WeatherDashboard";
const App = () => {
  return (
    <AuthProvider>
      <div
        // style={{
        //   backgroundImage: `url(${backgroundImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        //   height: "100vh",
        //   width: "100vw",
        //   overflow: "hidden",
        // }}
      >
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/devices" element={<ProtectedRoute><DevicesPage /></ProtectedRoute>} />
            <Route path="/monitoring" element={<ProtectedRoute><MonitoringPage /></ProtectedRoute>} />
            <Route path="/weather" element={<ProtectedRoute><WeatherDashboard /></ProtectedRoute>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import DashboardPage from "./pages/DashboardPage";
// import DevicesPage from "./pages/DevicesPage";
// import MonitoringPage from "./pages/MonitoringPage";

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
//           <Route path="/devices" element={<ProtectedRoute><DevicesPage /></ProtectedRoute>} />
//           <Route path="/monitoring" element={<ProtectedRoute><MonitoringPage /></ProtectedRoute>} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;