import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllData } from "../actions/weatherActions";
import LocBarReport from "./locBarReport";
import spinner from "../assets/spin.gif";
import { bindActionCreators } from "redux";
import Weather from "./weather";

const keydown = 13;

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    handleChange = cityValue => {
        this.setState({ value: cityValue.target.value });
    };

    handleKeyDown = e => {
        if (e.keyCode === keydown) {
            this.onChange()
        }
    };

    onChange = () => {
        const { value } = this.state;
        this.changeHandler(value)
    };

    changeHandler = (value) => {
        if (value) {
            this.props.FetchAllData(value);
        } else {
            return false
        }
    };

    componentDidMount = () => {
        this.props.FetchAllData('Minsk')
    };

    render() {
        const {isFetching, apiCityData, apiForecastData, error} = this.props;

        return (
            error ?
                <div className="wrapperIncorrect" >
                    <div>
                        <div className="searchIncorrect">
                            <div className="titleIncorrect">You entered an incorrect city name, try again</div>
                            <input className="city"
                                   placeholder="Search by city"
                                   onChange={this.handleChange}
                                   onKeyDown={this.handleKeyDown}
                            />
                        </div>
                    </div>
                </div>
             : isFetching || (!apiCityData || !apiForecastData) ? <div className="imageSpinner">
                <img  src={spinner} alt="" />
            </div> :
                <div>
                    <div className="search">
                        <div className="title">Enter the name of the city</div>
                        <input className="city"
                               placeholder="Search by city"
                               onChange={this.handleChange}
                               onKeyDown={this.handleKeyDown}
                        />
                    </div>
                    <LocBarReport current={apiCityData} forecast={apiForecastData}/>
                    <Weather current={apiCityData} forecast={apiForecastData} />
                </div>
            );
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {FetchAllData: fetchAllData }, dispatch)
};

const mapStateToProps = state => ({
    apiCityData: state.FetchWeather.data[0],
    apiForecastData: state.FetchWeather.data[1],
    isFetching: state.FetchWeather.isFetching,
    error: state.FetchWeather.error,
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);