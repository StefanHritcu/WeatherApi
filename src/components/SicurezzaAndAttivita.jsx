import { SlUmbrella } from "react-icons/sl"; // ombrello
import { FaRunning } from "react-icons/fa"; // running
import { IoSunnyOutline } from "react-icons/io5"; // indice UV
import { FaCarSide } from "react-icons/fa"; // guida sicura
import { PiPicnicTable } from "react-icons/pi"; // picnic
import { IoTelescopeOutline } from "react-icons/io5"; // telescope osservazione atmosferica
import { PiShirtFolded } from "react-icons/pi"; // abbigliamento
import { useSelector } from "react-redux";
import { GrUserWorker } from "react-icons/gr";

function SicurezzaAndAttivita() {
  const weatherCondition = useSelector(
    (state) => state.meteoCity.weatherCondition
  );

  const getUmbrellaCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "sunny":
      case "mostly clear":
      case "mostly sunny":
      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
      case "overcast clouds":
      case "few clouds":
      case "windy":
      case "gusty winds":
      case "strong breeze":
        return { descrizione: "Nessuna necessità", color: "bg-green-600" };

      case "light rain":
      case "moderate rain":
      case "rain":
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
        return { descrizione: "Necessario", color: "bg-orange-600" };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getRunningCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "sunny":
      case "mostly clear":
      case "mostly sunny":
      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
      case "overcast clouds":
      case "few clouds":
      case "windy":
      case "light rain":
      case "moderate rain":
      case "rain":
        return { descrizione: "Ottima", color: "bg-green-600" };

      case "gusty winds":
      case "strong breeze":
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
        return { descrizione: "Molto scarsa", color: "bg-orange-600" };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getUVCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "sunny":
      case "mostly clear":
      case "mostly sunny":
      case "few clouds":
        return { descrizione: "Indice UV Alto", color: "bg-orange-600" };

      case "cloudy":
      case "light rain":
      case "moderate rain":
      case "rain":
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
        return { descrizione: "Indice UV Basso", color: "bg-green-600" };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getDrivingCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "sunny":
      case "mostly clear":
      case "mostly sunny":
      case "few clouds":
      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
      case "overcast clouds":
        return { descrizione: "Condizioni Ottime", color: "bg-green-600" };

      case "light rain":
      case "moderate rain":
      case "rain":
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
      case "windy":
      case "gusty winds":
      case "strong breeze":
        return { descrizione: "Condizioni Pericolose", color: "bg-red-600" };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getPicnicCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "sunny":
      case "mostly clear":
      case "mostly sunny":
      case "few clouds":
      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
      case "overcast clouds":
        return { descrizione: "Condizioni Ottime", color: "bg-green-600" };

      case "windy":
      case "gusty winds":
      case "strong breeze":
      case "light rain":
      case "moderate rain":
      case "rain":
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
        return { descrizione: "Sconsigliato", color: "bg-orange-600" };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getObservationCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "mostly clear":
        return { descrizione: "Praticabile - Sereno", color: "bg-green-600" };

      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
        return {
          descrizione: "Non praticabile - Nuvoloso",
          color: "bg-orange-400",
        };

      case "rain":
      case "light rain":
      case "moderate rain":
      case "heavy intensity rain":
      case "torrential rain":
        return {
          descrizione: "Non praticabile - Pioggia",
          color: "bg-orange-400",
        };

      case "snow":
      case "light snow":
      case "snow showers":
        return {
          descrizione: "Non praticabile - Nevicata",
          color: "bg-orange-400",
        };

      case "windy":
      case "gusty winds":
      case "strong breeze":
        return {
          descrizione: "Non praticabile - Vento forte",
          color: "bg-orange-400",
        };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getClothingCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "mostly clear":
        return {
          descrizione: "Abbigliamento traspirante",
          color: "bg-green-600",
        };

      case "light rain":
      case "moderate rain":
      case "rain":
      case "heavy intensity rain":
      case "torrential rain":
      case "hail":
      case "thunderstorm":
      case "showers":
      case "drizzle":
      case "light intensity drizzle":
      case "heavy intensity drizzle":
        return {
          descrizione: "Abbigliamento per pioggia",
          color: "bg-red-600",
        };

      case "windy":
      case "gusty winds":
      case "strong breeze":
      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
      case "overcast clouds":
      case "few clouds":
      case "snow":
      case "light snow showers":
      case "snow showers":
      case "light snow":
        return {
          descrizione: "Abbigliamento adeguato alle condizioni",
          color: "bg-orange-600",
        };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const getActivityCondition = (condition) => {
    switch (condition) {
      case "clear":
      case "clear sky":
      case "sunny":
      case "mostly clear":
        return { descrizione: "Condizioni ideali", color: "bg-green-600" };

      case "cloudy":
      case "partly cloudy":
      case "broken clouds":
      case "mostly cloudy":
      case "few clouds":
      case "windy":
        return { descrizione: "Condizioni buone", color: "bg-yellow-400" };

      case "light rain":
      case "moderate rain":
      case "rain":
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
        return { descrizione: "Condizioni non ideali", color: "bg-orange-400" };

      default:
        return {
          descrizione: "Condizioni meteorologiche non disponibili",
          color: "bg-gray-400",
        };
    }
  };

  const activities = [
    {
      icon: <SlUmbrella className="text-white w-4 h-4" />,
      name: "Ombrello",
      condition: getUmbrellaCondition(weatherCondition),
    },
    {
      icon: <FaRunning className="text-white w-4 h-4" />,
      name: "Corsa",
      condition: getRunningCondition(weatherCondition),
    },
    {
      icon: <IoSunnyOutline className="text-white w-4 h-4" />,
      name: "Indice UV",
      condition: getUVCondition(weatherCondition),
    },
    {
      icon: <FaCarSide className="text-white w-4 h-4" />,
      name: "Guida Sicura",
      condition: getDrivingCondition(weatherCondition),
    },
    {
      icon: <PiPicnicTable className="text-white w-4 h-4" />,
      name: "Picnic",
      condition: getPicnicCondition(weatherCondition),
    },
    {
      icon: <IoTelescopeOutline className="text-white w-4 h-4" />,
      name: "Osservazione",
      condition: getObservationCondition(weatherCondition),
    },
    {
      icon: <PiShirtFolded className="text-white w-4 h-4" />,
      name: "Abbigliamento",
      condition: getClothingCondition(weatherCondition),
    },
    {
      icon: <GrUserWorker className="text-white w-4 h-4" />,
      name: "Lavori all'esterno",
      condition: getActivityCondition(weatherCondition),
    },
  ];

  return (
    <>
      <h1 className="text-center text-gray-700 text-3xl py-2 my-6">
        Attività e sicurezza
      </h1>
      <div className="grid grid-cols-2 p-1 gap-2 md:grid-cols-2 lg:grid-cols-3 tablet:gap-4 tablet:p-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-lg ${
              activity.condition?.color || "bg-blue-600"
            }`}
          >
            <div className="flex items-center space-x-4">
              {activity.icon}
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {activity.name}
                </h3>
                {activity.condition && (
                  <p className="text-white">{activity.condition.descrizione}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SicurezzaAndAttivita;
