import React from 'react'

function PersonList(props) {
    return (
        <div>
            <h2>
                Name : {props.person.name} <br></br>
                Age : {props.person.age} <br></br>
                Skills : {props.person.skills}
            </h2>
        </div>
    )
}

export default PersonList
