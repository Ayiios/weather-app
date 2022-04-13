
import { NavLink } from "react-router-dom";

const WeatherCard = ({items}) => {




  
  


  let date = new Date(items.forecast.forecastday[0].date);
  let day = date.toLocaleString('sv-SE', {weekday: 'long'});
console.log(day);


  

    return(<div className="weather-card">

    <NavLink to={`/weather/${items.location.name}`}>
    <div className="location">
     <h1>{items.location.name}</h1>
     </div>
     <div className="temp">
    <p>{items.current.temp_c }  °C </p>
    </div>
     <p>{ day+ ": " + items.forecast.forecastday[0].date}</p>
      <img src={items.current.condition.icon} alt="symbol" />
      </NavLink>
    
    
    </div>); 



}

export default WeatherCard;