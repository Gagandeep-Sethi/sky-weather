import React, { useEffect, useState } from 'react'
import { icon_URL } from '../utils/constants'
import clouds from '../images/clouds.png';
import humidity from '../images/humidity.png';
import temp from '../images/temp.png';
import wind from '../images/wind.png';


const CurrentWeather = () => {
   
  const [cli ,setCli]=useState(null)
    const getWeatherData=async()=>{
        const data=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=55.7522&lon=37.6156&appid=2a2f3b9e696007085a2813ceb7c7abf2&units=metric")
        const json=await data.json()
        console.log(json)
        setCli(json)
      }
      useEffect(()=>{
       getWeatherData()
      },[])


  return (
    <div className='text-white pt-8'>
      <div>
        <div className="flex items-center justify-center ">
    <h1 className='text-center text-2xl font-semibold'>Current Weather</h1>
    </div>
    
    <div className='flex justify-evenly mt-4'>
      <p className='font-medium text-lg'>{cli?.name},{cli?.sys?.country}</p> 
      <div className=' '>
      <p className='px-auto font-medium text-lg text-center '>{cli?.main?.temp+"°C"}</p>
      <p className='font-extralight '>{cli?.weather[0]?.description}</p>
      </div>
      <img className='' src={icon_URL+cli?.weather[0]?.icon+".png"} alt='icon'/>

      </div>
      </div>
      

    <div className='mt-8'>
    <div className="flex items-center justify-center ">
      <h1 className='text-center text-2xl font-semibold '>Air Condition</h1>
      </div>

      <div className='flex justify-evenly pt-4'>
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
    </div>
    
    </div>



    
  )
}

export default CurrentWeather



