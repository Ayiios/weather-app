import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "./hooks/useFetch"
import Search from "./Search"

//Denna vy visar detaljerad info om vädret i en stad, man kommer hit genom navigering från home vyn.
const WeatherDetails = () => {

    const {location}= useParams()
    const[weatherLocation, setWeatherLocation] = useState(location);
    
   const Searching = (searchparam) => {

    setWeatherLocation(null)
    setWeatherLocation(searchparam)
   }
    

    var url = `http://api.weatherapi.com/v1/forecast.json?key=6c5515a185a943bc88c92724220404&q=${weatherLocation}&days=5&aqi=no&alerts=no`;

   
    


    console.log(location)

    const{data, loading, error} = useFetch(url);

    //Denna metod räknar ut vilken dag det är.
    var GetDay = (items) => {


        let date = new Date(items);
        let day = date.toLocaleString('sv-SE', {weekday: 'long'});

        return(day)

    }


    return(<div className="app">
     <Search callback={Searching}/>
    <div className="weather-card">
            
       
        {loading && <h1>Laddar..</h1> } 
        {error && <p className="error">Hittades ingen sökning - {error}</p>} 
      
        {data &&
         (<div className="container"> { 
       <div className="location"> 
           <h1>{data.location.name}</h1>
           </div>}
           <div className="temp">    
           <p><img src={data.forecast.forecastday[0].day.condition.icon} alt="symbol" /> Nu { data.current.temp_c } °C</p>
           <p><img src={data.forecast.forecastday[0].day.condition.icon} alt="symbol" />
    {GetDay(data.forecast.forecastday[0].date) + ": "+ data.forecast.forecastday[0].day.avgtemp_c + 
    "°C: Lägst: " + data.forecast.forecastday[0].day.mintemp_c + 
    "°C Högst: " + data.forecast.forecastday[0].day.maxtemp_c + " °C"}</p>

    <p>
    <img src={data.forecast.forecastday[1].day.condition.icon} alt="symbol" />
     {GetDay(data.forecast.forecastday[1].date) +": "+ data.forecast.forecastday[1].day.avgtemp_c + 
      "°C: Lägst: " + data.forecast.forecastday[1].day.mintemp_c +
      "°C Högst: " + data.forecast.forecastday[1].day.maxtemp_c + " °C"} </p>
     <p>
    <img src={data.forecast.forecastday[2].day.condition.icon} alt="symbol" />
     {GetDay(data.forecast.forecastday[2].date)   +": "+ data.forecast.forecastday[2].day.avgtemp_c + 
      "°C: Lägst: " + data.forecast.forecastday[2].day.mintemp_c + 
     "°C Högst: " + data.forecast.forecastday[2].day.maxtemp_c + " °C"} </p> 
          
    </div>
    
     


            




        </div>)}

    </div></div>)

}

export default WeatherDetails;