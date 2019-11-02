import styled from '@emotion/styled'

export const H1 = styled.h1`
  font-size: 2rem;
  margin: 0 0 0.5em;
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5em;
`

export const P = styled.p`
  margin-bottom: 1em;
`

export const A = styled.a`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.linkColor};
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
