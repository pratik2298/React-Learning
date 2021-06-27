import React from 'react'
import ParentComponent from './ParentComponent'

export default function ChildComponent(props) {
    return (
        <div>
            {/* <ParentComponent messageFromChild = "Hello Child" /> */}
            <button onClick = {() => props.parentMessageHandler('Child')}> Greet Parent </button>
        </div>
    )
}
