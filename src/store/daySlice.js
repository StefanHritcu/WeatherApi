import { createSlice } from "@reduxjs/toolkit";

// FUNZIONE PER OTTENERE DATA DI DOMANI
const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

// FUNZIONE PER OTTENERE DATA DI DOPODOMANI
const getDayAfterTomorrowDate = () => {
  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  return dayAfterTomorrow;
};

// FUNZIONE PER OTTENERE DATA DI 2 GIORNI DOPO DOPODOMANI
const getTwoDayAfterTomorrowDate = () => {
  const today = new Date();
  const twoDayAfterTomorrow = new Date(today);
  twoDayAfterTomorrow.setDate(today.getDate() + 3);
  return twoDayAfterTomorrow;
};

// FUNZIONE PER OTTENERE DATA DI 3 GIORNI DOPO DOPODOMANI
const getThreeDayAfterTomorrowDate = () => {
  const today = new Date();
  const threeDayAfterTomorrow = new Date(today);
  threeDayAfterTomorrow.setDate(today.getDate() + 4);
  return threeDayAfterTomorrow;
};

// FUNZIONE PER OTTENERE DATA DI 4 GIORNI DOPO DOPODOMANI
const getFourDayAfterTomorrowDate = () => {
  const today = new Date();
  const fourDayAfterTomorrow = new Date(today);
  fourDayAfterTomorrow.setDate(today.getDate() + 5);
  return fourDayAfterTomorrow;
};

// Funzione per ottenere il nome del giorno della settimana in italiano
const getDayOfWeekString = (date) => {
  const options = { weekday: "long", locale: "it-IT" };
  return date.toLocaleDateString("it-IT", options);
};

const initialState = {
  tomorrowNumber: getTomorrowDate().getDate(),
  tomorrowString: getDayOfWeekString(getTomorrowDate()),

  dayAfterTomorrowNumber: getDayAfterTomorrowDate().getDate(),
  dayAfterTomorrowString: getDayOfWeekString(getDayAfterTomorrowDate()),

  twoDayAfterTomorrowNumber: getTwoDayAfterTomorrowDate().getDate(),
  twoDayAfterTomorrowString: getDayOfWeekString(getTwoDayAfterTomorrowDate()),

  threeDayAfterTomorrowNumber: getThreeDayAfterTomorrowDate().getDate(),
  threeDayAfterTomorrowString: getDayOfWeekString(
    getThreeDayAfterTomorrowDate()
  ),

  fourDayAfterTomorrowNumber: getFourDayAfterTomorrowDate().getDate(),
  fourDayAfterTomorrowString: getDayOfWeekString(getFourDayAfterTomorrowDate()),
};

const daySlice = createSlice({
  name: "daySlice",
  initialState,
  reducers: {
    updateTomorrow: (state) => {
      const tomorrowDate = getTomorrowDate();
      state.tomorrowNumber = tomorrowDate.getDate();
      state.tomorrowString = getDayOfWeekString(tomorrowDate);
    },
    updateDayAfterTomorrow: (state) => {
      const dayAfterTomorrowDate = getDayAfterTomorrowDate();
      state.dayAfterTomorrowNumber = dayAfterTomorrowDate.getDate();
      state.dayAfterTomorrowString = getDayOfWeekString(dayAfterTomorrowDate);
    },
    updateTwoDayAfterTomorrow: (state) => {
      const twoDayAfterTomorrowDate = getTwoDayAfterTomorrowDate();
      state.twoDayAfterTomorrowNumber = twoDayAfterTomorrowDate.getDate();
      state.twoDayAfterTomorrowString = getDayOfWeekString(
        twoDayAfterTomorrowDate
      );
    },
    updateThreeDayAfterTomorrow: (state) => {
      const threeDayAfterTomorrowDate = getThreeDayAfterTomorrowDate();
      state.threeDayAfterTomorrowNumber = threeDayAfterTomorrowDate.getDate();
      state.threeDayAfterTomorrowString = getDayOfWeekString(
        threeDayAfterTomorrowDate
      );
    },
    updateFourDayAfterTomorrow: (state) => {
      const fourDayAfterTomorrowDate = getFourDayAfterTomorrowDate();
      state.fourDayAfterTomorrowNumber = fourDayAfterTomorrowDate.getDate();
      state.fourDayAfterTomorrowString = getDayOfWeekString(
        fourDayAfterTomorrowDate
      );
    },
  },
});

export const {
  updateTomorrow,
  updateDayAfterTomorrow,
  updateTwoDayAfterTomorrow,
  updateThreeDayAfterTomorrow,
  updateFourDayAfterTomorrow,
} = daySlice.actions;
export default daySlice.reducer;
