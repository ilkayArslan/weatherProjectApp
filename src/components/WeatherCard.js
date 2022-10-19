import WeatherCardInput from "./WeatherCardInput"
import { gettheWeather } from "../redux/weatherSlicer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Today from "./Today"
function WeatherCard() {
    const dispatch = useDispatch()
    const choosenCountry = useSelector(state => state.weather.choosenCountry)
    const currentWeather = useSelector(state => state.weather.currentWeather)
    const dailyWeather = useSelector(state => state.weather.dailyWeather)
    const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log(currentWeather)
    useEffect(() => {

        dispatch(gettheWeather(choosenCountry))

    }, [dispatch, choosenCountry])

    return (
        <div className="card bg-info" style={{ width: "100%" }} >
            <div className='card-top border border-2 p-3 d-flex align-items-center' >
                <WeatherCardInput />
                <h2 className='ms-auto fw-bolder'>{new Date(currentWeather.dt * 1000).getFullYear()}/{new Date(currentWeather.dt * 1000).getMonth() + 1}/{new Date(currentWeather.dt * 1000).getDate()}</h2>
                <span className="ms-3 fw-bold fs-6">{new Date(currentWeather.dt * 1000).getHours()}:{new Date(currentWeather.dt * 1000).getMinutes()}</span>
            </div>
            <div className="card-body">
                <Today />
                <div className='row mt-4'>
                    {dailyWeather.map(day => {
                        return (
                            <div className="days col p-1 border border-2 " key={day.dt}>
                                <div className="">
                                    <h3 className="text-center mt-3 fw-bolder">{Days[new Date(day.dt * 1000).getDay()]}</h3>
                                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" className="m-auto" />
                                    <div className="row text-center ">
                                        <div className="col fw-bolder text-warning border-end border-3">
                                            {Math.round(day.temp.day)}
                                        </div>
                                        <div className="col fw-bolder text-dark ">
                                            {Math.round(day.temp.eve)}
                                        </div>
                                    </div>,
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default WeatherCard