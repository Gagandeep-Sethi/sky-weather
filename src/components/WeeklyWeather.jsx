import React, { useContext, useState } from 'react';
import WeatherCard from './WeatherCard';
import { CityContext } from '../utils/CityContext';
import { WeatherContext } from '../utils/WeatherContext';
import useWeeklyWeather from '../utils/Hooks/useWeeklyWeather';

const WeeklyWeather = () => {
  const [cli, setCli] = useState(null);
  const {cityName}=useContext(CityContext)
  const {todayWeather, setTodayWeather}=useContext(WeatherContext)
  const [error,setError]=useState(null)
  
  useWeeklyWeather(setCli,cityName,todayWeather,setError,setTodayWeather)

  return (error?.cod==="404"?null:
    <div className="text-center text-white  h-[90%]">
      <p className='text-center text-2xl font-semibold lg:pt-10 -mt-20 lg:mt-0  '>Weekly Forecast</p>
      <div className='mt-6'>
      {cli &&
        Object.keys(cli).filter((date, index) => index !== 0).map((date) => {
          

          return (
            <WeatherCard key={date} everyDay={cli[date]}/>
            
          );
        })}
        </div>
    </div>
  );
};

export default WeeklyWeather;

