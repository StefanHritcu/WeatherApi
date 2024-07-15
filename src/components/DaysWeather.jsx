import { useSelector } from "react-redux";

function DaysWeather() {
  // TOMORROW
  const { tomorrowNumber, tomorrowString } = useSelector(
    (state) => state.daySlice
  );
  const firstThreeLettersTomorrow = tomorrowString
    .substring(0, 3)
    .toUpperCase();

  // DAY AFTER TOMORROW
  const { dayAfterTomorrowNumber, dayAfterTomorrowString } = useSelector(
    (state) => state.daySlice
  );
  const threeLetDayAfterTomorrow = dayAfterTomorrowString
    .substring(0, 3)
    .toUpperCase();

  // TWO DAY AFTER TOMORROW
  const { twoDayAfterTomorrowNumber, twoDayAfterTomorrowString } = useSelector(
    (state) => state.daySlice
  );
  const threeLetTwoDayAfterTomorrow = twoDayAfterTomorrowString
    .substring(0, 3)
    .toUpperCase();

  // THREE DAY AFTER TOMORROW
  const { threeDayAfterTomorrowNumber, threeDayAfterTomorrowString } =
    useSelector((state) => state.daySlice);
  const threeLetThreeDayAfterTomorrow = threeDayAfterTomorrowString
    .substring(0, 3)
    .toUpperCase();

  // FOUR DAY AFTER TOMORROW
  const { fourDayAfterTomorrowNumber, fourDayAfterTomorrowString } =
    useSelector((state) => state.daySlice);
  const threeLetFourDayAfterTomorrow = fourDayAfterTomorrowString
    .substring(0, 3)
    .toUpperCase();

  const { tomorrowTempMax, tomorrowTempMin } = useSelector(
    (state) => state.meteoCity
  );

  const { dayAfterTomorrowTempMax, dayAfterTomorrowTempMin } = useSelector(
    (state) => state.meteoCity
  );

  const { twoDayAfterTomorrowTempMax, twoDayAfterTomorrowTempMin } =
    useSelector((state) => state.meteoCity);

  const { threeDayAfterTomorrowTempMax, threeDayAfterTomorrowTempMin } =
    useSelector((state) => state.meteoCity);

  const { fourDayAfterTomorrowTempMax, fourDayAfterTomorrowTempMin } =
    useSelector((state) => state.meteoCity);
  return (
    <>
      <h1 className="text-center text-gray-700 text-3xl py-2 my-6">
        Previsioni giorni successivi
      </h1>
      {/* ROW TOMORROW AND DAY AFTER TOMORROW FOR MOBILE */}
      <div className="flex justify-center laptop:justify-around items-center">
        {/* TOMORROW MIN AND MAX TEMPERATURE */}
        <div className="tablet:p-4 tabletLarge:mx-4 tabletExtra:mx-1 tabletExtra:p-3 laptop:p-6 p-2 m-4 bg-sky-100 opacity-160 rounded-xl mx-2">
          <div className="tablet:text-2xl tabletExtra:text-3xl flex justify-center mb-4">
            <h2 className="mx-1">{firstThreeLettersTomorrow}</h2>
            <span className="mx-1">{tomorrowNumber}</span>
          </div>
          <div className="tablet:p-2 tablet:text-xl tabletExtra:p-4 laptop:text-2xl laptop:p-6 flex justify-around items-center p-1 m-2 bg-white opacity-120 rounded-xl">
            <div className="flex flex-col text-center p-1">
              <span>Max</span>
              <span>{tomorrowTempMax}</span>
            </div>
            <div className="flex flex-col text-center p-1 laptop:p-3">
              <span>Min</span>
              <span>{tomorrowTempMin}</span>
            </div>
          </div>
        </div>
        {/* DAY AFTER TOMORROW MIN AND MAX TEMPERATURE */}
        <div className="tablet:p-5 tabletLarge:mx-4 tabletExtra:mx-2 tabletExtra:p-3 laptop:p-6 p-2 m-4 bg-sky-100 opacity-160 rounded-xl mx-2">
          <div className="tablet:text-2xl tabletExtra:text-3xl flex justify-center mb-4">
            <h2 className="mx-1">{threeLetDayAfterTomorrow}</h2>
            <span className="mx-1">{dayAfterTomorrowNumber}</span>
          </div>
          <div className="tablet:p-2 tablet:text-xl tabletExtra:p-4 laptop:text-2xl laptop:p-6 flex justify-around items-center p-1 m-2 bg-white opacity-120 rounded-xl">
            <div className="flex flex-col text-center p-1">
              <span>Max</span>
              <span>{dayAfterTomorrowTempMax}</span>
            </div>
            <div className="flex flex-col text-center p-1 laptop:p-3">
              <span>Min</span>
              <span>{dayAfterTomorrowTempMin}</span>
            </div>
          </div>
        </div>
        {/* TWO DAY AFTER TOMORROW MIN AND MAX TEMPERATURE */}
        <div className="tablet:p-5 tabletLarge:mx-4 tabletExtra:mx-2 tabletExtra:p-3 laptop:p-6 p-2 m-4 bg-sky-100 opacity-160 rounded-xl mx-2">
          <div className="tablet:text-2xl tabletExtra:text-3xl flex justify-center mb-4">
            <h2 className="mx-1">{threeLetTwoDayAfterTomorrow}</h2>
            <span className="mx-1">{twoDayAfterTomorrowNumber}</span>
          </div>
          <div className="tablet:p-2 tablet:text-xl tabletExtra:p-4 laptop:text-2xl laptop:p-6 flex justify-around items-center p-1 m-2 bg-white opacity-120 rounded-xl">
            <div className="flex flex-col text-center p-1">
              <span>Max</span>
              <span>{twoDayAfterTomorrowTempMax}</span>
            </div>
            <div className="flex flex-col text-center p-1 laptop:p-3">
              <span>Min</span>
              <span>{twoDayAfterTomorrowTempMin}</span>
            </div>
          </div>
        </div>
        {/* THREE DAY AFTER TOMORROW MIN AND MAX TEMPERATURE */}
        <div className="hidden tablet:block tablet:p-5 tabletLarge:mx-4 tabletExtra:mx-2 tabletExtra:p-3 laptop:p-6 p-2 m-4 bg-sky-100 opacity-160 rounded-xl mx-2">
          <div className="tablet:text-2xl tabletExtra:text-3xl flex justify-center mb-4">
            <h2 className="mx-1">{threeLetThreeDayAfterTomorrow}</h2>
            <span className="mx-1">{threeDayAfterTomorrowNumber}</span>
          </div>
          <div className="tablet:p-2 tabletExtra:p-4 tablet:text-xl laptop:text-2xl laptop:p-6 flex justify-around items-center p-1 m-2 bg-white opacity-120 rounded-xl">
            <div className="flex flex-col text-center p-1">
              <span>Max</span>
              <span>{threeDayAfterTomorrowTempMax}</span>
            </div>
            <div className="flex flex-col text-center p-1 laptop:p-3">
              <span>Min</span>
              <span>{threeDayAfterTomorrowTempMin}</span>
            </div>
          </div>
        </div>
        {/* FOUR DAY AFTER TOMORROW MIN AND MAX TEMPERATURE */}
        <div className="hidden tabletExtra:block tablet:p-5 tabletExtra:mx-1 tabletLarge:mx-4 tabletExtra:p-3 laptop:p-6 p-2 m-4 bg-sky-100 opacity-160 rounded-xl mx-2">
          <div className="tablet:text-2xl tabletExtra:text-3xl flex justify-center mb-4">
            <h2 className="mx-1">{threeLetFourDayAfterTomorrow}</h2>
            <span className="mx-1">{fourDayAfterTomorrowNumber}</span>
          </div>
          <div className="tablet:p-2 tabletExtra:p-4 tablet:text-xl laptop:text-2xl laptop:p-6 flex justify-around items-center p-1 m-2 bg-white opacity-120 rounded-xl">
            <div className="flex flex-col text-center p-1">
              <span>Max</span>
              <span>{fourDayAfterTomorrowTempMax}</span>
            </div>
            <div className="flex flex-col text-center p-1 laptop:p-3">
              <span>Min</span>
              <span>{fourDayAfterTomorrowTempMin}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DaysWeather;
