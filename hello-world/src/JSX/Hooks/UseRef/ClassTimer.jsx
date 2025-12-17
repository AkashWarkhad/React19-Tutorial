import React, { Component } from 'react'

export class ClassTimer extends Component 
{
    interval // declared interval variable 

    constructor(props)  // Constructor
    {
      super(props)
    
      this.state = 
      {
         timer : 0
      }
    }

    componentDidMount() // Runs only once
    {
        this.interval = setInterval(() => 
        {
            this.setState(prevState => ( {timer: prevState.timer + 1} ))

        }, 1000);
    };

    componentWillUnmount() // To clear/cleanup the interval
    {
        clearInterval(this.interval);
    }

    render() 
    {
        return (
        <div>
            <p>Class Timer : {this.state.timer}</p>
            <button onClick= {() => clearInterval(this.interval)}>Stop Interval</button>
        </div>
        )
    }
}

export default ClassTimer