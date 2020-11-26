import React from 'react'
import {
  BubbleContainerMine,
  BubbleContainerYours,
  BubbleMine,
  BubbleYours,
} from '../../../../../common/components/Bubble'
import { ExtraSmall, Small } from '../../../../../common/components/Typography'
import { BLACK_COLOR, INACTIVE_GREY_COLOR, WHITE_COLOR } from '../../../../../common/constants/colors'
import { Wrapper } from './CardIntentReply.styled'

type Props = {
  expression: {
    id: string
    text: string
  }
  reply: {
    id: string
    text: string
  }
}

export const CardIntentReply: React.FC<Props> = ({ expression, reply }) => (
  <Wrapper>
    <BubbleContainerMine>
      <ExtraSmall $color={INACTIVE_GREY_COLOR} $marginRight={16}>
        User
      </ExtraSmall>
      <BubbleMine>
        <Small $color={WHITE_COLOR}>{expression.text}</Small>
      </BubbleMine>
    </BubbleContainerMine>
    <BubbleContainerYours>
      <ExtraSmall $color={INACTIVE_GREY_COLOR} $marginLeft={16}>
        Bot
      </ExtraSmall>
      <BubbleYours>
        <Small $color={BLACK_COLOR}>{reply.text}</Small>
      </BubbleYours>
    </BubbleContainerYours>
  </Wrapper>
)
