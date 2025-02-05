import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import authService from "../services/authService";
import "../css/styles.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await authService.login(formData);
    if (user) {
      login(user);
      navigate("/dashboard"); // Redirection après connexion
    }
  };

  return (
    <div className="form-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="modern-form">
        <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
        <button type="submit">Se connecter</button>
      </form>
      <p className="redirect-text">
        Pas encore de compte ? <span onClick={() => navigate("/register")}>Inscrivez-vous ici</span>
      </p>
    </div>
  );
};

export default LoginPage;



// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import authService from "../services/authService";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = await authService.login(formData);
//     if (user) {
//       login(user);
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div>
//       <h2>Connexion</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
//         <button type="submit">Se connecter</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;