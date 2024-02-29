import  { useEffect } from 'react'

const useWeeklyWeather = (setCli,cityName,todayWeather,setError,setTodayWeather) => {
    const getWeatherData = async () => {
        try {
          const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_ApiKey}&units=metric`);
          const json = await data.json();
          setError(json)
    
          const groupedData = json?.list.reduce((acc, obj) => {
            const date = obj.dt_txt.split(' ')[0]; // Extract date part
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(obj);
            return acc;
          }, {});
          
          setCli(groupedData);
          setTodayWeather(groupedData[Object.keys(groupedData).filter((date, index) => index === 0)])
          console.log(groupedData[Object.keys(groupedData).filter((date, index) => index === 0)])
          
        } catch (error) {
          console.log(error);
        }
      };
      console.log(todayWeather)
    
      useEffect(() => {
        getWeatherData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [cityName]);
}

export default useWeeklyWeather