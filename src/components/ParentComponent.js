import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello Parent"
        }
    }
    displayParentMessage = (childName) =>
    {
        alert(`${this.state.message} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent parentMessageHandler = {this.displayParentMessage}></ChildComponent>
                {/* <button onClick = {this.displayChildMessage}> Greet Child</button> */}
            </div>
        )
    }
}

export default ParentComponent
