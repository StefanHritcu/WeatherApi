import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWindSpeed } from "../store/mainSlice";

function ApiWind() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetWindData = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
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

        const windData = response.data.wind.speed;
        console.log("Velocità del vento:", windData);
        dispatch(setWindSpeed(windData));
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della velocità del vento.";

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
      fetchGetWindData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiWind;
