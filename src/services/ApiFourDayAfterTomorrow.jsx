import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFourDayAfterTomorrowTempMax,
  setFourDayAfterTomorrowTempMin,
} from "../store/mainSlice";

function ApiFourDayAfterTomorrow() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetTempFourDayAfterTomorrowData = async () => {
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
        const fourDayAfterTomorrow = new Date(now);
        fourDayAfterTomorrow.setDate(now.getDate() + 5);

        const fourDayAfterTomorrowTemperatures = response.data.list
          .filter((item) => {
            const forecastDate = new Date(item.dt * 1000);
            return (
              forecastDate.getDate() === fourDayAfterTomorrow.getDate() &&
              forecastDate.getMonth() === fourDayAfterTomorrow.getMonth() &&
              forecastDate.getFullYear() === fourDayAfterTomorrow.getFullYear()
            );
          })
          .map((item) => item.main.temp);

        if (fourDayAfterTomorrowTemperatures.length > 0) {
          const tempMax = Math.max(...fourDayAfterTomorrowTemperatures);
          const tempMin = Math.min(...fourDayAfterTomorrowTemperatures);
          const tempMaxRounded = tempMax.toFixed(1);
          const tempMinRounded = tempMin.toFixed(1);

          console.log(
            "Temperatura massima di 4 giorni dopo dopodomani:",
            tempMaxRounded
          );
          dispatch(setFourDayAfterTomorrowTempMax(tempMaxRounded));
          console.log(
            "Temperatura minima di 4 giorni dopo dopodomani:",
            tempMinRounded
          );
          dispatch(setFourDayAfterTomorrowTempMin(tempMinRounded));
        } else {
          console.error(
            "Nessun dato trovato per la temperatura di 4 giorni dopo dopodomani."
          );
        }
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della temperatura di 4 giorni di dopo dopodomani.";

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
      fetchGetTempFourDayAfterTomorrowData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiFourDayAfterTomorrow;
