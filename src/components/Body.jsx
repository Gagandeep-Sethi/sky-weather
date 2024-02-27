import React from 'react'
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import WeeklyWeather from './WeeklyWeather'

const Body = () => {
   
    



  return (
    <div className='h-[85%]  sm:h-[80%] w-[98%] border-2 border-white mt-[26%] xl:mt-[10%]        left-1/2 transform -translate-x-1/2   bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm absolute top-0  rounded-2xl'>
        <Search/>
        <div className='w-1/2 border-r-2 border-white h-[90%]'><CurrentWeather/></div>
        <div className='w-1/2'><WeeklyWeather/></div>
        
    </div>
  )
}

export default Body