import NextApp from 'next/app'
import { ReactElement } from 'react'

import { GlobalStyles } from '../components/GlobalStyles'
import { Meta } from '../components/Meta'
import { ThemeProvider } from '../components/ThemeProvider'
import { themes } from '../data/themes'

class Vcard extends NextApp {
  componentDidCatch(error: Error, info: unknown): void {
    console.error(this, error, info)
  }

  render(): ReactElement {
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
