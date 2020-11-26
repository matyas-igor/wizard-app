import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { animated, useTransition } from 'react-spring'
import { Wrapper } from './BotsWizardRoute.styled'
import { BotsWizardStepIntents } from './steps/BotsWizardStepIntents'
import { BotsWizardStepStart } from './steps/BotsWizardStepStart'
import { BotsWizardStepFinish } from './steps/BotsWizardStepFinish'

export const BotsWizardRoute: React.FC = () => {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-25%,0,0)', position: 'absolute', width: '100%', height: '100%' },
    initial: null,
  })
  return (
    <Wrapper>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/bots/wizard">
              <BotsWizardStepStart />
            </Route>

            <Route path="/bots/wizard/step/intents">
              <BotsWizardStepIntents />
            </Route>

            <Route path="/bots/wizard/finish">
              <BotsWizardStepFinish />
            </Route>
            <Route path="*">
              <Redirect to="/bots/wizard" />
            </Route>
          </Switch>
        </animated.div>
      ))}
    </Wrapper>
  )
}
