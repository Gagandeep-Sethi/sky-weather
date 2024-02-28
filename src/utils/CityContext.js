import React, { createContext, useState } from "react";

const CityContext = createContext({
  cityName: "",
  setCityName: () => {}
});

const CityProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");

  return (
    <CityContext.Provider value={{ cityName, setCityName }}>
      {children}
    </CityContext.Provider>
  );
};

export { CityContext, CityProvider };
