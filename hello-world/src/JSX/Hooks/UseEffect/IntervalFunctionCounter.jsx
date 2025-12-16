import React, {useState, useEffect} from 'react'

function IntervalFunctionCounter() 
{
  const [count, setCount] = useState(0);

  // First Approach
  // const tick = () => 
  // {
  //   setCount(count + 1);
  // }

  // useEffect(()=> {
  //     let interval = setInterval(tick, 1000);

  //     return ()=>{
  //       clearInterval(interval);
  //     }
  // })


  // Second Approach :

  // const tick = () => 
  // {
  //   setCount(count + 1);
  // }

  // useEffect(()=> {
  //     let interval = setInterval(tick, 1000);

  //     return ()=>{
  //       clearInterval(interval);
  //     }
  // },[count])

  // Recommeded Approach : 
  //[] dependency array, Effect runs only once (like componentDidMount),
  // One interval createdAlways uses latest state, No stale closure issue

  const tick = () => 
  {
    setCount(prevCount => prevCount + 1);
  }

 

  useEffect(()=> 
  {
    // Define & call function inside the useEffect
    const doSomething = (data) => 
    {
      console.log(`Prints ${data}`);
    }

    doSomething("Hi");

    let interval = setInterval(tick, 1000);

    return ()=>{
      clearInterval(interval);
    }
  },[])


  return (
    <div>IntervalFunctionCounter
      <p>{count}</p>
    </div>
  )
}

export default IntervalFunctionCounter