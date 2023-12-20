import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Remover from './views/remover'
import Sobre from './views/sobre'
import Home from './views/home'
import Privacidade from './views/privacidade'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Remover} exact path="/remover" />
        <Route component={Sobre} exact path="/sobre" />
        <Route component={Home} exact path="/" />
        <Route component={Privacidade} exact path="/privacidade" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
