import React, { useEffect, useState } from "react";
import monitoringService from "../../services/monitoringService";
import "../../css/styles.css";

const MonitoringLogs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    async function fetchLogs() {
      const response = await monitoringService.getData();
      setLogs(response);
    }
    fetchLogs();
  }, []);

  return (
    <div className="log-container">
      <h3>📜 Logs des appareils</h3>
      <div className="log-cards">
        {logs.map((log, index) => (
          <div key={index} className="log-card">
            {log.timestamp} - Capteur {log.sensor_id} : <strong>{log.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonitoringLogs;



// import React, { useEffect, useState } from "react";
// import monitoringService from "../../services/monitoringService";

// const MonitoringLogs = () => {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     async function fetchLogs() {
//       const response = await monitoringService.getData();
//       setLogs(response);
//     }
//     fetchLogs();
//   }, []);

//   return (
//     <div>
//       <h3>📜 Logs des appareils</h3>
//       <ul>
//         {logs.map((log, index) => (
//           <li key={index}>
//             {log.timestamp} - Capteur {log.sensor_id} : {log.value}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MonitoringLogs;