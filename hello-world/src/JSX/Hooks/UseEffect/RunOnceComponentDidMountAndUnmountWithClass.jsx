// componentDidMount which rund once in the component

import React, { Component } from 'react'

export default class RunOnceComponentDidMountAndUnmountWithClass extends Component 
{
    constructor(props) 
    {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }

    logMousePosition = (evt) => 
    { 
        //console.log("[Class] Inside LogMousePosition!!"); // Commenting for now
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

    // To unmount the event listener
    componentWillUnmount()
    {
        console.log("Component Unmounted!!");
        window.removeEventListener("mousemove", this.logMousePosition);
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
