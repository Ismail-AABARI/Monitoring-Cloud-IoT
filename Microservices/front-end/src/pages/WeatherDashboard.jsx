import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import WeatherCharts from "../components/Weather/WeatherCharts";
import "../css/styles.css";

const WeatherDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Tableau de bord météo basé sur le Machine Learning</h2>
        <WeatherCharts />
      </div>
    </div>
  );
};

export default WeatherDashboard;