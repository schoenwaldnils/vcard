import React from 'react'
import styled from '@emotion/styled'

const View = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const ViewMain = props => <View {...props} />
