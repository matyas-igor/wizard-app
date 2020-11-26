import React, { useContext } from 'react'
import { Base, H1, Small } from '../../../../common/components/Typography'
import { Checkbox } from '../../../../common/components/Checkbox'
import { Button } from '../../../../common/components/Button'
import { Container } from '../../../../common/components/Container'
import { WithIconAtLeft } from '../../../../common/components/WithIcon'
import intents from '../fixtures/intents.json'
import { CardsWrapper, SelectorWrapper, SubmitContainer, SubmitInnerContainer } from './BotsWizardStepIntents.styled'
import { Intent } from '../types'
import { CardIntent } from '../components/CardIntent'
import { INACTIVE_GREY_COLOR } from '../../../../common/constants/colors'
import { BotsWizardContext } from '../context'

export const BotsWizardStepIntents: React.FC = () => {
  const { isAtBottom } = useContext(BotsWizardContext)
  return (
    <>
      <Container>
        <div>
          <H1 $marginBottom={24}>Intents</H1>
          <Base $marginBottom={24}>Please select intents your new AI chatbot will going to support.</Base>
          <SelectorWrapper>
            <Base as={'label'} $strong style={{ cursor: 'pointer' }}>
              <WithIconAtLeft icon={<Checkbox />}>Select all</WithIconAtLeft>
            </Base>
          </SelectorWrapper>
          <CardsWrapper>
            {intents.map((intent: Intent) => (
              <CardIntent key={intent.id} {...intent} />
            ))}
          </CardsWrapper>
        </div>
      </Container>
      <SubmitContainer $atBottom={isAtBottom}>
        <SubmitInnerContainer>
          <Button disabled>Continue</Button>
          <Small $marginLeft={32} $color={INACTIVE_GREY_COLOR}>
            Please select at least one intent to continue
          </Small>
        </SubmitInnerContainer>
      </SubmitContainer>
    </>
  )
}
