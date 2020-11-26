import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLayout } from '../common/components/Layout'
import { AppContext } from '../context'
import { BotsIndexRoute, BotsWizardRoute } from './routes'

export const BotsRouter: React.FC = () => {
  const { user } = useContext(AppContext)
  return (
    <Switch>
      <Route exact path="/bots">
        <PageLayout
          breadcrumbs={[
            { to: '/dashboard', name: 'Dashboard' },
            { to: '/bots', name: 'Chatbots', active: true },
          ]}
          user={user}
        >
          <BotsIndexRoute />
        </PageLayout>
      </Route>
      <Route path="/bots/wizard">
        <PageLayout
          noContainer
          breadcrumbs={[
            { to: '/dashboard', name: 'Dashboard' },
            { to: '/bots', name: 'Chatbots' },
            { to: '/bots/wizard', name: 'Wizard', active: true },
          ]}
          user={user}
        >
          <BotsWizardRoute />
        </PageLayout>
      </Route>
      <Route path="*">
        <Redirect to="/bots" />
      </Route>
    </Switch>
  )
}
