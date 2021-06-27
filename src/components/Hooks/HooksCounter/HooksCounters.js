import React, { useState } from 'react'

function HooksCounters() {
    // 0 is the initial value 
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={ () => setCount(count + 1) }> Count {count} </button>
        </div>
    )
}

export default HooksCounters
