import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Store from 'store'
import { Signup, Login, Account, Home, Landing } from 'pages'

function App() {
  return (
    <Store>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/home' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/account' component={Account} />
          <Route render={() => <div>404 Not Found</div>} />
        </Switch>
      </Router>
    </Store>
  )
}

export default App
