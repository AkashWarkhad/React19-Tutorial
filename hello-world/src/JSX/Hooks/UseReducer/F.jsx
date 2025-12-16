import React, {useContext} from 'react'
import {CountContext} from './UseReducerWithUseContext'

function F() {
  const countContext = useContext(CountContext);
    
    return (
      <div>
        <span>Count From F: {countContext.count}</span>
        <button onClick={()=> {countContext.dispatch("increment")}}>Increment from F</button>
        <button onClick={()=> {countContext.dispatch("decrement")}}>Decrement from F</button>
        <button onClick={()=> {countContext.dispatch("reset")}}>Reset from F</button>
      </div>
    )
}

export default F