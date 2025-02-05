import React, { useState } from "react";
import deviceService from "../../services/deviceService";

const AddDeviceForm = () => {
  const [formData, setFormData] = useState({ device_id: "", status: "active", temperature: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await deviceService.addDevice(formData);
    alert("Appareil ajouté !");
  };

  return (
    <div>
      <h3>➕ Ajouter un appareil</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="device_id" placeholder="ID de l'appareil" onChange={handleChange} required />
        <input type="number" name="temperature" placeholder="Température" onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddDeviceForm;