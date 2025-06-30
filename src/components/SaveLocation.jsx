import { useState } from "react";
import { useOutletContext } from "react-router-dom"
import ShowDetail from "./ShowDetail";

export default function SaveLocation() {
  const {savedLocations, setSavedLocations, weatherData,setWeatherData} = useOutletContext()
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <>
      {savedLocations.length?(
      <div className="flex justify-between p-2 m-4 flex-wrap">
        {savedLocations.map((loc, index) => (
          <div className="flex flex-col w-full flex-wrap" key={index}>
          <div
            className=" flex justify-between items-center p-2 rounded-lg shadow-lg m-2 mb-0 bg-blue-500  hover:scale-[1.01] hoever:bg-blue-600 transition-transform duration-300 cursor-pointer hover:shadow-xl"
            onClick={ async () => {
              selectedLocation === loc ? setSelectedLocation(null) : setSelectedLocation(loc);              
              await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=us&key=PGMB6U5ZARJ39AYZYLV4C2T5Q&contentType=json`)
                .then(async (response) => await response.json())
                .then((data) => {
                  setWeatherData(data);
                  
                }); 
            }}>
              <div className="text-2xl text-white ml-4 font-bold">{loc.toUpperCase()}</div>
            <button
              className="bg-red-500 text-lg text-white rounded-lg px-2 py-1 hover:bg-red-700 transition-colors duration-600"
              onClick={(e) => {
                e.stopPropagation();
                setSavedLocations((prev) => prev.filter((location) => location !== loc));
                localStorage.setItem('savedLocations', JSON.stringify(savedLocations.filter((location) => location !== loc)));
              }}
            >
              Remove
            </button>
          </div>
            <div className="bg-blue-400 mx-2 relative bottom-1 -z-10 transition-all duration-300">
            {selectedLocation === loc && <ShowDetail weatherData={weatherData} />}
            </div>
          </div>

        ))}
      </div>
      ) : (
        <p className="text-gray-500 text-xl flex justify-center mt-3">No saved locations</p>
      )}
    </>
  )
}
