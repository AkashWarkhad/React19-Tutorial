/* useState : Is an lazy Initialization
 Useful when you have any expensive computation you needs to do to calculate the initial state
 Used When : 
    > Reading from local storage
    > Fetching data from API
    > Doing any other heavy computation
*/

import { useState } from "react";

export const IncreaseCounterUsingLazyInitializationWithUseState = () => 
{
  // [CurrValue, SetterFunc] = // useState(function)  
  const [count, setCount] = useState(()=>
  {
    console.log("Initial state function called!");
    return 0;
  })

  console.log("Counter component rendered with Count: ", count);

  const HandleCount = () => 
  {
    console.log("Count before setter: ", count);
    setCount(count + 1);  // Here count++ not allowed. as set is doing this, we just need to pass next value to save in count
    console.log("Count after setter: ",count);
    setCount(count + 5);
    console.log("Count after setter: ",count);

  };

  return (<button onClick={HandleCount}>Count:{count}</button>);
};
