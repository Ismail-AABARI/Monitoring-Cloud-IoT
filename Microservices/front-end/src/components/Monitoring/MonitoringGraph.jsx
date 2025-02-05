import React, { useEffect, useState } from "react";
import monitoringService from "../../services/monitoringService";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const MonitoringGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await monitoringService.getData();
      setData(response);
    }
    fetchData();
  }, []);

  const chartData = {
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: "Valeurs des capteurs",
        data: data.map((d) => d.value),
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <h3>📊 Données des capteurs</h3>
      <Line data={chartData} />
    </div>
  );
};

export default MonitoringGraph;