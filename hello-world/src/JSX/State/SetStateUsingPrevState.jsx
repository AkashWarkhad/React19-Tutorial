// Here we can understand the flow of the react & how its working
import { useState } from "react";

export const SetStateUsingPrevState = () => 
{
  // [CurrValue, SetterFunc] = // useState(function)  
  const [count, setCount] = useState(()=>
  {
    console.log("1 >>[SetWithPrevState] Initial state function called!");
    return 0;
  });

  console.log("2 >> 9 >> 15 >>[SetWithPrevState] Render Phase component rendering with count: ", count);

  const HandleSetCountUsingPrev = () => 
  {
    console.log("3 >> 10 >> [SetWithPrevState] Started HandleSetCountUsingPrev with count: ", count);

    setCount((prev) =>
    {
        console.log("4 >> 6 >> 12 >>[SetWithPrevState] First updater fn: prev + 1 count: ", prev);
        return prev + 1;
    });  
    
    setCount((prev)=>{
        console.log("7 >> 13 >>[SetWithPrevState] Second updater fn: Prev + 4 count: ", prev);
        return prev + 4;
    })

    setCount((prev)=> {
        console.log("8 >> 14 >>[SetWithPrevState] Third updater fn: Prev + 10 count: ", prev);
        return prev + 10;
    })

    console.log("5 >> 11 >>[SetWithPrevState] HandleSetCountUsingPrev is completed with count: ", count);
  };

  return (<button onClick={HandleSetCountUsingPrev}>Set count with prev count:{count}</button>);
};
