import DaysWeather from "./components/DaysWeather";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SicurezzaAndAttivita from "./components/SicurezzaAndAttivita";
import ApiAirQuality from "./services/ApiAirQuality";
import ApiAlert from "./services/ApiAlert";
import ApiCondition from "./services/ApiCondition";
import ApiDayAfterTomorrow from "./services/ApiDayAfterTomorrow";
import ApiFeelLikeTemp from "./services/ApiFeelLikeTemp";
import ApiFourDayAfterTomorrow from "./services/ApiFourDayAfterTomorrow";
import ApiHumidity from "./services/ApiHumidity";
import ApiPressure from "./services/ApiPressure";
import ApiTemperature from "./services/ApiTemperaure";
import ApiThreeDayAfterTomorrow from "./services/ApiThreeDayAfterTomorrow";
import ApiTomorrow from "./services/ApiTomorrow";
import ApiTwoDayAfterTomorrow from "./services/ApiTwoDayAfterTomorrow";
import ApiWind from "./services/ApiWind";

function App() {
  return (
    <>
      <div>
        <ApiTemperature />
        <ApiCondition />
        <ApiAirQuality />
        <ApiWind />
        <ApiHumidity />
        <ApiFeelLikeTemp />
        <ApiPressure />
        <ApiAlert />
        <ApiTomorrow />
        <ApiDayAfterTomorrow />
        <ApiTwoDayAfterTomorrow />
        <ApiThreeDayAfterTomorrow />
        <ApiFourDayAfterTomorrow />
      </div>
      <Home />
      <DaysWeather />
      <SicurezzaAndAttivita />
      <Footer />
    </>
  );
}

export default App;
