import { NavLink } from "react-router-dom";


const Navigation = () => {

    return(<>
    
    <nav>
        <ul>
             <li><NavLink to="/">Hem</NavLink></li>
             <li><NavLink to="/about">Om oss</NavLink></li>
       </ul>
    </nav> 

    </>);


};

export default Navigation;