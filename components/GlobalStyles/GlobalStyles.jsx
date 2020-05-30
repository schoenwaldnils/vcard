/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx, Global } from '@emotion/core'

import base from './base'
import fonts from './fonts'
import normalize from './normalize'

/* stylelint-disable */
export const GlobalStyles = ({ theme }) => (
  <>
    <Global styles={normalize} />
    <Global styles={fonts} />
    <Global styles={base(theme)} />
  </>
)

GlobalStyles.propTypes = {
  theme: PropTypes.shape({
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }).isRequired,
}
