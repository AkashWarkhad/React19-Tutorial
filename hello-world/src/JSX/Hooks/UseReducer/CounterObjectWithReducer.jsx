import React, {useReducer} from 'react'

const initialState = 
{
    counter1: 0,
    counter2: 5
}

const reducer = (currState, action) => 
{
    switch(action.type)
    {
        case "Increase":
            return {
                ...currState,
                counter1: currState.counter1 + action.counter1UpdatedBy
            }

        case "Decrease":
            return {
                ...currState,
                counter1: currState.counter1 - action.counter1UpdatedBy
            }

        case "IncreaseBy5":
            return {
                ...currState,
                counter1: currState.counter1 + action.counter2UpdatedBy
            }

        case "DecreaseBy5":
            return {
                ...currState,
                counter1: currState.counter1 - action.counter2UpdatedBy
            }

        case "Reset":
            return initialState
    }
}

function CounterObjectWithReducer() 
{
  
    const [countState, dispatch] = useReducer(reducer, initialState);
  
    return (
    <div>
        <p>Counter using object Reducer</p>
        <b>Counter :{countState.counter1}</b> <br></br>
        <button onClick={()=> dispatch({
            type: "Increase",
            counter1UpdatedBy: 1,
            counter2UpdatedBy: 5
        })}>Increase</button>

        <button onClick={()=> dispatch({
            type: "Decrease",
            counter1UpdatedBy: 1,
            counter2UpdatedBy: 5
        })}>Decrease</button>

        <button onClick={()=> dispatch({
            type: "Reset"
        })}>Reset</button>

        <button onClick={()=> dispatch({
            type: "IncreaseBy5",
            counter1UpdatedBy: 1,
            counter2UpdatedBy: 5
        })}>Increase by 5</button>

        <button onClick={()=> dispatch({
            type: "DecreaseBy5",
            counter1UpdatedBy: 1,
            counter2UpdatedBy: 5
        })}>Decrease by 5</button>

    </div>
  )
}

export default CounterObjectWithReducer