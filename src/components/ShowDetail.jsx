import sunny from '../assets/sunny.png';
import clear from '../assets/clear.png';
import partiallyCloudy from '../assets/partiallyCloudy.png';
import littleRain from '../assets/littleRain.png';
export default function ShowDetail({weatherData}) {
    const conditions={
        'sunny': sunny,
        'Clear': clear,
        'Partially cloudy': partiallyCloudy,
        'Rain, Partially cloudy': littleRain
      }
       const temp= parseInt((weatherData.currentConditions.temp-32) * 5/9); // Convert Fahrenheit to Celsius
       const condition= weatherData.currentConditions.conditions;
  return (
    <div className="flex flex-col mt-5 text-white p-6 m-auto ">
      <img src={(temp>30 && condition!=='Partially cloudy')?conditions['sunny']:conditions[condition]} alt="Weather Condition" className="w-32 h-32 self-center mb-4" />
      <h1 className="text-2xl font-bold mb-4 self-center">{weatherData.resolvedAddress}</h1>
      <p className="text-lg">Current Temperature: {temp}°C</p>
      <p className="text-lg">Condition: {weatherData.currentConditions.conditions}</p>
      <p className="text-lg">Humidity: {weatherData.currentConditions.humidity}%</p>
      <p className="text-lg">Wind Speed: {weatherData.currentConditions.windspeed} mph</p>
    </div>
  )
}
