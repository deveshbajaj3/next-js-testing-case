'use client'
import { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Counter page</h1>
        <h2 title="count-value">{count}</h2>
        <button type='button' onClick={()=>setCount(count+1)}>Increment</button>
        <button type='button' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
