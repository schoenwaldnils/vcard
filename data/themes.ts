import { Theme } from '@emotion/react'

import colors from './colors.json'

export const themes: { light: Theme; dark: Theme } = {
  light: {
    textColor: colors.black,
    linkColor: colors.brand,
    backgroundColor: colors.white,
    avatarBorderColor: colors.brand,
  },
  dark: {
    textColor: colors.white,
    linkColor: colors.red_1plus,
    backgroundColor: colors.black,
    avatarBorderColor: colors.white,
  },
}

export type ThemeTypes = keyof typeof themes
