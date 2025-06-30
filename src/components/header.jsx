import { NavLink } from "react-router-dom";
import Search from "./search";
export default function Header({
  location,
  setLocation,
  setWeatherData,
  error,
  setError,
  setHasSearched
}) {

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold text-blue-700 text-center font-lobster m-5">
          Weather App
        </h1>
        <div className="flex text-2xl bg-blue-700 p-1 items-center justify-between px-4">
          <Search
            location={location}
            setLocation={setLocation}
            setWeatherData={setWeatherData}
            error={error}
            setError={setError}
            setHasSearched={setHasSearched}
          />
          <div className="flex justify-between items-center gap-12">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-bold m-1"
                  : "text-white hover:underline hover:scale-105 m-1"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/savedlocations"
              className={({ isActive }) =>
                isActive
                  ? "text-white underline font-bold m-1"
                  : "text-white hover:underline hover:scale-105 m-1"
              }
            >
              Saved Locations
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
