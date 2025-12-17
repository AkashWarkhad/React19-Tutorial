import React, {useEffect, useState, useRef} from 'react'

function FunctionTimer() 
{
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => 
    {
        
        intervalRef.current = setInterval(() => 
        {
            setTimer(prevTimer => prevTimer + 1);

        }, 1000);

        return () => 
        {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <div>
            <p>Function Timer : {timer}</p>
            
             {/* Here we used useRef to fetch the interval data outside to useEffect block  */}
             
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear hook timer</button>
        </div>

    )
}

export default FunctionTimer