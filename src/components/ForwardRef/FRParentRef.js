import React, { Component } from 'react'
import FRInputRef from './FRInputRef';

 class FRParentRef extends Component {
    constructor(props) {
        super(props)
        
        this.parentRef = React.createRef();
       
    }
    clickHandler = () =>{
        this.parentRef.current.focus();
    }
    render() {
        return (
            <div>
                 {/* passing ref parent ref to child */}
                <FRInputRef ref={this.parentRef} />
                <button onClick = {this.clickHandler}></button>
            </div>
        )
    }
}

export default FRParentRef
