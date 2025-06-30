export default function Search({ location, setLocation, setWeatherData, setError, setHasSearched }) {
  return (
    <div className=" flex justify-center items-center bg-white border rounded-2xl px-2 py-1 w-[420px]">
      <i className="fas fa-search mr-1"></i>
      <input
        type="text"
        className="w-[100%] outline-none"
        placeholder="Enter location"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      />
      <button
        className="bg-blue-400 text-white px-4 text-center  rounded-2xl hover:bg-blue-600 transition-colors duration-300"
        onClick={() => {
          setError("");
          setWeatherData(null);
          if (location) {
            setHasSearched(true);
            fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=PGMB6U5ZARJ39AYZYLV4C2T5Q&contentType=json`)
              .then(response => response.json())
              .then(data => {
                setWeatherData(data);
              })
              .catch(error => setError(error));
          }
        }}
      >
        Search
      </button>
    </div>
  )
}
