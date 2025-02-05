import React, { useEffect, useState } from "react";
import weatherService from "../../services/weatherService";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";

const WeatherCharts = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [aggregatedData, setAggregatedData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await weatherService.getWeatherData();
      setWeatherData(data);

      // 🔹 Regroupement des données pour les graphiques en barres
      const aggregated = data.reduce((acc, curr, index) => {
        if (index % 24 === 0) { // Regroupement par jour (exemple)
          acc.push({
            time: curr.time.split(" ")[0], // Garde seulement la date
            avg_temp: parseFloat(curr.temperature_2m),
            avg_pred_temp: parseFloat(curr.predicted_temp),
            avg_humidity: parseFloat(curr.humidity),
            avg_wind_speed: parseFloat(curr.wind_speed_kmh),
            total_precipitation: parseFloat(curr.precipitation_mm),
          });
        }
        return acc;
      }, []);

      setAggregatedData(aggregated);
    };

    fetchWeatherData();
  }, []);

  if (!weatherData.length || !aggregatedData.length) return <p>Chargement des données météo...</p>;

  return (
    <div>
      <h2>Monitoring</h2>

      {/* 🔵 Graphique 1 : Température Réelle vs Prédictions ML */}
      <h3>Température réelle vs Température prédite</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature_2m" stroke="#8884d8" name="Température réelle" />
          <Line type="monotone" dataKey="predicted_temp" stroke="#82ca9d" name="Température prédite (ML)" />
        </LineChart>
      </ResponsiveContainer>

      {/* 🔵 Graphique en Barre : Moyenne des Températures */}
      <h3>Moyenne des Températures Réelles et Prédites</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aggregatedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="avg_temp" fill="#8884d8" name="Température Réelle" />
          <Bar dataKey="avg_pred_temp" fill="#82ca9d" name="Température Prédite" />
        </BarChart>
      </ResponsiveContainer>

      {/* 🔵 Graphique en Barre : Moyenne de l’Humidité */}
      <h3>Moyenne de l’Humidité (%)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aggregatedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="avg_humidity" fill="#1f77b4" name="Humidité (%)" />
        </BarChart>
      </ResponsiveContainer>

      {/* 🔵 Graphique en Barre : Moyenne de la Vitesse du Vent */}
      <h3>Moyenne de la Vitesse du Vent (km/h)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aggregatedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="avg_wind_speed" fill="#2ca02c" name="Vitesse du vent (km/h)" />
        </BarChart>
      </ResponsiveContainer>

           {/* 🔵 Graphique 2 : Humidité */}
       <h3>Évolution de l'humidité (%)</h3>
       <ResponsiveContainer width="100%" height={300}>
        <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
           <YAxis />
           <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="humidity" stroke="#1f77b4" name="Humidité (%)" />
         </LineChart>
       </ResponsiveContainer>

            {/* 🔵 Graphique 3 : Pression Atmosphérique */}
       <h3>Pression Atmosphérique (hPa)</h3>
       <ResponsiveContainer width="100%" height={300}>
         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
           <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="pressure_hPa" stroke="#ff7f0e" name="Pression (hPa)" />
         </LineChart>
       </ResponsiveContainer>

       {/* 🔵 Graphique 4 : Vitesse du Vent */}
       <h3>Vitesse du Vent (km/h)</h3>
       <ResponsiveContainer width="100%" height={300}>
         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
           <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="wind_speed_kmh" stroke="#2ca02c" name="Vitesse du vent (km/h)" />
         </LineChart>
       </ResponsiveContainer>

       {/* 🔵 Graphique 5 : Précipitations */}
       <h3>Précipitations (mm)</h3>
       <ResponsiveContainer width="100%" height={300}>
         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
           <YAxis />
           <Tooltip />
           <Legend />
           <Line type="monotone" dataKey="precipitation_mm" stroke="#d62728" name="Précipitations (mm)" />
         </LineChart>
       </ResponsiveContainer>

      {/* 🔵 Graphique en Barre : Total des Précipitations */}
      <h3>Total des Précipitations par Période</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={aggregatedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total_precipitation" fill="#d62728" name="Précipitations (mm)" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default WeatherCharts;



// import React, { useEffect, useState } from "react";
// import weatherService from "../../services/weatherService";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const WeatherCharts = () => {
//   const [weatherData, setWeatherData] = useState([]);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const data = await weatherService.getWeatherData();
//       setWeatherData(data);
//     };

//     fetchWeatherData();
//   }, []);

//   if (!weatherData.length) return <p>Chargement des données météo...</p>;

//   return (
//     <div>
      

//       {/* 🔵 Graphique 1 : Température Réelle vs Prédictions ML */}
//       <h3>Température réelle vs Température prédite</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="temperature_2m" stroke="#8884d8" name="Température réelle" />
//           <Line type="monotone" dataKey="predicted_temp" stroke="#82ca9d" name="Température prédite (ML)" />
//         </LineChart>
//       </ResponsiveContainer>

//       {/* 🔵 Graphique 2 : Humidité */}
//       <h3>Évolution de l'humidité (%)</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="humidity" stroke="#1f77b4" name="Humidité (%)" />
//         </LineChart>
//       </ResponsiveContainer>

//       {/* 🔵 Graphique 3 : Pression Atmosphérique */}
//       <h3>Pression Atmosphérique (hPa)</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="pressure_hPa" stroke="#ff7f0e" name="Pression (hPa)" />
//         </LineChart>
//       </ResponsiveContainer>

//       {/* 🔵 Graphique 4 : Vitesse du Vent */}
//       <h3>Vitesse du Vent (km/h)</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="wind_speed_kmh" stroke="#2ca02c" name="Vitesse du vent (km/h)" />
//         </LineChart>
//       </ResponsiveContainer>

//       {/* 🔵 Graphique 5 : Précipitations */}
//       <h3>Précipitations (mm)</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time" tick={{ fontSize: 10 }} />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="precipitation_mm" stroke="#d62728" name="Précipitations (mm)" />
//         </LineChart>
//       </ResponsiveContainer>

      

//     </div>
//   );
// };

// export default WeatherCharts;




