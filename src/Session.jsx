import React from "react";
import moment from "moment";

function Session({ses, increSes, decreSes}) {
    
    const sesInMinutes = moment.duration(ses, "s").minutes();
    
    return(
        <div id="session">
          <p id="session-label">Session</p>
          <p id="session-length">{sesInMinutes}</p>
          <button id="session-decrement" onClick={decreSes}><i className="fa-solid fa-minus"></i></button>
          <button id="session-increment" onClick={increSes}><i className="fa-solid fa-plus"></i></button>
        </div>
    );
};

export default Session;