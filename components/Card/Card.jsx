import React from 'react'
import styled from '@emotion/styled'

const CardBox = styled.div`
  max-width: 30rem;
  padding: 2em;
`

export const Card = props => <CardBox {...props} />
