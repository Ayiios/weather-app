import { NavLink } from "react-router-dom";

const WeatherCard = ({items}) => {

  


    return(<div className="weather-card">

    <NavLink to={`/weather/${items.location.name}`}>
    <h1>{items.location.name}</h1>
    <p>{items.current.temp_c}</p>
     <p>{items.forecast.forecastday[0].date}</p>
      <img src={items.current.condition.icon} alt="symbol" />
      </NavLink>
    
    
    </div>); 



}

export default WeatherCard;