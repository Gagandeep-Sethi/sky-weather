import './App.css';
import Header from './components/Header';
import bg_Image from "./images/bg_Image.jpeg"

function App() {
  return (
    <div className='w-screen h-screen'>
      <div className="absolute inset-0 z-0   bg-cover bg-center h-screen"style={{ backgroundImage: `url(${bg_Image})`}}></div>
      <div className="absolute top-0 left-0 z-10 w-full">
      <Header />
      </div>
      
    </div>
  );
}

export default App;
