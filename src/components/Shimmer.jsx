import React from 'react'
import moon from '../images/moon.png';

const Shimmer = () => {
  return (
    <div className='text-white  w-full flex justify-center items-center '>
      <div className='pt-[15%]'>
      <div className="flex justify-center items-center w-full h-full">
      <img className=""src={moon} alt=''/>
      </div>

        
        <h1 className='text-2xl  font-extralight'>Explore current weather data and 5-day forecast of more than 200,000 cities!</h1>
        </div>
    </div>
  )
}

export default Shimmer