import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard';

const WeeklyWeather = () => {
  const [cli, setCli] = useState(null);

  const getWeatherData = async () => {
    try {
      const data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=2a2f3b9e696007085a2813ceb7c7abf2&units=metric");
      const json = await data.json();
      console.log(json);

      const groupedData = json?.list.reduce((acc, obj) => {
        const date = obj.dt_txt.split(' ')[0]; // Extract date part
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(obj);
        return acc;
      }, {});

      setCli(groupedData);
      //console.log(groupedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="text-center text-white">
      <p className='text-center text-2xl font-semibold pt-8  '>Weekly Forecast</p>
      <div className='mt-6'>
      {cli &&
        Object.keys(cli).filter((date, index) => index !== 0).map((date) => {
          console.log(cli[date])

          return (
            <WeatherCard key={date} everyDay={cli[date]}/>
            
          );
        })}
        </div>
    </div>
  );
};

export default WeeklyWeather;

// {/* <div key={date}>
//               <h3>{date}</h3>
//               <ul>
//                 {cli[date].map((obj) => (
                  
//                   <li key={obj.dt}>gggggg</li>
//                 ))}
//               </ul>
//             </div> */}