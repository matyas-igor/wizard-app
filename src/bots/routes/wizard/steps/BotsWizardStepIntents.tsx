import React, { useCallback, useContext, useMemo } from 'react'
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
} from './BotsWizardStepIntents.styled'
import { Intent } from '../types'
import { CardIntent } from '../components/CardIntent'
import { INACTIVE_GREY_COLOR } from '../../../../common/constants/colors'
import { BotsWizardContext } from '../context'
import { Spinner } from '../../../../common/components/Spinner'

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const BotsWizardStepIntents: React.FC = () => {
  const history = useHistory()
  const { isAtBottom } = useContext(BotsWizardContext)

  const { values, handleChange, setValues, handleSubmit, isSubmitting } = useFormik({
    initialValues: intents.reduce((acc, intent) => ({ ...acc, [intent.id]: false }), {}),
    onSubmit: async (values) => {
      const data = { intents: intents.filter((intent) => values[intent.id]).map((intent) => intent.id) }
      console.log('Form data', data)

      if (data.intents.length === 0) {
        return false
      }

      // Simulating form submission
      await timeout(Math.random() * 2000 + 2000)

      // Done! Moving to the next step
      history.push('/bots/wizard/finish')
      return true
    },
  })

  const amountSelected = useMemo(() => {
    return intents.reduce((acc, intent) => acc + (values[intent.id] ? 1 : 0), 0)
  }, [values])

  const isAllSelected = amountSelected === intents.length
  const toggleAllSelected = useCallback(() => {
    setValues(intents.reduce((acc, intent) => ({ ...acc, [intent.id]: !isAllSelected }), {}))
  }, [isAllSelected, setValues])

  return (
    <Form onSubmit={handleSubmit}>
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
              <CardIntent key={intent.id} checked={values[intent.id]} onChange={handleChange} intent={intent} />
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
    </Form>
  )
}
