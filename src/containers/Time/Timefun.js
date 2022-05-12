import React, { useEffect, useState } from 'react';
import Time from './Time';

function Timefun(props) {
    const [time,setTime] = useState(new Date())

    const tick = ()=> {
        setTime(new Date())
    }
    useEffect(
        () => {
            const TimeId = setInterval(()=> tick(),1000);

            return () =>{
                clearInterval(TimeId);
            }
      }, 
      [time] )

    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default Timefun;