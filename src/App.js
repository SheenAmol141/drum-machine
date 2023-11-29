import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activ, setActiv] = useState('');
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      playa(event.key.toUpperCase());
    });
  })


  const arr = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];

function playa(select) {
    const audioele = document.getElementById(select);
    audioele.play();
    setActiv(select);
}


  return (
    <div className="App">
      <div id="drum-machine">
        <div id='display'><h1>{activ}</h1>
          <div className='drumprnt'>
          {arr.map((pad) => <div 
          onClick={() => playa(pad.text)}
          className='drum-pad' id={pad.src}><p>{pad.text}</p>
          <audio
          className='clip'
          id={pad.text}
          src={pad.src}
          ></audio>
          </div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
