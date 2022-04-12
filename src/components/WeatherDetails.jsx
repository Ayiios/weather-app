import { useParams } from "react-router-dom"
import useFetch from "./hooks/useFetch"


const WeatherDetails = () => {

    const {location}= useParams()
    
   
    

    var url = `http://api.weatherapi.com/v1/forecast.json?key=6c5515a185a943bc88c92724220404&q=${location}&days=5&aqi=no&alerts=no`;

   
    


    console.log(location)

    const{data, loading, error} = useFetch(url);


    return(<div className="weather-details">
            
        
        {loading && <h1>Laddar..</h1> } 
        {error && <h1>Hittades ingen sökning - {error}</h1>} 
        <h3>Text i min weather details</h3>
        {data && (<div>
            <article>
        
           { <h1>{data.location.name}</h1>}
    <p>{data.current.temp_c}</p>
     <p>{data.forecast.forecastday[0].date}</p>
      <img src={data.current.condition.icon} alt="symbol" />


            </article>




        </div>)}

    </div>)

}

export default WeatherDetails;