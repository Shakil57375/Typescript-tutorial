import React from 'react'

const Counter = () => {
  return (
    <div style={{display : "flex" , justifyContent : "center", flexDirection : "column", alignItems : "center"}}>
        <h1>Count : 0</h1>
        <button>Increment</button>
        <button>Reset</button>
        <button>Decrement</button>
    </div>
  )
}

export default Counter