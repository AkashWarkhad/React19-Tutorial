// Problem Statement : Implement this using reducer & context
//       ----------------------- AppComponent ---------------------
//       |                            |                           |
//    ## A ##                      ## B ##                     ## C ##
//                                    |                           |
//                                 ## D ##                     ## E ##
//                                                                |
//                                                             ## F ##                            

import React , {useReducer} from 'react'
import A from './A'
import B from './B'
import C from './C'

// Create Context
export const CountContext = React.createContext();

const initialCount = 0;
const reducer = (currState, action) => 
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

function UseReducerWithUseContext() 
{
    const [count, dispatch] = useReducer(reducer, initialCount);

    return (
        <CountContext.Provider value = {{ count: count, dispatch: dispatch }}>
            <div>
                Common Count: {count}
                <A />
                <B />
                <C />
            </div>
        </CountContext.Provider>
  )
}

export default UseReducerWithUseContext