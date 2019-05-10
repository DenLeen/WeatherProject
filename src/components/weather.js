import React from "react";
import CurrentWeather from "./currentWeather"
import WeekWeather from "./weekWeather";

const Weather  = ({current, forecast}) => {
        const {list} = forecast;
    return (
        <div className="weather">
            <CurrentWeather city={current}/>
            <WeekWeather forecastList={list}/>
        </div>
    )
};

export default Weather;