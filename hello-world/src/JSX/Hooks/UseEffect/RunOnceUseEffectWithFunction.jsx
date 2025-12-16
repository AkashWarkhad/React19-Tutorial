// componentDidMount which rund once in the component <--> Using UseEffect [] 

import React, {useState, useEffect} from 'react'

function RunOnceUseEffectWithFunction() 
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (evt) => 
    {
        //console.log("Mouse Event"); // Commenting for now
        setX(evt.clientX)
        setY(evt.clientY)
    }

    useEffect(() => 
    {
        console.log("UseEffect Called !!");
        window.addEventListener("mousemove", logMousePosition)

        // What ever useEffect will return will be the component willUnmount
        return () =>{
          console.log("Component Unmounted!!");
          window.removeEventListener("mousemove", logMousePosition);
        }
    }, []); // Pass Empty array to avoid to call useEffect again again .

  return (
    <div>
        X - {x} Y - {y}
    </div>
  )
}

export default RunOnceUseEffectWithFunction