import React from 'react'

const App = () => {
  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log('seedha scrolling')
    } else {
      console.log('ulta scrolling')
    }
  }
  return (
    <div onWheel={(elem) => {
      pageScrolling(elem.deltaY);
    }}>
      <div className="page1">Page 1</div>
      <div className="page2">Page 2</div>
      <div className="page3">Page 3</div>
    </div>
  )
}

export default App
  