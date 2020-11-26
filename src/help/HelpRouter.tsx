import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLayout } from '../common/components/Layout'
import { AppContext } from '../context'
import { Small } from '../common/components/Typography'
import { INACTIVE_GREY_COLOR } from '../common/constants/colors'

export const HelpRouter: React.FC = () => {
  const { user } = useContext(AppContext)
  return (
    <Switch>
      <Route exact path="/help">
        <PageLayout
          center
          breadcrumbs={[
            { to: '/dashboard', name: 'Dashboard' },
            { to: '/help', name: 'Help', active: true },
          ]}
          user={user}
        >
          <Small $color={INACTIVE_GREY_COLOR} $align={'center'}>
            Page is under construction
          </Small>
        </PageLayout>
      </Route>
      <Route path="*">
        <Redirect to="/help" />
      </Route>
    </Switch>
  )
}
