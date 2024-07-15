import { useSelector } from "react-redux";
import Search from "./Search";
import ApiIcon from "../services/ApiIcon";

function Home() {
  const temperature = useSelector((state) => state.meteoCity.temperature);
  const cityName = useSelector((state) => state.meteoCity.cityName);
  const weatherCondition = useSelector(
    (state) => state.meteoCity.weatherCondition
  );
  const airIndexQuality = useSelector(
    (state) => state.meteoCity.indexAirQuality
  );

  const SpeeeeeeedWind = useSelector((state) => state.meteoCity.windSpeed);

  const humidityData = useSelector((state) => state.meteoCity.humidity);
  const feelLikeTemp = useSelector((state) => state.meteoCity.feelLikeTemp);
  const pressureData = useSelector((state) => state.meteoCity.pressure);

  let bgClass = "bg-sky-400";
  if (weatherCondition.includes("rain")) {
    bgClass = "bg-gradient-to-b from-gray-600 to-blue-900";
  } else if (weatherCondition.includes("cloud")) {
    bgClass = "bg-gradient-to-b from-gray-100 to-gray-500";
  } else if (weatherCondition.includes("wind")) {
    bgClass = "bg-gradient-to-b from-sky-300 to-gray-400";
  } else if (weatherCondition.includes("clear")) {
    bgClass = "bg-gradient-to-b from-sky-400 to-cyan-700";
  }

  // Definizione della classe per il pallino in base all'indice di qualità dell'aria
  let dotClasses = "h-6 w-6 rounded-full inline-block mr-2";
  let descrizioneAria = "";

  switch (airIndexQuality) {
    case 1:
      dotClasses += " bg-green-500";
      descrizioneAria = "Ottima";
      break;
    case 2:
      dotClasses += " bg-yellow-300";
      descrizioneAria = "Buona";
      break;
    case 3:
      dotClasses += " bg-orange-400";
      descrizioneAria = "Moderata";
      break;
    case 4:
      dotClasses += " bg-orange-600";
      descrizioneAria = "Scarsa";
      break;
    case 5:
      dotClasses += " bg-black";
      descrizioneAria = "Molto scarsa";
      break;
    default:
      dotClasses += " bg-gray-300";
      descrizioneAria = "Error";
      break;
  }

  return (
    <>
      <div
        className={`relative h-[600px] tablet:h-[600px] ${bgClass} rounded-b-[50px]`}
      >
        <header>
          <Search />
        </header>
        <main className="mt-16 flex flex-col items-center justify-center">
          {/* CITY NAME */}
          <div className="text-white text-2xl font-semibold">{cityName}</div>
          {/* CONDITION ICON */}
          <ApiIcon />
          {/* TEMPERATURE */}
          <div>
            <h2 className="text-white text-[50px] font-bold">{temperature}°</h2>
          </div>

          {/* ------------------------------------------------------- */}

          <div className="tablet:flex tablet:justify-between">
            {/* ------------------------------------------------------- */}
            <div className="grid grid-cols-3 gap-4 grid-rows-2 px-4">
              {/* AIR QUALITY */}
              <div className="flex flex-col p-4 bg-white opacity-80 rounded-xl h-full">
                <h2 className="text-black font-semibold">Q. dell&apos;aria</h2>
                <div className="flex items-center">
                  <span className={dotClasses}></span>
                  <span className="text-center text-sm">{descrizioneAria}</span>
                </div>
              </div>

              {/* WIND SPEED */}
              <div className="flex flex-col p-4 bg-white opacity-80 rounded-xl h-full">
                <h2 className="text-black font-semibold">Vento</h2>
                <span className="text-center text-sm">
                  {SpeeeeeeedWind} km/h
                </span>
              </div>

              {/* HUMIDITY */}
              <div className="flex flex-col p-4 bg-white opacity-80 rounded-xl h-full">
                <h2 className="text-black font-semibold">Umidità</h2>
                <span className="text-center text-sm">{humidityData} %</span>
              </div>

              {/* FEEL LIKE TEMPERATURE */}
              <div className="flex flex-col p-4 bg-white opacity-80 rounded-xl h-full">
                <h2 className="text-black font-semibold">T. percepita</h2>
                <span className="text-center text-sm">{feelLikeTemp} °</span>
              </div>

              {/* ALERTA METEO */}
              <div className="3xs:block flex flex-col p-4 bg-white opacity-80 rounded-xl h-full">
                <h2 className="text-black font-semibold">Alerta</h2>
                <span className="text-center text-sm">0 Risultati</span>
              </div>

              {/* PRESSIONE ATMOSFERICA */}
              <div className="flex flex-col p-4 bg-white opacity-80 rounded-xl h-full">
                <h2 className="text-black font-semibold">Pressione At.</h2>
                <span className="text-center text-sm">{pressureData} mb</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
