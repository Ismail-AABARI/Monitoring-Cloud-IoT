import api from "./api";

const deviceService = {
  getDevices: async () => {
    const response = await api.get("/devices");
    return response.data;
  },
  addDevice: async (device) => {
    const response = await api.post("/devices", device);
    return response.data;
  },
};

export default deviceService;