import React, { useContext, useEffect, useState } from 'react'
import { CityContext } from "../utils/CityContext";

const Search = () => {
  
  const {  cityName,setCityName } = useContext(CityContext);
  const[search,setSearch]=useState('')
  const[searchOption,setSearchOption]=useState(null)
  const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${search}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_GeoApiKey,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
  };
  
  const  handleSelectChange=(e)=>{
   setSearch(e.target.value)
  }
  const handleClick=(e)=>{
    e.preventDefault()
    setCityName(search)
    //console.log(cityName)

  }
  
    const getWeatherData=async()=>{
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        //console.log(result?.data)

        


        setSearchOption(result?.data)
        
      } catch (error) {
        console.error(error);
      }}

      useEffect(()=>{
        setTimeout(()=>{
          getWeatherData()
        },600)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[search])



  return (
    <div className=''>
      <form >
        <input type='text' placeholder='Search' value={search}  onChange={(e)=>setSearch(e.target.value)}></input>
        <select className=''  onChange={handleSelectChange}>
        <option value="">🔽</option>
        {searchOption&&searchOption.map((options, index) => (
          <option key={options?.id} value={options?.city}>
            {options?.city}{options?.countryCode}
          </option>
        ))}
      </select>
        <button type='submit' onClick={handleClick}>search</button>
        
      </form>
    </div>
  )
}

export default Search