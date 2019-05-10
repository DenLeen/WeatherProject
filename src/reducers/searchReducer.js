import {FETCH_WEATHER_BEGIN, FETCH_WEATHER_SUCCESS,FETCH_FORECAST_SUCCESS, FETCH_WEATHER_FAIL} from '../actions/weatherActions';

const initialState = {
    data: {},
    isFetching: false,
    error: null
};

const fetchWeather  = (state = initialState, {type, payload}) => {
    switch(type){
        case FETCH_WEATHER_BEGIN:
            return {
                ...state,
                isFetching:true,
                error: null
            };
        case FETCH_WEATHER_SUCCESS:
            return{
                ...state,
                isFetching:false,
                data: payload.weather,
            };
        case FETCH_FORECAST_SUCCESS:
            return{
                ...state,
                isFetching:false,
                data: payload.forecast,
            };

        case FETCH_WEATHER_FAIL:
            return{
                ...state,
                isFetching: false,
                error: payload.error,
                data: {}
            };
        default:
            return state;
    }
}

export default fetchWeather;
console.log (fetchWeather);