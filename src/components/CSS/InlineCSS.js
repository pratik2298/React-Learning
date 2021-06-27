import React from 'react'

function InlineCSS() {

    const heading = {
        // css property name should be in camelCase
        fontSize : '72px',
        color: 'Red',
    }
    return (
        <div>
            <h1 style = {heading}> Inline CSS </h1>
        </div>
    )
}

export default InlineCSS
