import React, { useState, useEffect } from 'react'

function ConditionalUseEffectUsingFunction() 
{
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=> 
    {
        console.log("useEffect - Updating document !!");
        document.title = `You clicked ${count} Times.`
    }, 
    [count]); // Here [Element which we want to apply the useEffect changes]

  return (
    <div>
        <p>UseEffect changes the Web title</p>

        <input type='text' value={name}
        onChange={(evt)=> setName(evt.target.value)}>
        </input>

        <p>JSON Content : {name}</p>

        <button onClick={()=> setCount(count + 1)}>Count : {count}</button>
    </div>
  )
}

export default ConditionalUseEffectUsingFunction