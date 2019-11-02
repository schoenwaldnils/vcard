import React from 'react'
import styled from '@emotion/styled'
import file from './profile-image.png'

const Img = styled.img`
  border-radius: 50%;
`

export const Avatar = props => <Img {...props} src={file} />
