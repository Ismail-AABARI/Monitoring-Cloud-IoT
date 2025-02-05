import api from "./api";

const monitoringService = {
  getData: async () => {
    const response = await api.get("/data");
    return response.data;
  },
  addData: async (data) => {
    const response = await api.post("/data", data);
    return response.data;
  },
};

export default monitoringService;