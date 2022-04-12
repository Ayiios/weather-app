import { Route, Routes } from "react-router-dom";
import Home from '../views/Home';
import About from '../views/About';
import WeatherDetails from "../WeatherDetails";
import '../../styles/RouterStyles.css';



const Main = () => {


    return(<Routes>

       
       <Route exact path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/weather/:location" element={<WeatherDetails/>}/>
 

    </Routes>)



};

export default Main;