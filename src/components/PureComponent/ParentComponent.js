import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "pratik"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "pratik"
            }) 
        }, 4000)
    }
    
    render() {
      
        return (
            <div>
                <h1>Parent Component</h1>
                <PureComponent name = {this.state.name}></PureComponent>
                <RegularComponent name = {this.state.name}></RegularComponent>
            </div>
        )
    }
}

export default ParentComponent
