import { useState } from "react"
import useFetch from "../hooks/useFetch";
import Search from "../Search";
import WeatherCard from "../WeatherCard";

//Min home vy som sidan startar på. Här visas inte alla detaljer för staden utan man måste klicka på kortet för det.
const Home = () => {

    const[location, setLocation] = useState("stockholm");

    console.log(location)

    var url = `http://api.weatherapi.com/v1/forecast.json?key=6c5515a185a943bc88c92724220404&q=${location}&days=5&aqi=no&alerts=no`;

    const{data, loading, error} = useFetch(url);

    

    console.log(loading);
    console.log(error);
    console.log(data);

    //Denna metod sätter state location av sök värdet.
    const Searching = (searchparam) => {
     
        
        setLocation(null);
        setLocation(searchparam);

    };

  


    return(
        <div className="app">
            
        <Search callback={Searching}/>
        {loading && <h1>Laddar..</h1> } 
        {error && <p className="error">Hittades ingen sökning</p>} 
       
        {data && <WeatherCard items={data} />}
        </div>
    )
    



}

export default Home;