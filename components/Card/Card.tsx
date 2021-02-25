import styled from '@emotion/styled'
import { FC } from 'react'

const CardBox = styled.div`
  max-width: 30rem;
  padding: 2em;
`

export const Card: FC = (props) => <CardBox {...props} />
