import { useState } from 'react'
import axios from 'axios'

import './App.css'


function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=japan&units=metric&appid=de44d6a961bec9dd4dce6385403fe381&lang=pt_br`

  // https://source.unsplash.com/414x896/?riodejaneiro

  return (
    <div className="App">
      <div className='header'>
        <h2 className="location">Rio de Janeiro</h2>
        <p className="clock">18:11</p>
      </div>
      <div className="mid-container">
        <input type="text" 
        placeholder='Escolha o local'
        />
      </div>
      <div className="bottom">
        <p className="weather-conditions">Clear</p>
        <div className="description">
          <p className="feelslike">50ºc</p>
          <p className="humidity">50%</p>
        </div>
          <h2 className="temperature">34ºC</h2>
      </div>
    </div>
  )
}

export default App
