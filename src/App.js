import React, { useState , useEffect, useRef } from "react";
import Break from "./Break";
import Session from "./Session";
import TimeLeft from "./TimeLeft";

function App() {

  const audioElement = useRef(null);
  const [breakLength, setBreakLength] = useState(300);
  const [ses, setSes] = useState(25 * 60);
  const [intervalId, setIntervalId] = useState(null);
  const [type, setType] =useState("Session");
  const [timeLeft, setTimeLeft] = useState(ses);
    
  useEffect(() => {
    setTimeLeft(ses);
  }, [ses]);

  useEffect(() => {
    if(timeLeft === 0) {
      audioElement.current.play();
      if(type === "Session") {
        setType("Break");
        setTimeLeft(breakLength);
      } else if(type === "Break") {
        setType("Session");
        setTimeLeft(ses);
      }
    }
  }, [breakLength, type, ses, timeLeft]);


  const increBreak = () => {
    const newBreakLength = breakLength + 60;
    if(newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  }

  const decreBreak = () => {
    const newBreakLength = breakLength - 60;
    if(newBreakLength > 0) {
      setBreakLength(newBreakLength);
    } 
  }

  const increSes = () => {
    const newSes = ses + 60;
    if(newSes <= 60 * 60) {
      setSes(newSes);
    }
  }

  const decreSes = () => {
      const newSes = ses - 60;
      if(newSes > 0) {
        setSes(newSes);
      }       
  }

  const isStarted = intervalId !== null;

    const startStop = () => {

        if(isStarted) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            const newIntervalId = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
            setIntervalId(newIntervalId);
        } 
    };

    const handleReset = () => {
      audioElement.current.load();
      clearInterval(intervalId);
      setIntervalId(null);
      setType("Session");
      setSes(25 * 60);
      setBreakLength(5 * 60);
      setTimeLeft(25 * 60);
    }

  
  return (
    <div className="container">
    <h1>25 + 5 CLOCK</h1>
    <div className="areas">
    <TimeLeft 
        ses={ses}
        breakLength={breakLength}
        timerLabel={type}
        startStop={startStop}
        startStopButton={isStarted ? <i className="fa-solid fa-pause"></i> : <i className="fa-solid fa-play"></i>}
        timeLeft={timeLeft}
      />
      <div>
      <button id="reset" onClick={handleReset}><i class="fa-solid fa-rotate"></i></button>
      </div>
      <Break 
        breakLength={breakLength}
        increBreak={increBreak}
        decreBreak={decreBreak}
      />
      <Session 
        ses={ses}
        increSes={increSes}
        decreSes={decreSes}
      /> 
      <audio id="beep" ref={audioElement}> 
        <source src="notice.mp3" type="audio/mpeg" />
      </audio>
    </div>
      
    </div>
  );
}

export default App;
