import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { data } from "./data.js";
export const gettheWeather = createAsyncThunk("gettheweather", async (Selectcity) => {
    const res = fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Selectcity.latitude}&lon=${Selectcity.longitude}&exclude=minutely,hourly&units=metric&lang=tr&appid=ff1f28f9491f246a408b000902acf985`)
        .then(r => r.json())
    return res
})
const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        countries: data,
        choosenCountry: data[0],
        currentWeather: [],
        dailyWeather: [],
        currentWeathericon: "",
        currentWeatherdescription: "",
        isLoad: true,
        currentsunrise: "",
        currentsunset: ""
    },
    reducers: {
        gettheChoosenCountry: (state, action) => {
            state.choosenCountry = state.countries.filter(c => c.id == action.payload)[0]
        }
    },
    extraReducers: {
        [gettheWeather.fulfilled]: (state, action) => {
            state.currentWeather = action.payload.current;
            state.dailyWeather = action.payload.daily;
            state.currentWeathericon = action.payload.current.weather[0].icon;
            state.currentWeatherdescription = action.payload.current.weather[0].description;
            state.isLoad = true
            state.currentsunrise = action.payload.current.sunrise
            state.currentsunset = action.payload.current.sunset
        },
        [gettheWeather.pending]: (state, action) => {
            state.isLoad = false
        }

    }
})

export default weatherSlice.reducer
export const { gettheChoosenCountry } = weatherSlice.actions