import React, { useEffect, useState } from "react";
import deviceService from "../../services/deviceService";
import monitoringService from "../../services/monitoringService";
import "../../css/styles.css";

const DashboardStats = () => {
  const [deviceCount, setDeviceCount] = useState(0);
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const devices = await deviceService.getDevices();
      setDeviceCount(devices.length);
      
      const data = await monitoringService.getData();
      if (data.length > 0) setLatestData(data[data.length - 1]);
    }

    fetchData();
  }, []);

  return (
    <div className="stats-card">
      <h3>📊 Statistiques</h3>
      <p>📱 Nombre d’appareils : {deviceCount}</p>
      {latestData && (
        <p>🔄 Dernière mesure : {latestData.value} ({latestData.timestamp})</p>
      )}
    </div>
  );
};

export default DashboardStats;


// import React, { useEffect, useState } from "react";
// import deviceService from "../../services/deviceService";
// import monitoringService from "../../services/monitoringService";

// const DashboardStats = () => {
//   const [deviceCount, setDeviceCount] = useState(0);
//   const [latestData, setLatestData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const devices = await deviceService.getDevices();
//       setDeviceCount(devices.length);
      
//       const data = await monitoringService.getData();
//       if (data.length > 0) setLatestData(data[data.length - 1]);
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h3>📊 Statistiques</h3>
//       <p>📱 Nombre d’appareils : {deviceCount}</p>
//       {latestData && (
//         <p>🔄 Dernière mesure : {latestData.value} ({latestData.timestamp})</p>
//       )}
//     </div>
//   );
// };

// export default DashboardStats;