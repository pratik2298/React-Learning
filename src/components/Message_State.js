import React, {Component} from'react'

class MessageState extends Component{

    // create the state object and initialize inside the class constructor
    constructor()
    {
        // call the super() is necessaty because we are extending Componet class
        super()

        // creating state object and always use "this" keyword because we are inside the class
        this.state = {
            message:"welcome to star wars"

        }
    }


    // always define the function which have mention in button between constructor and render()
    changeMessage()
    {
        this.setState(
            {
                message:"welcome to dark side"
            }
        )
    }


    render(){
        return(
            <div>
                {/* below is the way to bind the message in render() */}
                <h1>{this.state.message}</h1>
                <button onClick={
                    ()=> this.changeMessage()
                    }> Display </button>
            </div>
        )
    }
}

export default MessageState;