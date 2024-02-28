import React, { useContext, useEffect, useState } from 'react'
import { icon_URL } from '../utils/constants'
import clouds from '../images/clouds.png';
import humidity from '../images/humidity.png';
import temp from '../images/temp.png';
import wind from '../images/wind.png';
import { CityContext } from '../utils/CityContext';
import { WeatherContext } from '../utils/WeatherContext';


const CurrentWeather = () => {
   const {todayWeather}=useContext(WeatherContext)
  const [cli ,setCli]=useState(null)
  const {cityName}=useContext(CityContext)
    const getWeatherData=async()=>{
      try {
        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_ApiKey}&units=metric`)
        const json=await data.json()
        //console.log(json)
        setCli(json)
      } catch (error) {
        console.log(error)
        
      }
      

        
      }
      useEffect(()=>{
       cityName&&getWeatherData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[cityName])


  return (cli?.cod==="404"?<h1>{cli?.message}</h1>:
    <div className='text-white mt-10'>
      <div>
        <div className="flex items-center justify-center ">
    <h1 className='text-center text-2xl font-semibold'>Current Weather</h1>
    </div>
    
    <div className='flex justify-evenly mt-8'>
      <p className='font-medium text-lg'>{cli?.name},{cli?.sys?.country}</p> 
      <div className=' '>
      <p className='px-auto font-medium text-lg text-center '>{cli?.main?.temp+"°C"}</p>
      <p className='font-extralight '>{cli?.weather[0]?.description}</p>
      </div>
      <img className='' src={icon_URL+cli?.weather[0]?.icon+".png"} alt='icon'/>

      </div>
      </div>
      

    <div className='mt-10'>
    <div className="flex items-center justify-center ">
      <h1 className='text-center text-2xl font-semibold '>Air Condition</h1>
      </div>

      <div className='flex justify-evenly pt-8'>
        <div>
          <div className='flex'>
        <img className='h-6' src={temp} alt=''/>
      <p className='text-centre font-extralight text-lg'>Feels like</p>
      </div>
      <p className='font-bold text-center'>{cli?.main?.feels_like}°C</p>
      </div>

      <div>
        <div className='flex'>
      <img className='h-6' src={wind} alt=''/>
      <p className='text-centre font-extralight text-lg'>Wind</p>
      </div>
      <p className='font-bold text-center'>{cli?.wind?.speed}m/s</p>
      </div>

      <div>
        <div className='flex'>
      <img className='h-6' src={clouds} alt=''/>
      <p className='text-centre font-extralight text-lg'>Clouds</p>
      </div>
      <p className='font-bold text-center'>{cli?.clouds?.all}%</p>
      </div>

      <div>
        <div className='flex'>
      <img className='h-6' src={humidity} alt=''/>
      <p className='text-centre font-extralight text-lg '>Humidity</p>
      </div>
      <p className='font-bold text-center'>{cli?.main?.humidity}%</p>
      </div>

      </div>
      </div>

      <div>

        <div className="flex items-center justify-center mt-10 ">
    <h1 className='text-center text-2xl font-semibold'>Today's Forecast</h1>
    </div>

    <div className='flex justify-center mt-8 '>
      {todayWeather&&todayWeather.map((data,i)=>{
        return(
        <div className='mr-4 text-center  border-white border-2 p-2 rounded-xl' key={i}> 
          <p className='font-extralight text-sm'>{data?.dt_txt.split(" ")[1]}</p>
          <img className='text-center' src={icon_URL+data?.weather[0]?.icon+".png"} alt=''/>
          <p className='font-bold '>{Math.trunc(data?.main?.temp)}°C</p>
        </div>)
      })}

    </div>
    </div>
    
    </div>



    
  )
}

export default CurrentWeather



 