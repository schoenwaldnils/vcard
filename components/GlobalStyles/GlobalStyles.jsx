/** @jsx jsx */

import PropTypes from 'prop-types'
import { jsx, Global, css } from '@emotion/core'

import normalize from './normalize.css'
import fonts from './fonts.css'

const globalStyles = (theme = {}) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    -webkt-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
    line-height: 1.5;
    color: ${theme.textColor};
    text-rendering: optimizeLegibility;
    background-color: ${theme.backgroundColor};

    @media (min-width: 600px) {
      font-size: 20px;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  strong {
    font-weight: 600;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

/* stylelint-disable */
export const GlobalStyles = ({ theme }) => (
  <>
    <Global
      styles={css`
        ${normalize}
      `}
    />
    <Global
      styles={css`
        ${fonts}
      `}
    />
    <Global styles={globalStyles(theme)} />
  </>
)

GlobalStyles.propTypes = {
  theme: PropTypes.shape({
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }).isRequired,
}
