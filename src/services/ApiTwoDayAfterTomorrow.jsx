import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTwoDayAfterTomorrowTempMax,
  setTwoDayAfterTomorrowTempMin,
} from "../store/mainSlice";

function ApiTwoDayAfterTomorrow() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetTempTwoDayAfterTomorrowData = async () => {
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
        const twoDayAfterTomorrow = new Date(now);
        twoDayAfterTomorrow.setDate(now.getDate() + 3);

        const twoDayAfterTomorrowTemperatures = response.data.list
          .filter((item) => {
            const forecastDate = new Date(item.dt * 1000);
            return (
              forecastDate.getDate() === twoDayAfterTomorrow.getDate() &&
              forecastDate.getMonth() === twoDayAfterTomorrow.getMonth() &&
              forecastDate.getFullYear() === twoDayAfterTomorrow.getFullYear()
            );
          })
          .map((item) => item.main.temp);

        if (twoDayAfterTomorrowTemperatures.length > 0) {
          const tempMax = Math.max(...twoDayAfterTomorrowTemperatures);
          const tempMin = Math.min(...twoDayAfterTomorrowTemperatures);
          const tempMaxRounded = tempMax.toFixed(1);
          const tempMinRounded = tempMin.toFixed(1);

          console.log(
            "Temperatura massima di 1 giorno dopo dopodomani:",
            tempMaxRounded
          );
          dispatch(setTwoDayAfterTomorrowTempMax(tempMaxRounded));
          console.log(
            "Temperatura minima di 1 giorno dopo dopodomani:",
            tempMinRounded
          );
          dispatch(setTwoDayAfterTomorrowTempMin(tempMinRounded));
        } else {
          console.error(
            "Nessun dato trovato per la temperatura di 1 giorno dopo dopodomani."
          );
        }
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della temperatura di 1 giorno dopo dopodomani.";

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
      fetchGetTempTwoDayAfterTomorrowData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiTwoDayAfterTomorrow;
