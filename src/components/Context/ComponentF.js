import React, { Component } from 'react'
import UserConsumer from '../../components/Context/UserConsumer'
 class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    myName=>{
                            return(
                                <div>
                                    Hello { myName }
                                </div>
                            )
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
