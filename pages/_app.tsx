// import { CacheProvider } from '@emotion/core'
// import createCache from '@emotion/cache'
import React from 'react'
import NextApp from 'next/app'

import { GlobalStyles } from '../components/GlobalStyles'
import { Meta } from '../components/Meta'
import { themes } from '../data/themes'
import { ThemeProvider } from '../components/ThemeProvider'

class Vcard extends NextApp {
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log(this, error, info)
  }

  render() {
    const { Component } = this.props

    const currentTheme = 'dark' // TODO: make ma editable

    return (
      // <CacheProvider value={vcardCache}>
      <>
        <Meta />
        <ThemeProvider theme={themes[currentTheme]} />
        <GlobalStyles />
        <Component />
      </>
      // </CacheProvider>
    )
  }
}

export default Vcard
