import React, { createContext, useState } from "react";

const WeatherContext = createContext({
  todayWeather: null,
  setTodayWeather: () => {}
});

const WeatherProvider = ({ children }) => {
  const [todayWeather, setTodayWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ todayWeather, setTodayWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
