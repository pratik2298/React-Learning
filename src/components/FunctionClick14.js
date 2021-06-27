import React from 'react'

function FunctionClick14() {
    function displayMessage()
    {
        console.log("Hi there");
    }
    return (
        <div>
            {/* 
                Always in Event Handling displayMessage is function not a function call
             */}
            <button onClick = { displayMessage }> Click Me !</button>
        </div>
    )
}

export default FunctionClick14
