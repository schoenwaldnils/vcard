import styled from '@emotion/styled'
import React from 'react'

const CardBox = styled.div`
  max-width: 30rem;
  padding: 2em;
`

export const Card = (props) => <CardBox {...props} />
