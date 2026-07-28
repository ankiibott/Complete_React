import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  const FormHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by ', title)
    setTitle('')
  }
  return (
    <div>
      <form action="" onSubmit={(e) => {
        FormHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter your Name'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App