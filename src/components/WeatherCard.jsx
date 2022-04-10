

const WeatherCard = ({items}) => {

    // return(<>
    // {items.map((item) => (
      
    //   <div className="blog-card">
    //   <h2>{item.location.name}</h2>
    //   <p>{item.current.temp_c}</p>
    //   <p>{item.forecast.forecastday[0].date}</p>
    //   <img src={item.current.condition.icon} alt="symbol" />


    //   </div>



    // ))}</>)


    return(<>
    <h1>{items.location.name}</h1>
    <p>{items.current.temp_c}</p>
     <p>{items.forecast.forecastday[0].date}</p>
      <img src={items.current.condition.icon} alt="symbol" />
    
    
    </>); 



}

export default WeatherCard;