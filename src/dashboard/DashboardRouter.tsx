import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLayout } from '../common/components/Layout'
import { AppContext } from '../context'
import { Small } from '../common/components/Typography'
import { INACTIVE_GREY_COLOR } from '../common/constants/colors'

export const DashboardRouter: React.FC = () => {
  const { user } = useContext(AppContext)
  return (
    <Switch>
      <Route exact path="/dashboard">
        <PageLayout center breadcrumbs={[{ to: '/dashboard', name: 'Dashboard', active: true }]} user={user}>
          <Small $color={INACTIVE_GREY_COLOR} $align={'center'}>
            Page is under construction
          </Small>
        </PageLayout>
      </Route>
      <Route path="*">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  )
}
