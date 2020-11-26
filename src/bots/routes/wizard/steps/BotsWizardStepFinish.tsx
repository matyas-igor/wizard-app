import React from 'react'
import { Base, H1 } from '../../../../common/components/Typography'
import { Button } from '../../../../common/components/Button'
import { Link } from 'react-router-dom'
import { Container } from '../../../../common/components/Container'

export const BotsWizardStepFinish: React.FC = () => (
  <Container>
    <div>
      <H1 $marginBottom={24}>All done!</H1>
      <Base $marginBottom={32}>Thanks! Your new chatbot has been just created</Base>
      <Button as={Link} to={'/bots'}>
        Back to chatbots list
      </Button>
    </div>
  </Container>
)
