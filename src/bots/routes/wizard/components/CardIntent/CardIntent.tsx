import React from 'react'
import {
  CheckboxWrapper,
  ContentWrapper,
  RepliesWrapper,
  TextWrapper,
  CardWrapper,
  ChatsWrapper,
  ChatWrapper,
} from '../../steps/BotsWizardStepIntents.styled'
import { Checkbox } from '../../../../../common/components/Checkbox'
import { H3, Small } from '../../../../../common/components/Typography'
import { Card } from '../../../../../common/components/Card'
import { Intent } from '../../types'
import { CardIntentReply } from './CardIntentReply'

type Props = Intent

export const CardIntent: React.FC<Props> = ({ id, name, description, reply, trainingData: { expressions } }) => (
  <Card as={'label'} key={id}>
    <CardWrapper>
      <CheckboxWrapper>
        <Checkbox />
      </CheckboxWrapper>
      <ContentWrapper>
        <TextWrapper>
          <H3 as={'span'} $display={'block'} $marginBottom={8}>
            {name}
          </H3>
          <Small as={'span'} $display={'block'}>
            {description}
          </Small>
        </TextWrapper>
        <RepliesWrapper>
          <ChatsWrapper>
            {expressions.slice(0, 3).map((expression) => (
              <ChatWrapper key={expression.id}>
                <CardIntentReply reply={reply} expression={expression} />
              </ChatWrapper>
            ))}
          </ChatsWrapper>
        </RepliesWrapper>
      </ContentWrapper>
    </CardWrapper>
  </Card>
)
