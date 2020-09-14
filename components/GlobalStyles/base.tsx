import { css } from '@emotion/core'

export default () => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
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
