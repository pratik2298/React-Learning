import React from 'react'

export const Hello = () =>{
    // return(
    //     // JSX 
    //     <div>
    //         <h1>Hello Word With JSX</h1>
    //     </div>
    // )

    return React.createElement('div', null, React.createElement('h1', null, 'Hello World without JSX'))
}