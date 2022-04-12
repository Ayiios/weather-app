import {useRef} from "react";


const Search = ({callback}) => {

const searchValue = useRef();
return(<div className="search">
      {/* <input type="text" ref={searchValue}/> */}
      <input className="search-bar" type="text" placeholder='Sök...' ref={searchValue} onKeyUp={(key) => {if (key.code ==="Enter") {callback(searchValue.current.value)}}} />   
      {/* <button onClick= { () => callback(searchValue.current.value)}>Sök</button> */}

      </div>);




};

export default Search;