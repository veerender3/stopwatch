import {useState, useEffect,} from "react"
//  import styles from './Stopwatch.module.css'
const Stopwatch =()=>{
    const [timeIn, setTimeIn] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
useEffect(() => {
        let intervalId;
       
      if (isRunning){
             intervalId = setInterval(()=>{setTimeIn((prevstate) => prevstate + 1);
              
           }, 1000);
         } else{
            clearInterval(intervalId);
         }
         return () => clearInterval (intervalId)
        },[isRunning])
        const startStop=()=>{
            setIsRunning((prevIsRunning) => !prevIsRunning)
         };
         const ResetTime = () => {
            setTimeIn(0);
           setIsRunning(false);
         console.log( setTimeIn(0))
        }
     const formatTime = (timeIn)=>{
         const minutes = Math.floor(timeIn/60);
         const seconds = timeIn % 60;
          
         return `${minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
      }
    

return(
    <div>
       <h1>Stopwatch</h1>
       <span>Time</span>
       <span>: {formatTime(timeIn)}</span>
        <div>
            <button onClick={startStop}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={ResetTime} style={{margin:'10px'}}>Reset</button> 
        </div>
    </div>
   
 )
}

export default Stopwatch