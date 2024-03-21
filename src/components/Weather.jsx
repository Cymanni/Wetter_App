import { Context } from "../CityContext"

const Weather = () => {

    const {weatherData} = Context();

    console.log(weatherData);
  return (
    <div className="p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
{weatherData.list?weatherData.list.map((item,index) => (
        <div key={index} className="bg-sky-500 p-4 rounded-lg">
            <img className="h-24 w-28" src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="weather icon"/>
          <h1 className="text-2xl font-bold">{new Date(item.dt*1000).toLocaleDateString('de-Ge',{weekday:'long'})}</h1>
          <h3 className="text-xl">Temperate: {item.main.temp}°C</h3>
          <p>{item.dt_txt}</p>
          <p>{item.weather[0].description}</p>
          <p>{item.main.humidity}%</p>
        </div>
)):''}
      </div>
    </div>
  )
}

export default Weather
