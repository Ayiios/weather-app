import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "./hooks/useFetch"
import Search from "./Search"


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
    <p>{data.current.temp_c} °C </p>
    </div>
     <p>Datum: {data.forecast.forecastday[0].date}</p>
      <img src={data.current.condition.icon} alt="symbol" />


            




        </div>)}

    </div></div>)

}

export default WeatherDetails;