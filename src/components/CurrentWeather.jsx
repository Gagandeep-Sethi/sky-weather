import React, { useEffect } from 'react'

const CurrentWeather = () => {

    const getWeatherData=async()=>{
        const data=await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2a2f3b9e696007085a2813ceb7c7abf2")
        const json=await data.json()
        console.log(json)
      }
      useEffect(()=>{
       getWeatherData()
      },[])


  return (
    <div>CurrentWeather</div>
  )
}

export default CurrentWeather