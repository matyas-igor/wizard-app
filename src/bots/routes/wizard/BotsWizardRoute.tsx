import React from 'react'
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom'
import { Base, H1 } from '../../../common/components/Typography'
import { Button } from '../../../common/components/Button'
import { animated, useTransition } from 'react-spring'
import { Wrapper } from './BotsWizardRoute.styled'
import { Container } from '../../../common/components/Container'

export const BotsWizardRoute: React.FC = () => {
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)', position: 'absolute', width: '100%', height: '100%' },
    initial: null,
  })
  return (
    <Wrapper>
      {transitions.map(({ item: location, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={location}>
            <Route exact path="/bots/wizard">
              <Container $center>
                <H1 $marginBottom={24}>New chatbot</H1>
                <Base $marginBottom={16}>
                  Welcome to the wizard of new AI chatbots creation! We’re asking you to go through several steps in the
                  process:
                </Base>
                <Base as={'ul'} $marginBottom={32}>
                  <li>
                    <strong>Industry</strong> – point out in which industry your company working in
                  </li>
                  <li>
                    <strong>Intents</strong> – select available AI bot intents
                  </li>
                  <li>
                    <strong>Languages</strong> – choose preferred AI bot language
                  </li>
                </Base>
                <Button as={Link} to={'/bots/wizard/step/intents'}>
                  Start
                </Button>
              </Container>
            </Route>
            <Route path="/bots/wizard/step/intents">
              <Container $center>
                <H1 $marginBottom={24}>Intents</H1>
                <Base $marginBottom={24}>
                  Please select intents
                </Base>
                <Button as={Link} to={'/bots/wizard/finish'}>
                  Finish
                </Button>
              </Container>
            </Route>
            <Route path="/bots/wizard/finish">
              <Container $center>
                <H1 $marginBottom={24}>All done!</H1>
                <Base $marginBottom={32}>Thanks! Your new chatbot has been just created</Base>
                <Button as={Link} to={'/bots'}>
                  Back to chatbots list
                </Button>
              </Container>
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
