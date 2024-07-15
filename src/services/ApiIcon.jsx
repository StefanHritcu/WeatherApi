import SoleggiatoImg from "./../assets/images/sunny.png";
import NuvolosoImg from "./../assets/images/pertly.png";
import VentosoImg from "./../assets/images/wind.png";
import PiovosoImg from "./../assets/images/rain.png";
import { useSelector } from "react-redux";

function ApiIcon() {
  const weatherCondition = useSelector(
    (state) => state.meteoCity.weatherCondition
  );

  let imageSrc;
  let descrizione;

  switch (weatherCondition) {
    // SOLEGGIATO
    case "clear":
    case "clear sky":
    case "sunny":
    case "mostly clear":
    case "mostly sunny":
      imageSrc = SoleggiatoImg;
      descrizione = "Soleggiato";
      break;

    //NUVOLOSO
    case "cloudy":
    case "partly cloudy":
    case "mostly cloudy":
    case "overcast clouds":
    case "few clouds":
    case "broken clouds":
      imageSrc = NuvolosoImg;
      descrizione = "Nuvoloso";
      break;

    //VENTOSO
    case "windy":
    case "strong wind":
    case "breezy":
    case "gusty winds":
    case "blustery":
    case "strong breeze":
      imageSrc = VentosoImg;
      descrizione = "Ventoso";
      break;

    //PIOVOSO
    case "rain":
    case "light rain":
    case "moderate rain":
    case "heavy intensity rain":
    case "torrential rain":
    case "hail":
    case "thunderstorm":
    case "showers":
    case "drizzle":
    case "light intensity drizzle":
    case "heavy intensity drizzle":
    case "light snow showers":
    case "snow showers":
    case "light snow":
    case "snow":
      imageSrc = PiovosoImg;
      descrizione = "Piovoso";
      break;

    // DEFAULT
    default:
      imageSrc = SoleggiatoImg;
      descrizione = "Attenzione, nessun dato disponibile";
      break;
  }
  return (
    <>
      <img src={imageSrc} alt="Weather Icon" className="my-2 w-32 h-30" />
      <h2 className="text-white">{descrizione}</h2>
    </>
  );
}
export default ApiIcon;
