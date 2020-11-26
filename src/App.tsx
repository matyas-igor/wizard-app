import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Normalize } from './common/components/Normalize'
import { BotsRouter } from './bots/BotsRouter'
import { DashboardRouter } from './dashboard/DashboardRouter'
import { StatisticsRouter } from './statistics/StatisticsRouter'
import { HelpRouter } from './help/HelpRouter'
import { MainLayout } from './common/components/Layout'
import { AppContext } from './context'
import { User } from './common/types'

// just an example, can be fetched from backend
const USER: User = { name: 'John Doe' }

const App: React.FC = () => {
  return (
    <AppContext.Provider value={{ user: USER }}>
      <Normalize />
      <Router>
        <MainLayout>
          <Switch>
            <Route path="/bots">
              <BotsRouter />
            </Route>
            <Route path="/dashboard">
              <DashboardRouter />
            </Route>
            <Route path="/statistics">
              <StatisticsRouter />
            </Route>
            <Route path="/help">
              <HelpRouter />
            </Route>
            <Route path="*">
              <Redirect to="/bots" />
            </Route>
          </Switch>
        </MainLayout>
      </Router>
    </AppContext.Provider>
  )
}

export default App
