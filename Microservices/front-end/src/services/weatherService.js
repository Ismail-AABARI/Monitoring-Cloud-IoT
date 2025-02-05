import Papa from "papaparse";

const weatherService = {
  getWeatherData: async () => {
    return new Promise((resolve, reject) => {
      Papa.parse("/data/weather_data_with_predictions.csv", {
        download: true,
        header: true,
        complete: (result) => resolve(result.data),
        error: (error) => reject(error),
      });
    });
  },
};

export default weatherService;