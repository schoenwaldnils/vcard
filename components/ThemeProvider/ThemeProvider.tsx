import React from 'react'

import { css, Global, Theme } from '@emotion/core'

const themeVars = (theme: Theme) => {
  const vars = Object.keys(theme).map((key) => {
    return `--${key}: ${theme[key]};`
  })

  return css`
    /* stylelint-disable */
    :root {
      ${vars.join('')}
    }
  `
}

type Props = {
  theme: Theme
}

export const ThemeProvider: React.FC<Props> = ({ theme }) => (
  <Global styles={themeVars(theme)} />
)
