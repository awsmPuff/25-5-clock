import React from "react";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";


function TimeLeft({timerLabel, startStop, startStopButton, timeLeft}) {

    const formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});
   
    return(
        <div>
            <p id="timer-label">{timerLabel}</p>
            <p id="time-left">{formattedTimeLeft}</p>
            <button id="start_stop" onClick={startStop}>{startStopButton}</button>
        </div>
    )
} 

export default TimeLeft;