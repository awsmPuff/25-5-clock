import React from "react";
import moment from "moment";

function Break({breakLength, increBreak, decreBreak}) {

    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();

    return(
        <div id="break">
          <p id="break-label">Break</p>
          <p id="break-length">{breakLengthInMinutes}</p>
          <button id="break-decrement" onClick={decreBreak}><i className="fa-solid fa-minus"></i></button>
          <button id="break-increment" onClick={increBreak}><i className="fa-solid fa-plus"></i></button>
        </div>
    )
}


export default Break;