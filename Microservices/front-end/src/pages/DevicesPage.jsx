import React from "react";
import DeviceList from "../components/Devices/DeviceList";
import AddDeviceForm from "../components/Devices/AddDeviceForm";
import "../css/styles.css";

const DevicesPage = () => {
  return (
    <div className="devices-container">
      <h2>Gestion des appareils</h2>
      <div className="devices-grid">
        <AddDeviceForm />
        <DeviceList />
      </div>
    </div>
  );
};

export default DevicesPage;

// import React from "react";
// import DeviceList from "../components/Devices/DeviceList";
// import AddDeviceForm from "../components/Devices/AddDeviceForm";

// const DevicesPage = () => {
//   return (
//     <div>
//       <h2>Gestion des appareils</h2>
//       <AddDeviceForm />
//       <DeviceList />
//     </div>
//   );
// };

// export default DevicesPage;