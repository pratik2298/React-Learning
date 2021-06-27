import React, { Component } from 'react'

 class ClassClickFunction extends Component {
     clickHandler()
     {
         console.log("Hi there I am in class componet")
     }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClickFunction
