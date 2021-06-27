import React, { PureComponent } from 'react'

export class PureComponetDemo extends PureComponent {
    render() {
        
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureComponetDemo
