import { Context } from "../CityContext";

const Form = () => {

const {city, setCity, fetchWeatherData} = Context();

const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  }


  return (
    <div className=" flex justify-center w-full mb-5 p-5">
      <form onSubmit={handleSubmit} className="flex">
        <input
        onChange={(e)=> setCity(e.target.value)}
        value={city}

          type="text"
          placeholder="City"
          className="rounded-l-md px-4 py-2 outline-none bg-sky-100 w-96"
        />
        <button
          type="submit"
          className="bg-sky-700 text-white rounded px-4 py-2 ml-1 hover:bg-sky-900"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
