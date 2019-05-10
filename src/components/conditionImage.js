import React from "react";
import cloudy from "../assets/icons/cloudy.png";
import fog from "../assets/icons/fog.png";
import moon_cloudy from "../assets/icons/moon_cloudy.png";
import moon_partly_cloudy from "../assets/icons/moon_partly_cloudy.png";
import n_a from "../assets/icons/n_a.png";
import night from "../assets/icons/night.png";
import partly_cloudy from "../assets/icons/partly_cloudy.png";
import rain from "../assets/icons/rain.png";
import rain_s_cloudy from "../assets/icons/rain_s_cloudy.png";
import snow from "../assets/icons/snow.png";
import sunny from "../assets/icons/sunny.png";
import sunny_s_cloudy from "../assets/icons/sunny_s_cloudy.png";
import thunderstorms from "../assets/icons/thunderstorms.png";

const ConditonImage = (icon)=>{
    switch (icon) {
        case "01d": {
            return <img className="imgCurrent" src={sunny} />;
        }
        case "01n": {
            return <img className="imgCurrent" src={night} />;
        }
        case "02d": {
            return <img className="imgCurrent" src={sunny_s_cloudy} />;
        }
        case "02n": {
            return <img className="imgCurrent" src={moon_cloudy} />;
        }
        case "03d": {
            return <img className="imgCurrent" src={partly_cloudy} />;
        }
        case "03n": {
            return <img className="imgCurrent" src={moon_partly_cloudy} />;
        }
        case "04d":
        case "04n": {
            return <img className="imgCurrent" src={cloudy} />;
        }
        case "09d":
        case "09n": {
            return <img className="imgCurrent" src={rain} />;
        }
        case "10d":
        case "10n": {
            return <img className="imgCurrent" src={rain_s_cloudy} />;
        }
        case "11d":
        case "11n": {
            return <img className="imgCurrent" src={thunderstorms} />;
        }
        case "13d":
        case "13n": {
            return <img className="imgCurrent" src={snow} />;
        }
        case "50d":
        case "50n": {
            return <img className="imgCurrent" src={fog} />;
        }
        default: {
            return <img className="imgCurrent" src={n_a} />;
        }
    }
}
export default ConditonImage;