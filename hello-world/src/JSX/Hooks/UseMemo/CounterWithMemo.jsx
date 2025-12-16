import React, { useState, useMemo } from 'react'

function CounterWithMemo() 
{
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const IncreaseCounter1 = () => 
    {
        setCounter1(counter1 + 1 );
    }

    const IncreaseCounter2 = () => 
    {
        setCounter2(counter2 + 1);
    }

    //useMemo → remembers a value
    const IsEven = useMemo(() => 
    {
        // let i = 0;
        // while (i < 2000000000) i++
        return counter1 % 2 === 0
    }, [counter1]);
    

    return (
        <div>
            <b>Counter With Memo</b> <br></br>
            <div>
                <button onClick={()=> IncreaseCounter1()}>Count 1 : {counter1}</button>
                <span>{IsEven ? "Event No" : "Odd No"}</span>
            </div>

            <div>
                <button onClick={()=> IncreaseCounter2()}>Count 2 : {counter2}</button>
            </div>
        </div>
    )
}

export default CounterWithMemo