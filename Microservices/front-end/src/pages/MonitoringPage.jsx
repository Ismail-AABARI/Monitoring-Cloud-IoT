import React from "react";
import MonitoringGraph from "../components/Monitoring/MonitoringGraph";
import MonitoringLogs from "../components/Monitoring/MonitoringLogs";
import "../css/styles.css";
import GrafanaDashboard from "./GrafanaDashboard";

const MonitoringPage = () => {
  return (
    <div className="monitoring-container">
      <h2>Surveillance des appareils</h2>
      <GrafanaDashboard/>
      <div className="monitoring-grid">
        <MonitoringGraph />
        <MonitoringLogs />
      </div>
    </div>
  );
};

export default MonitoringPage;



// import React from "react";
// import MonitoringGraph from "../components/Monitoring/MonitoringGraph";
// import MonitoringLogs from "../components/Monitoring/MonitoringLogs";

// const MonitoringPage = () => {
//   return (
//     <div>
//       <h2>Surveillance des appareils</h2>
//       <MonitoringGraph />
//       <MonitoringLogs />
//     </div>
//   );
// };

// export default MonitoringPage;