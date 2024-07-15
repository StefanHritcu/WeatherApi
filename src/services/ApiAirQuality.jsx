import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIndexAirQuality } from "../store/mainSlice";

function ApiAirQuality() {
  const latData = useSelector((state) => state.meteoCity.lat);
  const lonData = useSelector((state) => state.meteoCity.lon);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetAirQualityData = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/air_pollution",
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

        const AirQualityData = response.data.list[0].main.aqi;
        console.log("Qualità dell'aria:", AirQualityData);

        dispatch(setIndexAirQuality(AirQualityData));
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero della qualità dell'aria.";

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
      fetchGetAirQualityData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiAirQuality;
