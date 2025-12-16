import React, { Component } from 'react'

export default class UseEffectOnceWithClass extends Component 
{
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }

    logMousePosition = (evt) => 
    { 
        console.log("[Class] Inside LogMousePosition!!");
        this.setState({
            x: evt.clientX,
            y: evt.clientY
        })
    }

    componentDidMount() 
    {
        console.log("[Class] Inside ComponentDidMount !");
        window.addEventListener('mousemove', this.logMousePosition);
    }

    render() 
    {
        return (
        <div>
            X - {this.state.x} Y - {this.state.y}
        </div>
        )
    }
}
