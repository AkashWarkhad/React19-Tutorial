import React, {useContext} from 'react'
import {CountContext} from './UseReducerWithUseContext'

function A() 
{
  const countContext = useContext(CountContext);
  
  return (
    <div>
      <span>Count From F: {countContext.count}</span>
      <button onClick={()=> {countContext.dispatch("increment")}}>Increment from A</button>
      <button onClick={()=> {countContext.dispatch("decrement")}}>Decrement from A</button>
      <button onClick={()=> {countContext.dispatch("reset")}}>Reset from A</button>
    </div>
  )
}

export default A