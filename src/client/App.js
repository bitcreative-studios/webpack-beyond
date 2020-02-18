import React from "react"
import Button from "./components/Button/Button"
import Counter from "./components/Counter/Counter"

const App = () => {
  return (
    <div>
      <h1 style={{ color: "green" }}>No Bills</h1>
      <Counter />
      <Button>World</Button>
    </div>
  )
}

export default App
