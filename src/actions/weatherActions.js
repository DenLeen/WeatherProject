export const FETCH_WEATHER_BEGIN = "FETCH_WEATHER_BEGIN";
export const fetchWeatherBegin = () => ({
    type: FETCH_WEATHER_BEGIN
});

export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const fetchWeatherSuccess = weather => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: { weather }
});

export const FETCH_FORECAST_SUCCESS = "FETCH_FORECAST_SUCCESS";
export const fetchForecastSuccess = forecast => ({
    type: FETCH_FORECAST_SUCCESS,
    payload: { forecast }
});

export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";
export const fetchWeatherFailure = error => ({
    type: FETCH_WEATHER_FAIL,
    payload: { error }

});
const key = '9e36101a117d95e4ec5e914bd3541e99';
const urls = [`http://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`,
                  `http://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric`];

export const fetchAllData = cityName => {

    return async dispatch => {

        dispatch(fetchWeatherBegin());
        try {
             let data = await Promise.all(
                urls.map(url =>
                    fetch(`${url}&q=${cityName}`).then((response) => response.json())
                ));

             if(data[0].cod === "404" , data[1].cod === "404") {
                 throw Error(404);
             }

            dispatch(fetchWeatherSuccess(data));
            return data;
        } catch (error) {
            dispatch(fetchWeatherFailure(error));
        }


    }
};