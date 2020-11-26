import React from 'react'
import {
  CardWrapper,
  ChatsWrapper,
  ChatWrapper,
  CheckboxWrapper,
  ContentWrapper,
  RepliesWrapper,
  TextWrapper,
} from '../../steps/BotsWizardStepIntents.styled'
import { Checkbox } from '../../../../../common/components/Checkbox'
import { H3, Small } from '../../../../../common/components/Typography'
import { Card } from '../../../../../common/components/Card'
import { Intent } from '../../types'
import { CardIntentReply } from './CardIntentReply'
import { Link } from '../../../../../common/components/Typography/Link'

type Props = {
  checked?: boolean
  onChange: (e: React.ChangeEvent<any>) => void
  intent: Intent
}

export const CardIntent: React.FC<Props> = ({
  intent: {
    id,
    name,
    description,
    reply,
    trainingData: { expressionCount, expressions },
  },
  checked = false,
  onChange,
}) => (
  <Card $checked={checked} as={'label'} key={id}>
    <CardWrapper>
      <CheckboxWrapper>
        <Checkbox id={id} name={`intents.${id}`} checked={checked} onChange={onChange} />
      </CheckboxWrapper>
      <ContentWrapper>
        <TextWrapper>
          <H3 as={'span'} $display={'block'} $marginBottom={8}>
            {name}
          </H3>
          <Small as={'span'} $display={'block'} $marginBottom={12}>
            {description}
          </Small>
          <Small>
            <Link>See all {expressionCount} expressions</Link>
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
