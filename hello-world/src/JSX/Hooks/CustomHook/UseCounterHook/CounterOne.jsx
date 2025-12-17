import React from 'react'
import useCounterHook from "./UseCounterHook"

function CounterOne() 
{
    // Moved to useCounterHook
    // const [count, setCount] = useState(0);
    // const IncreaseCount = () => 
    // {
    //     setCount(prev => prev + 1);
    // }
    // const DecreaseCount = () => 
    // {
    //     setCount(prev => prev - 1);
    // }
    // const Reset = () => 
    // {
    //     setCount(0);
    // }

    let [count, IncreaseCount, DecreaseCount, Reset] = useCounterHook();

    return (
        <div>
            <p>useCounter custom hook with using useState</p>
            <h3>Count : {count}</h3>
            <button onClick={IncreaseCount}>Increase</button>
            <button onClick={DecreaseCount}>Decrease</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default CounterOne