import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLayout } from '../common/components/Layout'
import { AppContext } from '../context'
import { Small } from '../common/components/Typography'
import { INACTIVE_GREY_COLOR } from '../common/constants/colors'

export const StatisticsRouter: React.FC = () => {
  const { user } = useContext(AppContext)
  return (
    <Switch>
      <Route exact path="/statistics">
        <PageLayout
          center
          breadcrumbs={[
            { to: '/dashboard', name: 'Dashboard' },
            { to: '/statistics', name: 'Statistics', active: true },
          ]}
          user={user}
        >
          <Small $color={INACTIVE_GREY_COLOR} $align={'center'}>
            Page is under construction
          </Small>
        </PageLayout>
      </Route>
      <Route path="*">
        <Redirect to="/statistics" />
      </Route>
    </Switch>
  )
}
