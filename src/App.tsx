import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Normalize } from './common/components/Normalize'
import { BotsRouter } from './bots/BotsRouter'
import { MainLayout } from './common/components/Layout'

const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Router>
        <MainLayout>
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
        </MainLayout>
      </Router>
    </>
  )
}

export default App
