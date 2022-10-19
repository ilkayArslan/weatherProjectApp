import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./redux/weatherSlicer"
export const store = configureStore({
    reducer: {
        weather: weatherSlice
    }
})