import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherCondition } from "../store/mainSlice";

function ApiCondition() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetWeatherCondition = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: latData,
              lon: lonData,
              appid: apiKey,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error(
            "Failed to fetch data. Server responded with status " +
              response.status
          );
        }

        const weatherCondition = response.data.weather[0].description;
        dispatch(setWeatherCondition(weatherCondition));
        console.log("Condizioni meteo oggi:", weatherCondition);
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della condizione del meteo.";

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
      fetchGetWeatherCondition();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiCondition;
