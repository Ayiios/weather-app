import { useEffect, useState } from "react";

//Denna hook har jag gjort för att kunna använda sökningar mot apiet i hela applikationen och inte behöva upprepa det.
const useFetch = (url) => {
    const[data, setData] = useState("");
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    

    useEffect(() => {
       const abortCont = new AbortController();

       
        fetch(url, {signal:abortCont.signal})
        .then(response => {
            if(!response.ok){
                throw Error('Fel när datan laddades. Försök igen!')
            }

            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch(err => {
            if(err.name === 'AbortError')
            {
                console.log('Stoppar request')
            }
            else{
                setLoading(false);
                setError(err.message);
            }
           
        })

       return () => abortCont.abort();
    }, [url]);

    console.log(data)

    return {data,loading, error}

    


}


export default useFetch;



