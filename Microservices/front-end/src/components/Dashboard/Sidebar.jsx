import React from "react";
import { Link } from "react-router-dom";
import "../../css/styles.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/devices">📱 Devices</Link></li>
        <li><Link to="/monitoring">📈 Monitoring Devices (GRAFANA) </Link></li>
        <li><Link to="/weather">📊 Monitoring Météo (ML)</Link></li>  {/* Nouvelle section météo */}
        <li><Link to="/auth/logout">🚪 Déconnexion</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;






// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/dashboard">🏠 Dashboard</Link></li>
//         <li><Link to="/devices">📱 Devices</Link></li>
//         <li><Link to="/monitoring">📊 Monitoring</Link></li>
//         <li><Link to="/auth/logout">🚪 Déconnexion</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Sidebar;