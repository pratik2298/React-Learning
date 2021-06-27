import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)

        // creating ref
        this.inputRef = React.createRef()
    }
    focusInput() {
        // current contains the html element
        this.inputRef.current.focus()
        console.log("FocusINput() called from parent")
    }
    render() {
        return (
            <div>
                <input type="text" ref = {this.inputRef} />
            </div>
        )
    }
}

export default Input
