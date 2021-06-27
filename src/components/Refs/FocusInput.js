import React, { Component } from 'react'
import Input from './Input'

 class FocusInput extends Component {
     constructor(props) {
         super(props)
         this.focusInputRef = React.createRef(); 
     }
     clickHandler = () => {
         console.log("Inside Click Handler")
         this.focusInputRef.current.focusInput()
         
        //  console.log(this.clickHandler.current.focusInput())
     }

    render() {
        return (
            <div>
                <Input ref={ this.focusInputRef }/>
                <button onClick = {this.clickHandler}> Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
