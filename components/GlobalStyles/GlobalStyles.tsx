/** @jsx jsx */

import { jsx, Global } from '@emotion/core'

import base from './base'
import fonts from './fonts'
import normalize from './normalize'

/* stylelint-disable */
export const GlobalStyles = () => (
  <>
    <Global styles={normalize} />
    <Global styles={fonts} />
    <Global styles={base} />
  </>
)
