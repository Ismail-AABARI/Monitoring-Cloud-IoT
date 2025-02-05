import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardStats from "../components/Dashboard/DashboardStats";
import "../css/styles.css";

const DashboardPage = () => {
  return (
    
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Tableau de bord</h2>
        <DashboardStats />
      </div>
    </div>
  );
};

export default DashboardPage;



// import React from "react";
// import Sidebar from "../components/Dashboard/Sidebar";
// import DashboardStats from "../components/Dashboard/DashboardStats";

// const DashboardPage = () => {
//   return (
//     <div>
//       <Sidebar />
//       <div>
//         <h2>Tableau de bord</h2>
//         <DashboardStats />
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;