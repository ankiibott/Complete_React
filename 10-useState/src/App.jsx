import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  function IncreaseNum() {
    setNum(Num + 1)
  }

  function decreaseNum() {
    setNum(Num - 1)
  }

  return (
    <div className='flex-auto'>
      <h1>{Num}</h1>
      <button onClick={IncreaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App  