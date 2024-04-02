import React, { useState ,useEffect} from 'react'

function Counter() {
    const [time, setTime] = useState(180);
    useEffect(() => {
        const timer = setInterval(() => {
          setTime(prevTime => prevTime - 1);
        }, 1000);
    
        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(timer);
      }, []);
    
      useEffect(() => {
        if (time === 0) {
          setTimeout(() => {
            setTime(180); // Reset timer to 3 minutes after reaching 0
          }, 3000); // 3 minutes rest
        }
      }, [time]);
    
      const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
      };
  return (
  <>
         <div>
      <h1>{formatTime(time)}</h1>
    </div>


  </>

  )
}

export default Counter