import  { useEffect } from 'react'

const useCurrentWeather = (setCli,cityName) => {
    const getWeatherData=async()=>{
        try {
          const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_ApiKey}&units=metric`)
          const json=await data.json()
          
          setCli(json)
        } catch (error) {
          console.log(error)
          
        }
        
    
          
        }
        useEffect(()=>{
         cityName&&getWeatherData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[cityName])
}

export default useCurrentWeather