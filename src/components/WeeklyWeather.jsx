import React, { useContext, useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';
import { CityContext } from '../utils/CityContext';
import { WeatherContext } from '../utils/WeatherContext';

const WeeklyWeather = () => {
  const [cli, setCli] = useState(null);
  const {cityName}=useContext(CityContext)
  const {todayWeather, setTodayWeather}=useContext(WeatherContext)
  const getWeatherData = async () => {
    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_ApiKey}&units=metric`);
      const json = await data.json();
      //console.log(json);

      const groupedData = json?.list.reduce((acc, obj) => {
        const date = obj.dt_txt.split(' ')[0]; // Extract date part
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(obj);
        return acc;
      }, {});
      
      setCli(groupedData);
      setTodayWeather(groupedData[Object.keys(groupedData).filter((date, index) => index === 0)])
      console.log(groupedData[Object.keys(groupedData).filter((date, index) => index === 0)])
      
    } catch (error) {
      console.log(error);
    }
  };
  console.log(todayWeather)

  useEffect(() => {
    getWeatherData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  return (cli?.cod==="404"?<h1>{cli?.message}</h1>:
    <div className="text-center text-white">
      <p className='text-center text-2xl font-semibold pt-8  '>Weekly Forecast</p>
      <div className='mt-6'>
      {cli &&
        Object.keys(cli).filter((date, index) => index !== 0).map((date) => {
          //console.log(cli[date])

          return (
            <WeatherCard key={date} everyDay={cli[date]}/>
            
          );
        })}
        </div>
    </div>
  );
};

export default WeeklyWeather;

