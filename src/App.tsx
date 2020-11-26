import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Normalize } from './common/components/Normalize'
import { BotsRouter } from './bots/BotsRouter'
import { Layout } from './common/components/Layout/Layout'

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Router>
        <Layout>
          <Switch>
            <Route path="/bots">
              <BotsRouter />
            </Route>
            {/*<Route path="/dashboard">*/}
            {/*  <DashboardRouter />*/}
            {/*</Route>*/}
            {/*<Route path="/statistic">*/}
            {/*  <StatisticRouter />*/}
            {/*</Route>*/}
            <Route path="*">
              <Redirect to="/bots" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </>
  )
}

export default App
