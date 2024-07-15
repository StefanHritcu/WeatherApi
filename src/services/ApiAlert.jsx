import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlertsData } from "../store/mainSlice";

function ApiAlert() {
  const lonData = useSelector((state) => state.meteoCity.lon);
  const latData = useSelector((state) => state.meteoCity.lat);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetAlertData = async () => {
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

        const data = response.data.alerts || [];
        console.log("Allerta meteo:", data);
        dispatch(setAlertsData(data));
      } catch (error) {
        let errorMessage =
          "Si è verificato un errore durante il recupero dell'allerta meteo.";

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
      fetchGetAlertData();
    }
  }, [latData, lonData, dispatch]);

  return null;
}

export default ApiAlert;
