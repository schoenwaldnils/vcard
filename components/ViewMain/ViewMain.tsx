import styled from '@emotion/styled'
import { FC } from 'react'

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ViewMain: FC = (props) => <View {...props} />
