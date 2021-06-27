import React from 'react'

const FRInputRef = React.forwardRef((props, ref) => {
    return (
        <div>
            {/* recieving ref as a parent ref */}
            <input type="text" ref={ref} />
        </div>
    )
}) 

export default FRInputRef
