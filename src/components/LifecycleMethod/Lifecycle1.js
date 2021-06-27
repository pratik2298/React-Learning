import React, { Component } from 'react'
import Lifecycle2 from './Lifecycle2'

export class Lifecycle1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pratik'
        }
        console.log("Lifecycle1 Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle1 getDerivedStateFromProps")
        return null 
         
    }

    componentDidMount(){
        console.log("Lifecycle1 componentDidMount")
    }
    
    render() {
        console.log("Lifecycle1 Render")
        return (
            <div>
                <h1> Lifecycle A</h1>
                <Lifecycle2/>
            </div>
        )
    }
}

export default Lifecycle1
