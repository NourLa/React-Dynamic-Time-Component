import React, { Component } from 'react';
import './Timer.css'

function timert(){   var date = new Date();
    date.setHours(0,30,0,0); // Set hours, minutes and seconds and milliseconds
     var h = date.getTime();
     var ms = 1800000;
    var  milli=h+ms;
    function addZ(n) {
        return (n<10? '0':'') + n;
    }
    var dt = new Date(milli);
    var hrs = dt.getHours();
    var mins = dt.getMinutes();
    var secs = dt.getSeconds();

    var tm = addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs) ;
    return tm;
}

 
class Timer extends Component {
    render() {
        return (

            <div className="timer_element">
            <h1>{timert() }</h1>  
            <div className="designation"> 
            <div className="Hour">hours</div>     
             <div className="Minute">minutes</div> 
             <div className="Second" > seconds</div>   
             </div>
             <div className="buttons">
             <button className="start">Start </button>
             <button className="reset">Reset </button>
              </div>
            </div>

    );
  }
}

export default Timer;