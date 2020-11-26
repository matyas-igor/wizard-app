import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

export const BotsRouter: React.FC = () => (
  <Router basename="/bots">
    <Switch>
      <Route exact path="/">
        Bots
      </Route>
      <Route path="/wizard">Wizard</Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
)
