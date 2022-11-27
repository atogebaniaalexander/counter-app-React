import React from 'react'
import "./counter.css"
import { useState } from 'react'
const Counter = (props) => {
    const [count, setCount] = useState(0)
    
    const increase = () => {
        setCount(count + props.value)
    }
    const decrease = () => {
        setCount(count - props.value)
    }
    const reset = () => {
        setCount(count * 0)
    }
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase} className='increase_button'>+ {props.value}</button>
        <button onClick={decrease} className='decrease_button'>- {props.value}</button>
        <button onClick={reset} className='reset_button'>reset</button>

    
    </div>

  )
}

export default Counter