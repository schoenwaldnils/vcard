import { Global } from '@emotion/react'

import base from './base'
import fonts from './fonts'
import normalize from './normalize'

export const GlobalStyles = () => (
  <>
    <Global styles={normalize} />
    <Global styles={fonts} />
    <Global styles={base} />
  </>
)
