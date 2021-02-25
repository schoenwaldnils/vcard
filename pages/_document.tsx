/* eslint-disable max-classes-per-file */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomHead extends Head {
  render() {
    const res = super.render()

    function transform(node) {
      // remove all link preloads
      if (
        node &&
        node.type === 'link' &&
        node.props &&
        node.props.rel === 'preload'
      ) {
        return null
      }
      if (node && node.props && node.props.children) {
        return {
          ...node,
          props: {
            ...node.props,
            children: Array.isArray(node.props.children)
              ? node.props.children.map(transform)
              : transform(node.props.children),
          },
        }
      }
      if (Array.isArray(node)) {
        return node.map(transform)
      }

      return node
    }

    return transform(res)
  }
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <CustomHead />
        <body>
          <Main />
        </body>
        {/* <NextScript /> */}
      </Html>
    )
  }
}
