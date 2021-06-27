import React, { Component } from 'react'

export class Counter_setState extends Component {

    constructor()
    {
        super();
        this.state = (
            {
                value:1
            }
        )
    }

    handleIncrementChanges()
    {
        this.setState({
            value:this.state.value+1
           
        },
        () => { console.log("callback increment value : ", this.state.value) }
        )
        console.log("increment-", this.state.value)
    }



    handleDecrementChanges()
    {
        this.setState({
            value:this.state.value-1
           
        }, () => { console.log("callback increment value : ", this.state.value)})
        console.log("decrement-",this.state.value)
    }

    render() {
        return (
            <div>
                <h4> count {this.state.value} </h4>
                <button onClick={()=>{this.handleIncrementChanges()}}>increase</button>
                <button onClick={()=>{this.handleDecrementChanges()}}>decrease</button>
            </div>
        )
    }
}

