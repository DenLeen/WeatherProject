import React, { Component } from "react";
import DigitalWatch from "./digitalWatch";
import earth from "../assets/earth.gif";

class LocBar extends Component {

    render() {
        const { city } = this.props;
        const {name} = city;
        return (
            <div  className="location_items" >
                <div className="wrapperEarth">
                    <img className="earth" src={earth} alt="" />
                </div>
                <div className="cityName">
                    <p className="cityNameDescription">Weather conditions in the city of</p>
                    {name}
                </div>
                <DigitalWatch />
            </div>
        )
    }
}
export default LocBar;