import React, { Component } from 'react'

class ConditionalRenderingUserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        if(this.state.isLoggedIn)
        {
            return (
                <div>
                    <h1> Welcome Pratik </h1>
                </div>
            )
        }
        else{
            return (
                <div>
                    <h1> Welcome User </h1>
                </div>
            )
        }
    }
}

export default ConditionalRenderingUserGreeting
