import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState<number>(0)
  return (
    <div>Counter
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        {/* Always prefer setCount(prev => prev + 1) unless you're 100% sure state updates won't cause issues. */}
    </div>
  )
}

export default Counter