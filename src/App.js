import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import Weather from "./components/Weather/Weather"
import  {api} from "./api.js"
import {useState} from "react";

export default function App() {
    const [query,setQuery]=useState("")
    const [weather,setWeather]=useState({})
 const fetchWeather=(e)=>{
        if(e.key==="Enter")
 {
        fetch(`${api.urlBase}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('')
            })}
    }

  return (
      <div className={(typeof weather.main != "undefined") ? weather.weather[0].main.includes("Clouds") ? 'app clouds' : weather.weather[0].main.includes("Clear") ?'app clear' :'app snow':'app'}>
    <main>
     <SearchBar
     query={query}
     setQuery={setQuery}
     fetchWeather={fetchWeather}/>
      <Weather weather={weather}/>
        </main>
    </div>
  );
   }

