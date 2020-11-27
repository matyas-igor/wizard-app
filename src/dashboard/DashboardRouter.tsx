import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { PageLayout } from '../common/components/Layout'
import { AppContext } from '../context'
import { Base, H1 } from '../common/components/Typography'
import { INACTIVE_GREY_COLOR } from '../common/constants/colors'

export const DashboardRouter: React.FC = () => {
  const { user } = useContext(AppContext)
  return (
    <Switch>
      <Route exact path="/dashboard">
        <PageLayout breadcrumbs={[{ to: '/dashboard', name: 'Dashboard', active: true }]} user={user}>
          <div>
            <H1 $marginBottom={24}>Dashboard</H1>
            <Base $color={INACTIVE_GREY_COLOR} $marginBottom={32}>
              Page is under construction
            </Base>
          </div>
        </PageLayout>
      </Route>
      <Route path="*">
        <Redirect to="/dashboard" />
      </Route>
    </Switch>
  )
}
