import { useState } from 'react'

// Remeber use must be in small letters
function useCounterHook() 
{
    const [count, setCount] = useState(0);

    const IncreaseCount = () => 
    {
        setCount(prev => prev + 1);
    }

    const DecreaseCount = () => 
    {
        setCount(prev => prev - 1);
    }

    const Reset = () => 
    {
        setCount(0);
    }

    return [count, IncreaseCount, DecreaseCount, Reset]
}

export default useCounterHook