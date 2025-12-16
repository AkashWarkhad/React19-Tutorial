import React, {useState, useEffect} from 'react'

function UseEffectOnceWithFunction() 
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (evt) => 
    {
        console.log("Mouse Event");
        setX(evt.clientX)
        setY(evt.clientY)
    }

    useEffect(() => 
    {
        console.log("UseEffect Called !!");
        window.addEventListener("mousemove", logMousePosition)
    }, []); // Pass Empty arreay to avoid to call useEffect again again .

  return (
    <div>
        X - {x} Y - {y}
    </div>
  )
}

export default UseEffectOnceWithFunction