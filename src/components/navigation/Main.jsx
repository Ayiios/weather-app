import { Route, Routes } from "react-router-dom";
import Home from '../views/Home';
import About from '../views/About';



const Main = () => {


    return(<Routes>

       
       <Route exact path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>

    </Routes>)



};

export default Main;