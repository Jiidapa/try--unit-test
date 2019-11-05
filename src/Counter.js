import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const increase = () => setCounter(counter + 1)
    const decrease = () => setCounter(counter - 1)

    return (
        <div>
            <button id='btn-test-add' onClick={increase}>
                +
            </button>
        <span id="count">{counter}</span>
        <button id='btn-test-sub' onClick={decrease}>
            -
            </button>
        </div >
    );
}

export default Counter