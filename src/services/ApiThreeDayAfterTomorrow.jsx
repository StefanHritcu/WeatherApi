import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setThreeDayAfterTomorrowTempMax,
  setThreeDayAfterTomorrowTempMin,
} from "../store/mainSlice";

function ApiThreeDayAfterTomorrow() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetTempThreeDayAfterTomorrowData = async () => {
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

        const now = new Date();
        const threeDayAfterTomorrow = new Date(now);
        threeDayAfterTomorrow.setDate(now.getDate() + 4);

        const threeDayAfterTomorrowTemperatures = response.data.list
          .filter((item) => {
            const forecastDate = new Date(item.dt * 1000);
            return (
              forecastDate.getDate() === threeDayAfterTomorrow.getDate() &&
              forecastDate.getMonth() === threeDayAfterTomorrow.getMonth() &&
              forecastDate.getFullYear() === threeDayAfterTomorrow.getFullYear()
            );
          })
          .map((item) => item.main.temp);

        if (threeDayAfterTomorrowTemperatures.length > 0) {
          const tempMax = Math.max(...threeDayAfterTomorrowTemperatures);
          const tempMin = Math.min(...threeDayAfterTomorrowTemperatures);
          const tempMaxRounded = tempMax.toFixed(1);
          const tempMinRounded = tempMin.toFixed(1);

          console.log(
            "Temperatura massima di 3 giorni dopo dopodomani:",
            tempMaxRounded
          );
          dispatch(setThreeDayAfterTomorrowTempMax(tempMaxRounded));
          console.log(
            "Temperatura minima di 3 giorni dopo dopodomani:",
            tempMinRounded
          );
          dispatch(setThreeDayAfterTomorrowTempMin(tempMinRounded));
        } else {
          console.error(
            "Nessun dato trovato per la temperatura di 3 giorni dopo dopodomani."
          );
        }
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della temperatura di 3 giorni di dopo dopodomani.";

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
      fetchGetTempThreeDayAfterTomorrowData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiThreeDayAfterTomorrow;
