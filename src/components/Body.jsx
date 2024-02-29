import React, { useContext } from 'react'
import Search from './Search'
import CurrentWeather from './CurrentWeather'
import WeeklyWeather from './WeeklyWeather'
import { CityContext } from '../utils/CityContext'
import Shimmer from './Shimmer'

const Body = () => {

  const {cityName}=useContext(CityContext)
   
    



  return (
    <div className='h-[85%]  sm:h-[80%] w-[98%] border-2 border-white mt-[26%] xl:mt-[10%]        left-1/2 transform -translate-x-1/2   bg-white bg-opacity-15 backdrop-filter backdrop-blur-sm absolute top-0  rounded-2xl'>
        <div className='w-full text-center h-[5%] mt-20 xl:mt-0 '><Search /></div>
        {!cityName?<div className='w-full '><Shimmer/></div>:<>
        <div className='lg:flex w-full h-[95%]'>
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full  '><CurrentWeather/></div>
        <div className='w-full lg:w-1/2 h-1/2 lg:h-full '><WeeklyWeather/></div>
        </div>
        </>  
     }
        
    </div>
  )
}

export default Body