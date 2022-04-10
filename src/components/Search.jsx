import {useRef} from "react";


const Search = ({callback}) => {

const searchValue = useRef();
return(<>
      <input type="text" ref={searchValue}/>
      <button onClick= { () => callback(searchValue.current.value)}>Sök</button>

      </>);




};

export default Search;