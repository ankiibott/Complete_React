import React from 'react'

const App = () => {
  const FormHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }
  return (
    <div>
      <form action="" onSubmit={(e) => {
        FormHandler(e)
      }}>
        <input type="text" placeholder='Enter your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App