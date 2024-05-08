import { useState } from 'react'

const Counter = props => {
  const [counter, setCounter] = useState(0)

  return(
    <>
      <button onClick={() => setCounter(prev => prev - 1)}>-</button>
      <span>{ counter }</span>
      <button onClick={() => setCounter(prev => prev + 1)}>+</button>
    </>
  )
}

export default Counter