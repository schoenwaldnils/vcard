import { Global } from '@emotion/react'
import { FC } from 'react'

import base from './base'
import normalize from './normalize'

export const GlobalStyles: FC = () => (
  <>
    <Global styles={normalize} />
    <Global styles={base} />
  </>
)
