import styled from '@emotion/styled'

export const H1 = styled.h1`
  margin: 0 0 0.5em;
  font-size: 2rem;
`

export const H2 = styled.h2`
  margin: 0 0 0.5em;
  font-size: 1.5rem;
`

export const P = styled.p`
  margin-bottom: 1em;
`

export const A = styled.a`
  position: relative;
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;
  white-space: nowrap;

  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0.125em;
    background-color: currentColor;
    transform: scaleX(0);
    transition: transform 150ms;
  }

  :hover::after {
    transform: scaleX(1);
  }
`
