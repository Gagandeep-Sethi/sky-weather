import  { useEffect } from 'react'

const useSearch = (search,setSearchOption) => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${search}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_GeoApiKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
      const getWeatherData=async()=>{
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setSearchOption(result?.data)
          
        } catch (error) {
          console.error(error);
        }}
  
        useEffect(()=>{
          setTimeout(()=>{
            getWeatherData()
          },300)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[search])
  
}

export default useSearch