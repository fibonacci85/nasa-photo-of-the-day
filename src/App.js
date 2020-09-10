import React, {useState, useEffect} from "react";
import axios from 'axios'
import MainBox from "./components/MainBox"
import "./App.css";


function App() {

  const [dailyPhoto, setDailyPhoto] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=nvBSFEMqCB1Lu54KE9CHhNrT0Ft0nsTkUdKTj1bm')
    .then(response => {
      const nasaAPI = response.data
      console.log(nasaAPI)
      setDailyPhoto(nasaAPI)
    })
    .catch(error => {
      console.log(error,"error")
    }); 
  },[]);

  return (
    <div className="App">

      <MainBox dailyPhoto = {dailyPhoto}  />

    </div>
  );
}

export default App;
