// componentDidUpdate with condition on Count update

import React, { Component} from "react"

export default class ConditionalComponentDidUpdateWithClass extends Component 
{
    constructor(props) 
    {
      super(props)
    
      this.state = 
      {
         count : 0,
         name: ""
      }
    }

    //Runs Initially when render the page
    componentDidMount()
    {
        document.title = `Clicked ${this.state.count} times.`;
    }

    // After all updates are shown by this DidUpdate
    componentDidUpdate(prevProps, prevState)
    {
        // Title will update only appropriate (count) value changes
        if(prevState.count !== this.state.count)
        {
            console.log("Updating document title.")
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    render()
    {
        return(
            <div>
                <input type="text" 
                value={this.state.name} // value makes the input controlled, Removing value makes it uncontrolled. Controlled inputs are preferred in React.
                onChange={(evt)=> {
                    this.setState({
                    ...this.state,
                    name: evt.target.value
                })}}/>
                
                <p>Json content : {JSON.stringify(this.state)}</p>
                <button onClick={()=> this.setState({
                    count : this.state.count + 1
                })}>Clicked {this.state.count} times</button>
            </div>
        );
    }
}


