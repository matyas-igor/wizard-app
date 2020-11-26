import React from 'react'
import { H1, Small } from '../../../common/components/Typography'
import { INACTIVE_GREY_COLOR } from '../../../common/constants/colors'
import { Button } from '../../../common/components/Button'
import { Link } from 'react-router-dom'

export const BotsIndexRoute: React.FC = () => (
  <div>
    <H1 $marginBottom={24}>Chatbots</H1>
    <Small $color={INACTIVE_GREY_COLOR} $marginBottom={32}>
      Here’s gonna be a list of created chatbots
    </Small>
    <Button as={Link} to={'/bots/wizard'}>
      Create new chatbot
    </Button>
  </div>
)
