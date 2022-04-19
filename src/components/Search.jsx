import {useRef} from "react";

//Sökbar så användaren kan söka på en stad.
const Search = ({callback}) => {

const searchValue = useRef();
return(<div className="search">
      
      <input className="search-bar" type="text" placeholder='Sök...' ref={searchValue} onKeyUp={(key) => {if (key.code ==="Enter") {callback(searchValue.current.value)}}} />   
      

      </div>);




};

export default Search;