import React from 'react'
import styled from '@emotion/styled'
import image128 from './image-128.png'
import image128x2 from './image-128@2x.png'
import image224 from './image-224.png'
import image224x2 from './image-224@2x.png'

const Img = styled.img`
  box-sizing: content-box;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.avatarBorderColor};
`

// export const Avatar = props => <Img {...props} src={file} />

export const Avatar = props => (
  <picture>
    <source
      srcSet={`${image224}, ${image224x2} 2x`}
      media="(min-width: 600px)"
    />
    <source srcSet={`${image128}, ${image128x2} 2x`} />
    <Img {...props} src={image224x2} />
  </picture>
)
