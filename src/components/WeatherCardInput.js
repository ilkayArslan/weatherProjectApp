import { Select } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { gettheChoosenCountry } from "../redux/weatherSlicer"
function WeatherCardInput() {
    const countries = useSelector(state => state.weather.countries);
    const dispatch = useDispatch();
    return (
        < Select onChange={(e) => dispatch(gettheChoosenCountry(e.target.value))
        } variant="flushed" textAlign="center" fontSize="13px" fontWeight="extrabold" borderBottom="5px solid grey !important" w="50%" >
            {
                countries.map(country => {
                    return (
                        <option value={country.id} key={country.id}>{country.name}</option>
                    )
                })
            }
        </Select >
    )
}

export default WeatherCardInput