import React, { useCallback, useMemo } from 'react'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { Base, H1, Small } from '../../../../common/components/Typography'
import { Checkbox } from '../../../../common/components/Checkbox'
import { Button } from '../../../../common/components/Button'
import { Container } from '../../../../common/components/Container'
import { WithIconAtLeft } from '../../../../common/components/WithIcon'
import intents from '../fixtures/intents.json'
import {
  CardsWrapper,
  Form,
  SelectorWrapper,
  SpinnerWrapper,
  SubmitContainer,
  SubmitInnerContainer,
  Wrapper,
} from './BotsWizardStepIntents.styled'
import { Intent } from '../types'
import { CardIntent } from '../components/CardIntent'
import { INACTIVE_GREY_COLOR } from '../../../../common/constants/colors'
import { Spinner } from '../../../../common/components/Spinner'
import { useScroll } from '../../../../common/hooks/useScroll'

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const BotsWizardStepIntents: React.FC = () => {
  const history = useHistory()

  const { values, handleChange, setValues, handleSubmit, isSubmitting } = useFormik({
    initialValues: { intents: intents.reduce((acc, intent) => ({ ...acc, [intent.id]: false }), {}) },
    onSubmit: async (values) => {
      const data = { intents: intents.filter((intent) => values.intents[intent.id]).map((intent) => intent.id) }
      console.log('Form data', data)

      if (data.intents.length === 0) {
        return false
      }

      // Simulating form submission
      await timeout(Math.random() * 1000 + 2000)

      // Done! Moving to the next step
      history.push('/bots/wizard/finish')
      return true
    },
  })

  const amountSelected = useMemo(() => {
    return intents.reduce((acc, intent) => acc + (values.intents[intent.id] ? 1 : 0), 0)
  }, [values.intents])

  const isAllSelected = amountSelected === intents.length
  const toggleAllSelected = useCallback(() => {
    setValues({ intents: intents.reduce((acc, intent) => ({ ...acc, [intent.id]: !isAllSelected }), {}) })
  }, [isAllSelected, setValues])

  const [setScrollRef, { isAtBottom }] = useScroll()

  return (
    <Wrapper ref={setScrollRef}>
      <Form onSubmit={handleSubmit}>
        <div style={{ position: 'relative' }}>
          <Container>
            <div>
              <H1 $marginBottom={24}>Intents</H1>
              <Base $marginBottom={24}>
                Please select intents your new AI chatbot will going to support. More you select – more chatbot features
                will be supported.
              </Base>
              <SelectorWrapper>
                <Base as={'label'} $strong style={{ cursor: 'pointer' }}>
                  <WithIconAtLeft icon={<Checkbox checked={isAllSelected} onChange={toggleAllSelected} />}>
                    Select all
                  </WithIconAtLeft>
                </Base>
              </SelectorWrapper>
              <CardsWrapper>
                {intents.map((intent: Intent) => (
                  <CardIntent
                    key={intent.id}
                    checked={values.intents[intent.id]}
                    onChange={handleChange}
                    intent={intent}
                  />
                ))}
              </CardsWrapper>
            </div>
          </Container>
          <SubmitContainer $atBottom={isAtBottom}>
            <SubmitInnerContainer>
              <Button type="submit" disabled={amountSelected === 0 || isSubmitting}>
                Continue
              </Button>
              <Small $marginLeft={32} $color={INACTIVE_GREY_COLOR}>
                {isAllSelected
                  ? `All intents are selected. Nicely done!`
                  : amountSelected > intents.length / 2
                  ? `${amountSelected} out of ${intents.length} intents selected. Good choice!`
                  : amountSelected > 0
                  ? `${amountSelected} out of ${intents.length} intents selected. Keep it going!`
                  : `Please select at least one intent to continue`}
              </Small>
              {isSubmitting && (
                <SpinnerWrapper>
                  <Spinner />
                </SpinnerWrapper>
              )}
            </SubmitInnerContainer>
          </SubmitContainer>
        </div>
      </Form>
    </Wrapper>
  )
}
