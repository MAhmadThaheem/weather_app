import { useOutletContext } from 'react-router-dom';
import WeatherDetail from './WeatherDetail'
export default function Home() {
  const { weatherData, error, hasSearched, location, savedLocations,setSavedLocations } = useOutletContext();
  return (
    <>
        { !hasSearched ? '' : error ? (
        <div className="text-red-500 text-xl flex justify-center mt-3 font-bold">
          <p>Location Not Found</p>
        </div>
      ) : weatherData ? (
        <WeatherDetail weatherData={weatherData} location={location}  savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
      ) : (
        <p className="text-gray-500 text-xl flex justify-center mt-3">Loading...</p>
      )}
    </>
  );
}
