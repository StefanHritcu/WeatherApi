import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTomorroTempMin, setTomorrowTempMax } from "../store/mainSlice";

function ApiTomorrow() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetTempTomorrowData = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              lat: latData,
              lon: lonData,
              appid: apiKey,
              units: "metric",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error(
            "Failed to fetch data. Server responded with status " +
              response.status
          );
        }

        // Estrarre le temperature di domani dai dati della risposta
        const tomorrowTemperatures = response.data.list
          .filter((item) => {
            const forecastDate = new Date(item.dt * 1000);
            const now = new Date();
            // Controlla se la previsione è per domani
            return (
              forecastDate.getDate() === now.getDate() + 1 &&
              forecastDate.getMonth() === now.getMonth() &&
              forecastDate.getFullYear() === now.getFullYear()
            );
          })
          .map((item) => item.main.temp);

        if (tomorrowTemperatures.length > 0) {
          const tempMax = Math.max(...tomorrowTemperatures);
          const tempMaxRounded = tempMax.toFixed(1);
          const tempMin = Math.min(...tomorrowTemperatures);
          const tempMinRounded = tempMin.toFixed(1);
          console.log("Temperatura massima di domani:", tempMaxRounded);
          dispatch(setTomorrowTempMax(tempMaxRounded));
          console.log("Temperatura minima di domani:", tempMinRounded);
          dispatch(setTomorroTempMin(tempMinRounded));
        } else {
          console.error("Nessun dato trovato per la temperatura di domani.");
        }
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della temperatura del giorno di domani.";

        if (error.response) {
          errorMessage = `Errore ${error.response.status}: ${error.response.data.message}`;
        } else if (error.request) {
          errorMessage =
            "Nessuna risposta ricevuta dal server. Controlla la tua connessione internet.";
        } else {
          errorMessage =
            "Errore imprevisto. Controlla la tua connessione internet o riprova più tardi.";
        }

        console.error(errorMessage);
      }
    };

    if (latData && lonData) {
      fetchGetTempTomorrowData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiTomorrow;
