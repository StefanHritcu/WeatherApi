import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDayAfterTomorrowTempMax,
  setDayAfterTomorrowTempMin,
} from "../store/mainSlice";

function ApiDayAfterTomorrow() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetTempDayAfterTomorrowData = async () => {
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
        const dayAfterTomorrow = new Date(now);
        dayAfterTomorrow.setDate(now.getDate() + 2);

        const dayAfterTomorrowTemperatures = response.data.list
          .filter((item) => {
            const forecastDate = new Date(item.dt * 1000);
            return (
              forecastDate.getDate() === dayAfterTomorrow.getDate() &&
              forecastDate.getMonth() === dayAfterTomorrow.getMonth() &&
              forecastDate.getFullYear() === dayAfterTomorrow.getFullYear()
            );
          })
          .map((item) => item.main.temp);

        if (dayAfterTomorrowTemperatures.length > 0) {
          const tempMax = Math.max(...dayAfterTomorrowTemperatures);
          const tempMin = Math.min(...dayAfterTomorrowTemperatures);
          const tempMaxRounded = tempMax.toFixed(1);
          const tempMinRounded = tempMin.toFixed(1);

          console.log("Temperatura massima di dopodomani:", tempMaxRounded);
          dispatch(setDayAfterTomorrowTempMax(tempMaxRounded));
          console.log("Temperatura minima di dopodomani:", tempMinRounded);
          dispatch(setDayAfterTomorrowTempMin(tempMinRounded));
        } else {
          console.error(
            "Nessun dato trovato per la temperatura di dopodomani."
          );
        }
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della temperatura del giorno di dopodomani.";

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
      fetchGetTempDayAfterTomorrowData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiDayAfterTomorrow;
