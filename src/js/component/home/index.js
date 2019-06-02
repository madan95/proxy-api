import React, {useState} from "react"
import "./index.scss"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Home page</h2>

      <p>Count Value {count}</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>
    </div>
  )
}
