import React, { useState } from "react"
import Button from "../Button"

import "./Counter.styles.css"

const Counter = () => {
  const [count, setCount] = useState(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  return (
    <div className="counter">
      <div className="counter__value">{count}</div>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
