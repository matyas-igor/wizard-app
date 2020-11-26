import React from 'react'
import { Base, H1 } from '../../../../common/components/Typography'
import { Button } from '../../../../common/components/Button'
import { Link } from 'react-router-dom'
import { Container } from '../../../../common/components/Container'

export const BotsWizardStepStart: React.FC = () => (
  <Container>
    <div>
      <H1 $marginBottom={24}>New chatbot</H1>
      <Base $marginBottom={16}>
        Welcome to the wizard of new AI chatbots creation! We’re asking you to go through several steps in the process:
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
    </div>
  </Container>
)
