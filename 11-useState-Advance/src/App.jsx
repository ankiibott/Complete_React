import React, { useState } from 'react'

const App = () => {
  const [Num, setNum] = useState([10, 20, 30])
  //1st method (indirect)
  const btnclicked = () => {
    const newNum = [...Num]
    newNum.push(99)
    setNum(newNum)
  }
  //2nd method (batch update)
  const [num, setnum] = useState(10)
  const incbutton = () => {
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
    setnum(prev => (prev + 1))
  }
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={btnclicked}>Click</button><br />
      <h1>{num}</h1>
      <button onClick={incbutton}>Click</button>
    </div>
  )
}

export default App