// Short cut to implement :
// React Component Class -> rcc
// React Component Class PropTypes -> rccp
// React Class extend Component  -> rce
// React function Class extend  -> rfce

import React, { Component } from 'react'

class ClassCounter extends Component 
{
    constructor() 
    {
      super()
    
      this.state = 
      {
         count: 0
      }
    }

    incrementCount = () => 
    {
        this.setState(
        {
            count: this.state.count + 1
        })
    }

    incrementCountUsingPrevState = () => 
    {
        this.setState(prevState =>
        {
          return {
            count: prevState.count + 1
          }
        });
    }

  render() 
  {
    return (
      <div>
        <button onClick={ this.incrementCount }>Count :{this.state.count}</button>
        <button onClick={this.incrementCountUsingPrevState}>Inc Count using prev State : {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter

