import React, { useEffect } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'




const Weather = () => {

    const search = async(city) =>{

      const [weatherData, setWeatherData] = useState(false)

      const allIcons = {
        "01d": clear_icon,
        "01n" : clear_icon,
        "01n" : cloud_icon,
        "01n" : cloud_icon,

      
      }


      try{
        const url=`https://api.openweathermap.org/data/2.5/weather?q={city}&units=metrics&appid=${import.meta.env.VITE_APP_ID}`;
        
        const response = await fetch(url);
        const data= await response.json();
        console.log(data);
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
        })
    
      }
      catch(error){

      }
    }

    useEffect(() => { 
      search("London");
    })


  return (
    <div className='weather'>
        <div className="search-bar">
            <input type="text" placeholder="Search" />
            <img  src={search_icon} alt="" / >
        </div>
        <img src={clear_icon} alt="" className="weather-icon"/>
        <p className='temperature'>16 C</p>
        <p className='location'>London</p>
        <div className='weather-data'>
        <div className="col">
          <img src={humidity_icon} alt=""/>
          <div>
            <p> 91% </p>
            <span>Humidity</span>
          </div>
          <div className="col">
          <img src={wind_icon} alt=""/>
          <div>
            <p> 3.6Km/h </p>
            <span>Humidity</span>
          </div>


        </div>
      </div>
    </div>
    </div>
    )}
  

export default Weather
