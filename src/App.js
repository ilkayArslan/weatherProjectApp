import Nav from "./components/Nav"
import WeatherCard from "./components/WeatherCard"
import Photo from "./components/Photo"
import Footer from "./components/Footer"
import './App.css';
function App() {
  return (
    <div className='container '>
      <Nav />
      <WeatherCard />
      <Photo />
      <Footer />
    </div>
  );
}

export default App;
