import React, { useState } from 'react'

function HooksCounter2() {
    const initalCount = 0;
    const [count, setCount] = useState(initalCount);

    return (
        <div>
            Count: { count }
            <button onClick = { ()=>setCount(count + 1) }> Increment </button>
            <button onClick = { ()=>setCount(count - 1) }> Decrement </button>
            <button onClick = { ()=>setCount(initalCount) }> Reset </button>
        </div>
    )
}

export default HooksCounter2
