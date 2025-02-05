import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import authService from "../services/authService";
import "../css/styles.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await authService.register(formData);
    if (user) {
      login(user);
      navigate("/dashboard"); // Redirection après inscription
    }
  };

  return (
    <div className="form-container">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="modern-form">
        <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
        <button type="submit">S'inscrire</button>
      </form>
      <p className="redirect-text">
        Déjà un compte ? <span onClick={() => navigate("/login")}>Connectez-vous ici</span>
      </p>
    </div>
  );
};

export default RegisterPage;



// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";
// import authService from "../services/authService";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({ username: "", email: "", password: "" });
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = await authService.register(formData);
//     if (user) {
//       login(user);
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div>
//       <h2>Inscription</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="username" placeholder="Nom d'utilisateur" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Mot de passe" onChange={handleChange} required />
//         <button type="submit">S'inscrire</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;