import { useState,useEffect } from "react";

function UseCurrentTime(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () =>clearInterval(interval);
    },
        []
    );

    return time;
}


export default UseCurrentTime;