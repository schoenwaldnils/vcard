import { Global } from '@emotion/react'
import { FC } from 'react'

import base from './base'
import fonts from './fonts'
import normalize from './normalize'

export const GlobalStyles: FC = () => (
  <>
    <Global styles={normalize} />
    <Global styles={fonts} />
    <Global styles={base} />
  </>
)
