import React from 'react'

export const GreetToAll = (props) => {

    console.log(props)
    return(

   <h1>Hello {props.firstName} {props.lastName}
        {props.children}
    </h1>
          )
}