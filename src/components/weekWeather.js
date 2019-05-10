import React, { Component } from "react";
import _ from "lodash";

class WeekWeather extends Component {

    forecastByDays = data => {
        return (data.reduce((forecastList, i) => {
            let date = i.dt_txt.substr(0, 10);
            forecastList[date] = forecastList[date] || [];
            forecastList[date].push(i);

            return forecastList;
        }, {}));
    };

    dayOfWeek = data => {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return daysOfWeek[new Date(data[0].dt * 1000).getUTCDay()];
    };

    forecastDescription = (data, description = [], count=0 ) => {
        data.map(i => {
            count++;
            if(count === 1){
                 description.push(i.weather[0].main);

            }

        });

        return (
            <div>
                <div>{`${description}`}</div>
                <div> </div>
            </div>
        )
    }


    forecastInfo = (data, min = [], max = []) => {
        data.map(i => {
            min.push(i.main.temp);
            max.push(i.main.temp);
        });

        const minMax = {
            min: _.floor(Math.min.apply(Math, min)),
            max: _.ceil(Math.max.apply(Math, max)),
        };

        return (
            <div >
                <div >
                    {`${minMax.min}°C`} / {`${minMax.max}°C`}
                </div>
            </div>
        );
    };

    render() {
        const {forecastList} = this.props;
        const forecastInfo = Object.values(this.forecastByDays(forecastList));
        const weekForecast = forecastInfo.length > 5
             ? forecastInfo.slice(0, 5) : forecastInfo;


        return (

            <div className="week">
                <p className="weekDescription">The weather in coming</p>
                <div className="wrapperWeek">
                {weekForecast.map((item, i) => (
                    <div key={i} className="week_item">
                        <div className="itemWeek dayOfWeek">{this.dayOfWeek(item)}</div>
                        <div className="itemWeek forecastInfo">{this.forecastInfo(item)}</div>
                        <div className="itemWeek forecastDescription">{this.forecastDescription(item)}</div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default WeekWeather;
