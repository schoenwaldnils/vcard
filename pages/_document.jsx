import React from 'react'
import Document, { Head, Main } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="de">
        <Head />
        <body>
          <Main />
        </body>
      </html>
    )
  }
}
