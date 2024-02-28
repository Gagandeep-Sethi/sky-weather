import React from 'react'
import { icon_URL } from '../utils/constants'
import clouds from '../images/clouds.png';
import humidity from '../images/humidity.png';
import temp from '../images/temp.png';
import wind from '../images/wind.png';

const WeatherCard = ({everyDay}) => {
    console.log(everyDay)
    const totalTemp = everyDay.reduce((total, obj) => total + obj?.main?.temp, 0);
    const avgTemp = (totalTemp / everyDay.length).toFixed(2);

    const totalClouds = everyDay.reduce((total, obj) => total + obj?.clouds?.all, 0);
    const avgClouds=Math.trunc(totalClouds/everyDay.length)

    const totalHumidity = everyDay.reduce((total, obj) => total + obj?.main?.humidity, 0);
    const avgHumidity = (totalHumidity / everyDay.length).toFixed(2);

    const totalWind = everyDay.reduce((total, obj) => total + obj?.wind?.speed, 0);
    const avgWind = (totalWind / everyDay.length).toFixed(2);

    
    console.log(avgTemp)
    
    function getWeekday(dateString) {
        
        const dateObject = new Date(dateString);
      
        
        const options = { weekday: 'long' };
        const dayOfWeek = dateObject.toLocaleString('en-US', options);
      
        return dayOfWeek;
      }

      const day=getWeekday(everyDay[0]?.dt_txt)
      


  return (
    <div className='flex justify-evenly mt-3 border-2 border-white mx-6 pt-2 rounded-3xl '>
        <div className='text-center'>
            <p >{day}</p>
            
            <div className='flex items-center'>
                <img src={icon_URL+everyDay[0]?.weather[0]?.icon+".png"} alt=''/>
            <p>{everyDay[0]?.weather[0]?.description}</p>
            </div>

        </div>

        <div>

            <div className='flex items-center'>
            <img className='h-6' src={temp} alt=''/>
            <p>{avgTemp}°C</p>    
            </div>

            <div className='flex items-center mt-3'>
            <img className='h-6' src={clouds} alt=''/>
            <p>{avgClouds}%</p>
            </div>

        </div>

        <div>

            <div className='flex items-center'>
            <img className='h-6' src={wind} alt=''/>
            <p>{avgWind}m/s</p>    
            </div>

            <div className='flex items-center mt-3'>
            <img className='h-6' src={humidity} alt=''/>
            <p>{avgHumidity}%</p>
            </div>

        </div>
    
    




    </div>
  )
}

export default WeatherCard