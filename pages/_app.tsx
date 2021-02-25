import React from 'react'
import NextApp from 'next/app'

import { GlobalStyles } from '../components/GlobalStyles'
import { Meta } from '../components/Meta'
import { themes } from '../data/themes'
import { ThemeProvider } from '../components/ThemeProvider'

class Vcard extends NextApp {
  componentDidCatch(error, info) {
    console.error(this, error, info)
  }

  render() {
    const { Component } = this.props

    const currentTheme = 'dark' // TODO: make ma editable

    return (
      <>
        <Meta />
        <ThemeProvider theme={themes[currentTheme]} />
        <GlobalStyles />
        <Component />
      </>
    )
  }
}

export default Vcard
