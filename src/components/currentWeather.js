import React, { Component } from "react";
import thermometer from "../assets/thermometer.jpg";
import sun from "../assets/Sun.jpg";
import ConditionImage from "./conditionImage";

class CurrentWeather extends Component {

    render() {
        const { city } = this.props;
        const {main, wind, weather,} = city;

        return (
            <div className="current">
                <div className="wrapperCurrent">
                    <div className="imageThermometer">
                        <img className="image thermometer" src={thermometer} alt="" />
                    </div>
                    <div className="current_item">
                        <div className="wrapperCurrentItem">
                            <div className="condition_items">
                                <p className="temp_text">Condition now: </p>
                                <div className="tempParam">
                                    <div className="tempParam_item"><strong className="discription_item">Pressure:</strong> {main.pressure}</div>
                                    <div className="tempParam_item"><strong className="discription_item">Humidity:</strong> {main.humidity}</div>
                                    <div className="tempParam_item"><strong className="discription_item">Wind:</strong>     {wind.speed}m/s</div>
                                </div>
                            </div>
                            <div className="wrapperTemp">
                                <div className="conditon_info">
                                    <div className="temp_data">
                                        {`${Math.round(main.temp)}°C`}
                                    </div>
                                    <div className="condition">
                                        {weather.map((item, i) => (
                                            <div key={i} >{ConditionImage(item.icon)}</div>
                                        ))}
                                    </div>
                                    <div className="description">
                                        {weather.map((item, j) => (
                                            <div key={j} >{item.description}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="imageSun">
                            <img className="image sun" src={sun} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CurrentWeather;