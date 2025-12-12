// Here we can understand the flow of the react & how its working
import { useState } from "react";

export const BatchUpdates = () => 
{
  //[CurrValue, SetterFunc] = // useState(function)  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(false);

  console.log("Render Phase component rendering");

  const HandleSetCountUsingPrev = () => 
  {
    setCount((prev) =>
    {
        return prev + 1;
    });  
    
    setCount((prev)=>{
        return prev + 4;
    })

    setCount((prev)=> {
        return prev + 10;
    })

    setName("Updated");
    setIsActive(true);
  };

  return (
    <>
        <h4>count: {count}</h4>
        <p>Name: {name}</p>
        <p>Active: {isActive ? "Yes" : "No"}</p>
        <button onClick={HandleSetCountUsingPrev}>Update all three:{count}</button>
    </>);
};
