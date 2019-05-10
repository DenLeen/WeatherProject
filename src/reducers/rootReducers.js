import {combineReducers} from 'redux';
import FetchWeather  from './searchReducer';

export default combineReducers({
    FetchWeather: FetchWeather,
});