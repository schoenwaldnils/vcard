import { css } from '@emotion/react'

const BaseStyles = () => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    /* prettier-ignore */
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Helvetica,
      Arial,
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol';

    font-size: 16px;
    -webkt-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
    line-height: 1.5;
    color: var(--textColor);
    text-rendering: optimizeLegibility;
    background-color: var(--backgroundColor);

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

export default BaseStyles
