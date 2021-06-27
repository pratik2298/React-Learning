import React, { Component } from 'react'

class EventBinding14 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : this.props.name
        }
        // this.changeName = this.changeName.bind(this);
    }
    // changeName()
    // {
    //     this.setState({
    //         name : "Ehrmantraut"
    //     })
    // }

    // if you dont want to bind "this" keyword in constructor then define your function as arrow function
    changeName = () => {
        
                this.setState({
                    name : "Ehrmantraut"
                })
    }
        render() {
        return (
            <div>
                <h1> Name : {this.state.name} </h1>

                {/* Binding "this" keyword in render method */}
                {/* <button onClick={ this.changeName.bind(this)}>Click to Change Name </button> */}

                {/* using arrow function in render method */}
                {/* <button onClick={ () => this.changeName()}>Click to Change Name </button> */}

                {/* Preffered Approach = binding this keyword in constructor */}
                
                <button onClick={ this.changeName }>Click to Change Name </button>
            </div>
        )
    }
}

export default EventBinding14
