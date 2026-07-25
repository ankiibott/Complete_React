import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Ankit Dubey</h1>
        <p>welcome to my app</p>
      </div>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
