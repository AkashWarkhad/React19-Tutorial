import React from 'react'
import IntervalClassCounter from './IntervalClassCounter'
import IntervalFunctionCounter from './IntervalFunctionCounter'

function UseEffectWithIncorrectDependency() 
{
  return (
    <div>UseEffectWithIncorrectDependency
        <IntervalClassCounter />
        <IntervalFunctionCounter />
    </div>
  )
}

export default UseEffectWithIncorrectDependency