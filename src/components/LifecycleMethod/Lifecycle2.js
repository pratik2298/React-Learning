import React, { Component } from 'react'

export class Lifecycle2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pratik'
        }
        console.log("Lifecycle2 Constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Lifecycle2 getDerivedStateFromProps")
        return null 
         
    }

    componentDidMount(){
        console.log("Lifecycle2 componentDidMount")
    }
    
    render() {
        console.log("Lifecycle2 Render")
        return (
            <div>
                <h1> Lifecycle B</h1>
            </div>
        )
    }
}

export default Lifecycle2
