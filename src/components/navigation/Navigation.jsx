import { NavLink } from "react-router-dom";
import '../../styles/RouterStyles.css';


const Navigation = () => {

    return(<>
    
    <nav className="nav-bar">
        <ul>
             <li><NavLink to="/">Hem</NavLink></li>
             <li><NavLink to="/about">Om oss</NavLink></li>
       </ul>
    </nav> 

    </>);


};

export default Navigation;