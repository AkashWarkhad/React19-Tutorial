import { useReducer } from "react"

const initialCount = 0;
const init = (initialValue) => 
{
    console.log("Init function call - this run only once.")

    let savedCount = localStorage.getItem("Count");
    if(savedCount !== null)
    {
        console.log("Found Saved Count: ", savedCount);
        return parseInt(savedCount);
    }

    console.log("No saved Count found, initial Value: ", initialValue);
    return initialValue;
}

const countReducer = (currState, action) => 
{
    switch(action)
    {
        case "increment":
            return currState + 1;
        case "decrement":
            return currState - 1;
        case "reset":
            return initialCount;
        default:
            return currState;
    }
}

export const LazyInitializationUsingReducer = () =>
{
    //     state  FnForAction     FnDecideHowToUpdate  StartingValue
    const [ count, dispatch ] = useReducer( countReducer, initialCount, init );

    return (
        <div>
            <p>Counter Using UseReducer</p>
            <p>Count: {count}</p>
            <button onClick={()=> {dispatch("increment")}}>Increment</button>
            <button onClick={()=> {dispatch("decrement")}}>Decrement</button>
            <button onClick={()=> {dispatch("reset")}}>Reset</button>
        </div>
    );
}