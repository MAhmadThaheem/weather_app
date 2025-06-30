import Header from "./components/header";
import "./App.css";
import "./index.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [savedLocations, setSavedLocations] = useState(localStorage.getItem("savedLocations") ? JSON.parse(localStorage.getItem("savedLocations")) : []);
  return (
    <>
      <Header
        location={location}
        setLocation={setLocation}
        setWeatherData={setWeatherData}
        setError={setError}
        setHasSearched={setHasSearched}
      />
      <Outlet 
        context={{
          weatherData,
          setWeatherData,
          location,
          setLocation,
          error,
          setError,
          hasSearched,
          setHasSearched,
          savedLocations,
          setSavedLocations
        }}
      />
    </>
  );
};
export default App;
