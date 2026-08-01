import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  // Define state at the top level of the component
  const [Data, setData] = useState([])

  // axios method for api calling :- use of async func is to get response
  const getData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setData(data)
  }

  // fetch method for api calling
  const getData1 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    setData(data)
  }

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={getData}>Get Data (Axios)</button>
      <button onClick={getData1} style={{ marginLeft: '10px' }}>Get Data (Fetch)</button>
      <div style={{ marginTop: '20px' }}>
        {Data.map(function (elem, idx) {
          return <h3 key={elem.id || idx}>Hello, {elem.title} ({idx})</h3>
        })}
      </div>
    </div>
  )
}

export default App
