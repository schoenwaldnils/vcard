import '@emotion/react'

type Color = string

type ThemeType = {
  textColor: Color
  linkColor: Color
  backgroundColor: Color
  avatarBorderColor: Color
}

declare module '@emotion/core' {
  export interface Theme extends ThemeType {}
}
