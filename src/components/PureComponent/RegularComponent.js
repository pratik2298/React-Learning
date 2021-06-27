import React, { Component } from 'react'

export class RegularComponent extends Component {

    render() {
       
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default RegularComponent
