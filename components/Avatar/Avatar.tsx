import styled from '@emotion/styled'
import React from 'react'
import image128 from './image-128.webp'
import image128x2 from './image-128@2x.webp'
import image224 from './image-224.webp'
import image224x2 from './image-224@2x.webp'

const Img = styled.img`
  box-sizing: content-box;
  border: 2px solid var(--avatarBorderColor);
  border-radius: 50%;
`

export const Avatar = (props: any) => (
  <picture>
    <source
      srcSet={`${image224}, ${image224x2} 2x`}
      media="(min-width: 600px)"
    />
    <source srcSet={`${image128}, ${image128x2} 2x`} />
    <Img {...props} src={image224x2} />
  </picture>
)
