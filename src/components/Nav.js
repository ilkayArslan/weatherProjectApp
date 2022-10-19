import { useSelector } from "react-redux"
import { Text } from "@chakra-ui/react"
function Nav() {
    const choosenCountry = useSelector(state => state.weather.choosenCountry)

    return (
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand" href="ss">
                    <img src="https://picsum.photos/200/300" alt="random" width="30" height="30" className="rounded" />
                </a>
                <Text color="green.600" fontWeight="extrabold" textDecoration="underline" cursor="pointer">{choosenCountry.name}</Text>
                <h1 className='m-auto fw-bold fs-3' >Weather App</h1>
            </div>
        </nav>
    )
}

export default Nav