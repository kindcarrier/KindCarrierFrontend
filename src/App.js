import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Store from 'store'

function App() {
  return (
    <Store>
      <Router>
        <div className='App'>
          HOME
        </div>
      </Router>
    </Store>
  )
}

export default App
