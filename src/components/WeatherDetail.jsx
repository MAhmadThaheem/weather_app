import ShowDetail from "./ShowDetail";
export default function WeatherDetail({weatherData, location, savedLocations,setSavedLocations }) {
  return (
<>
  <div className="flex flex-col justify-center  mt-24 bg-blue-700 p-4 rounded-lg shadow-lg w-max m-auto">
    <ShowDetail weatherData={weatherData} />
    <button
      className="bg-white text-xl font-bold text-blue-700 px-4 py-2 rounded-lg hover:scale-105 transition-scale duration-300 mt-4 self-center"
      onClick={(e) => {
        (!savedLocations.includes(location)) ? (
        setSavedLocations((prev) => [...prev,location]),
        localStorage.setItem('savedLocations', JSON.stringify([...JSON.parse(localStorage.getItem('savedLocations') || '[]'), location]))
        ) : ''
       
      }}
      >{savedLocations.includes(location) ? 'Saved' : 'Save Location'}</button>
  </div>
</>
  )
}

