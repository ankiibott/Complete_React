import React from 'react'
// use of empty tags is to return multiple elements without adding extra nodes to the DOM
// React.Fragment can also be used instead of empty tags (nexted div)\

const App = () => {
  return (
    <>
      <div>
        <h1>Hello React</h1>
      </div>
      <div>
        <h3>this is my first jsx to work with</h3>
      </div>
    </>
  )
}

export default App
