import { useState } from 'react'
import axios from 'axios'

import './App.css'


function App() {


  const[data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [feelsLike, setFeelsLike] = useState("")
  
  const larguraTela = window.innerWidth;
  const alturaTela = window.innerHeight;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=de44d6a961bec9dd4dce6385403fe381&lang=pt_br`

  const [backgroundStyle, setBackgroundStyle] = useState({ backgroundImage: `url(https://source.unsplash.com/${larguraTela}x${alturaTela}/?${location})` });
  // const [backgroundStyle, setBackgroundStyle] = useState({ backgroundImage: `url(https://source.unsplash.com/414x896/?riodejaneiro)` });

    
    const searchLocation = (event) =>{
    if(event.key ==='Enter'){
    axios.get(url).then((response)=>{
      setData(response.data)
    
    })
    // setBackgroundStyle({ backgroundImage: `url(https://source.unsplash.com/${larguraTela}x${alturaTela}/?${location})` });
    // setLocation('')
    
  }
  }

  // https://source.unsplash.com/414x896/?riodejaneiro

  return (
    <div className="App" style={backgroundStyle}>
      <div className="container">
        <div className='header'>
          <h2 className="location">{data.name}</h2>
          <p className="clock">18:11</p>
        </div>
        <div className="mid-container">
          <input type="text"
          value={location} 
          onChange={event => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder='Escolha o local'
          />
        </div>
        <div className="bottom">
          {data.weather? <p className="weather-conditions"><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>{data.weather[0].description}</p> : null}
          
          <div className="description">
            <p className="feelslike">50ºc</p>
            <p className="humidity">50%</p>
          </div>
          <div className="temp-box">

            {data.main ? <h2 className="temperature">{data.main.temp.toFixed(0)}º</h2> : null}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
