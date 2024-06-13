import React, {useState} from 'react'

export default function Hook() {
    const [count, setCount] = useState(0)
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }
  return (
    <div>Hook
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}
