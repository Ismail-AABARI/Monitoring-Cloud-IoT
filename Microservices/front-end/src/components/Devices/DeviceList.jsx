import React, { useEffect, useState } from "react";
import deviceService from "../../services/deviceService";

const DeviceList = () => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    async function fetchDevices() {
      const data = await deviceService.getDevices();
      setDevices(data);
    }
    fetchDevices();
  }, []);

  return (
    <div>
      <h3>📱 Liste des appareils</h3>
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            {device.device_id} - {device.status} - 🌡 {device.temperature}°C
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;