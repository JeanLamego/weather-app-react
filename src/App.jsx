import { useState } from 'react'


function App() {

  // const key = https://api.openweathermap.org/data/2.5/weather?q=japan&units=metric&appid=de44d6a961bec9dd4dce6385403fe381&lang=pt_br;

  // https://source.unsplash.com/414x896/?riodejaneiro

  return (
    <div className="App">
      <header>
        <div className="location">Rio de Janeiro</div>
        <div className="clock">18:11</div>
      </header>
      <div className="mid-container">
        <input type="text" 
        placeholder='Escolha o local'
        />
      </div>
      <bottom>
        <div className="weather-conditions">Clear</div>
        <div className="feelslike">50c</div>
        <div className="humidity">50%</div>
        <div className="temperature">34C</div>
      </bottom>
    </div>
  )
}

export default App
