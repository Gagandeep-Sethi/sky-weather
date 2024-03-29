import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import bg_Image from "./images/bg_Image.jpeg"
import { CityProvider } from './utils/CityContext';
import { WeatherProvider } from './utils/WeatherContext';

function App() {
  return (
    <WeatherProvider>
    <CityProvider>
    <div className='w-screen h-screen'>
      <div className="absolute inset-0 z-0   bg-cover bg-center h-screen "style={{ backgroundImage: `url(${bg_Image})`}}></div>
      <div className="absolute top-0 left-0 z-10 w-full h-screen">
      <Header />
      <div className='h-[90%]'>
        <Body/>
      </div>
      
      </div>
      
    </div>
    </CityProvider>
    </WeatherProvider>
  );
}

export default App;
