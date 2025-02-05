import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://10.152.183.84";  // Assure-toi que l’IP est correcte

const api = axios.create({
  baseURL: API_BASE_URL,  // Pas de /auth ici, il sera ajouté dans authService.js
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
// import axios from "axios";

// const API_BASE_URL = "http://10.152.183.84/auth";  // Vérifiez cette URL

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default api;


// import axios from "axios";

// const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// export default api;