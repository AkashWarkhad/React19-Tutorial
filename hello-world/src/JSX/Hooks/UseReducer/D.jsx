import React, {useContext} from 'react'
import { CountContext} from './UseReducerWithUseContext'

function D() {
  const countContext = useContext(CountContext);
    
    return (
      <div>
        <span>Count From F: {countContext.count}</span>
        <button onClick={()=> {countContext.dispatch("increment")}}>Increment from D</button>
        <button onClick={()=> {countContext.dispatch("decrement")}}>Decrement from D</button>
        <button onClick={()=> {countContext.dispatch("reset")}}>Reset from D</button>
      </div>
    )
}

export default D