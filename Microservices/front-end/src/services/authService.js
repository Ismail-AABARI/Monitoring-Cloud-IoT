import api from "./api";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);  // Ajouter "/auth"
    return response.data;
  },
  register: async (data) => {
    const response = await api.post("/auth/register", data);  // Ajouter "/auth"
    return response.data;
  },
};

export default authService;