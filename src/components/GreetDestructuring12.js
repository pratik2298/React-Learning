import React from 'react'


/*
    Destructuring in function parameter
*/
// export const GreetDestructuring12 = ({firstName, lastName}) => {
//     return(
//         <div>
//             <h1>Full Name {firstName}  {lastName} </h1>
//         </div>
//     )
// }


/*
    Destructuring in function body
*/
export const GreetDestructuring12 = props => {
    const {firstName, lastName}  = props;
    return(

        <div>
            <h1>Full name - {firstName} {lastName} </h1>
        </div>
    )
}