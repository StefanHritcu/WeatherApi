import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityName: "",
  lat: null,
  lon: null,
  temperature: 0,
  time: getCurrentTime(),
  weatherCondition: "",
  indexAirQuality: null,
  windSpeed: null,
  humidity: null,
  feelLikeTemp: null,
  pressure: null,
  alersData: [],
  tomorrowTempMax: null,
  tomorrowTempMin: null,
  dayAfterTomorrowTempMax: null,
  dayAfterTomorrowTempMin: null,
  twoDayAfterTomorrowTempMax: null,
  twoDayAfterTomorrowTempMin: null,
  threeDayAfterTomorrowTempMax: null,
  threeDayAfterTomorrowTempMin: null,
  fourDayAfterTomorrowTempMax: null,
  fourDayAfterTomorrowTempMin: null,
};

const mainSlice = createSlice({
  name: "meteoCity",
  initialState,
  reducers: {
    setCityName: (state, action) => {
      state.cityName = action.payload;
    },
    setLat: (state, action) => {
      state.lat = action.payload;
    },
    setLon: (state, action) => {
      state.lon = action.payload;
    },
    setTemperature: (state, action) => {
      state.temperature = action.payload;
    },
    updateTime: (state) => {
      state.time = getCurrentTime();
    },
    setWeatherCondition: (state, action) => {
      state.weatherCondition = action.payload;
    },
    setIndexAirQuality: (state, action) => {
      state.indexAirQuality = action.payload;
    },
    setWindSpeed: (state, action) => {
      state.windSpeed = action.payload;
    },
    setHumidity: (state, action) => {
      state.humidity = action.payload;
    },
    setFeelLikeTemp: (state, action) => {
      state.feelLikeTemp = action.payload;
    },
    setPressure: (state, action) => {
      state.pressure = action.payload;
    },
    setAlertsData: (state, action) => {
      state.alersData = action.payload;
    },
    setTomorrowTempMax: (state, action) => {
      state.tomorrowTempMax = action.payload;
    },
    setTomorroTempMin: (state, action) => {
      state.tomorrowTempMin = action.payload;
    },
    setDayAfterTomorrowTempMax: (state, action) => {
      state.dayAfterTomorrowTempMax = action.payload;
    },
    setDayAfterTomorrowTempMin: (state, action) => {
      state.dayAfterTomorrowTempMin = action.payload;
    },
    setTwoDayAfterTomorrowTempMax: (state, action) => {
      state.twoDayAfterTomorrowTempMax = action.payload;
    },
    setTwoDayAfterTomorrowTempMin: (state, action) => {
      state.twoDayAfterTomorrowTempMin = action.payload;
    },
    setThreeDayAfterTomorrowTempMax: (state, action) => {
      state.threeDayAfterTomorrowTempMax = action.payload;
    },
    setThreeDayAfterTomorrowTempMin: (state, action) => {
      state.threeDayAfterTomorrowTempMin = action.payload;
    },
    setFourDayAfterTomorrowTempMax: (state, action) => {
      state.fourDayAfterTomorrowTempMax = action.payload;
    },
    setFourDayAfterTomorrowTempMin: (state, action) => {
      state.fourDayAfterTomorrowTempMin = action.payload;
    },
  },
});

// FUNZIONE PER OTTENERE L'ORA CORRENTE
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export const {
  setCityName,
  setLat,
  setLon,
  setTemperature,
  updateTime,
  setWeatherCondition,
  setIndexAirQuality,
  setWindSpeed,
  setHumidity,
  setFeelLikeTemp,
  setPressure,
  setAlertsData,
  setTomorrowTempMax,
  setTomorroTempMin,
  setDayAfterTomorrowTempMax,
  setDayAfterTomorrowTempMin,
  setTwoDayAfterTomorrowTempMax,
  setTwoDayAfterTomorrowTempMin,
  setThreeDayAfterTomorrowTempMax,
  setThreeDayAfterTomorrowTempMin,
  setFourDayAfterTomorrowTempMax,
  setFourDayAfterTomorrowTempMin,
} = mainSlice.actions;

export default mainSlice.reducer;
