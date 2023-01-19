import "./Weather.css"
import {useEffect, useState} from "react";
import {api} from "../../api";
export default function Weather({weather}){
  /* const [tunisiaWeather,setTunisiaWeather]=useState({})

    useEffect(()=>{
        fetch(`${api.urlBase}weather?q=Tunisia&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setTunisiaWeather(result);
    })},[])*/
    function dateBuilder(d){
        let days=["Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday", "Sunday"]
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"  ]
        let day=days[d.getDay()]
        let month=months[d.getMonth()]
        let date=d.getDate()
        let year=d.getFullYear()
        return `${day} ${date} ${month} ${year}`
    }
  /* return( weather ? (<><div className="location-box">
       <div className="location">Tunis,Tunisia</div>
       <div className="date">
           {dateBuilder(new Date())}
       </div>
       </div>
       {(typeof tunisiaWeather.main != "undefined") ? ( <><div className="weather-box">
       <div className="temp">   {tunisiaWeather.main.temp} C</div>
       <div className="weather">{tunisiaWeather.weather[0].description}</div>
   </div></>):( <> <div className="temp"> 15° C</div>
           <div className="weather">Cloudy</div></>)}</>): (<>
           <div className="location-box">
               <div className="location">{weather.name}</div>
    <div className="date">
        {dateBuilder(new Date())}
    </div>
           </div>
    <div className="weather-box">
        <div className="temp"> {weather.main.temp}  </div>
        <div className="weather">{tunisiaWeather.weather[0].description}</div>
    </div></>))*/
   return (typeof weather.main != "undefined") ? (
        <div>
            <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather">{weather.weather[0].description}</div>
            </div>
        </div>
    ) : ('')
}