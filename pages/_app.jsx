// import { CacheProvider } from '@emotion/core'
// import createCache from '@emotion/cache'
import React from 'react'
import NextApp, { Container } from 'next/app'
import { ThemeProvider } from 'emotion-theming'

import { GlobalStyles } from '../components/GlobalStyles'
import { Meta } from '../components/Meta'

import colors from '../data/colors.json'

// const vcardCache = createCache({
//   prefix: false,
// })

const themes = {
  light: {
    ...colors,
    textColor: colors.black,
    linkColor: colors.brand,
    backgroundColor: colors.white,
    avatarBorderColor: colors.brand,
  },
  dark: {
    ...colors,
    textColor: colors.white,
    linkColor: colors.red_1plus,
    backgroundColor: colors.black,
    avatarBorderColor: colors.white,
  },
}

class Vcard extends NextApp {
  componentDidCatch(error, info) {
    console.log(this, error, info)
  }

  render() {
    const { Component } = this.props

    const currentTheme = 'dark' // TODO: make ma editable

    return (
      // <CacheProvider value={vcardCache}>
      <Container>
        <Meta />
        <ThemeProvider theme={themes[currentTheme]}>
          <GlobalStyles theme={themes[currentTheme]} />
          <Component />
        </ThemeProvider>
      </Container>
      // </CacheProvider>
    )
  }
}

export default Vcard
