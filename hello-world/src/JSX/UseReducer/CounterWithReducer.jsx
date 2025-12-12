import { useReducer } from "react";

const initialCount = 0;
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

export const CounterWithReducer = () =>
{
    //     state  FnForAction     FnDecideHowToUpdate  StartingValue
    const [ count, dispatch ] = useReducer( countReducer, initialCount );

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> {dispatch("increment")}}>Increment</button>
            <button onClick={()=> {dispatch("decrement")}}>Decrement</button>
            <button onClick={()=> {dispatch("reset")}}>Reset</button>
        </div>
    );
}