import { useSelector } from "react-redux"

function Today() {
    const currentWeather = useSelector(state => state.weather.currentWeather)
    const currentWeathericon = useSelector(state => state.weather.currentWeathericon)
    const currentWeatherdescription = useSelector(state => state.weather.currentWeatherdescription)
    const currentsunrise = useSelector(state => state.weather.currentsunrise)
    const currentsunset = useSelector(state => state.weather.currentsunset)
    return (
        <div className="d-flex justify-content-between">
            <div className="d-flex bg-light ">
                <div className="border border-5 p-2 bg-danger fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="m-auto bi bi-sunrise text-warning" viewBox="0 0 16 16">
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    {new Date(currentsunrise * 1000).getHours()}
                    :
                    {new Date(currentsunrise * 1000).getMinutes()}
                </div>
                <div className="border border-5 border-start-0 p-2 bg-dark text-light fw-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="m-auto bi bi-sunset-fill text-warning" viewBox="0 0 16 16">
                        <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    {new Date(currentsunset * 1000).getHours()}:{new Date(currentsunset * 1000).getMinutes()}
                </div>
            </div>
            <div className=" d-flex position-relative">
                <div>
                    <img className="" src={`https://openweathermap.org/img/wn/${currentWeathericon}@2x.png`} alt="" />
                    <div className="fw-bold text-light desc">{currentWeatherdescription}</div>
                </div>
                <div className="fs-2 fw-bolder text-danger temp ">
                    {Math.round(currentWeather.temp)}
                </div>

            </div>

        </div>
    )
}

export default Today