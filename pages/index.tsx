import styled from '@emotion/styled'
import { FC } from 'react'
import {
  FaCodepen,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXing,
} from 'react-icons/fa'
import { GoMarkGithub } from 'react-icons/go'

import { Avatar } from '../components/Avatar'
import { Card } from '../components/Card'
import { IconInline } from '../components/Icon'
import { A, P } from '../components/Typo/Typo'
import { ViewMain } from '../components/ViewMain'

const AvatarStyled = styled(Avatar)`
  width: 8rem;
  filter: saturate(100%) grayscale(100%) contrast(105%) brightness(115%);
  transition: filter 150ms;

  :hover {
    filter: saturate(75%);
  }
`
const AvatarWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`

const lookingForWork = false

const Index: FC = () => (
  <ViewMain>
    <Card>
      <AvatarWrapper>
        <AvatarStyled />
      </AvatarWrapper>

      <P>
        Hi, my name is <strong>Nils Schönwald</strong>.
        <br />
        I&apos;m a <strong>Freelance Frontend&nbsp;Developer</strong> based in
        Hamburg. Formerly with{' '}
        <A href="https://twitter.com/cellular" target="cellular">
          @cellular
        </A>
        {', '}
        <A href="https://twitter.com/finanzcheck_de" target="ffg">
          @finanzcheck_de
        </A>{' '}
        and{' '}
        <A href="https://twitter.com/Factorial_io" target="factorial">
          @factorial
        </A>
        .
      </P>

      <P>
        I love to work with CSS, React, Typescript, Javascript, Next.js,
        Contentful, etc.
      </P>

      {lookingForWork && (
        <P>
          I currently am looking for a position as a{' '}
          <strong>Frontend&nbsp;Developer</strong> based in Hamburg or remote.
          <br />
          You have or know about such a position? Let&apos;s chat!
        </P>
      )}

      <P>
        You can find me on{' '}
        <A href="https://twitter.com/schoenwaldnils" target="twitter">
          <IconInline>
            <FaTwitter />
          </IconInline>{' '}
          Twitter
        </A>
        ,{' '}
        <A href="https://codepen.io/schoenwaldnils" target="codepen">
          <IconInline>
            <FaCodepen />
          </IconInline>{' '}
          Codepen
        </A>
        ,{' '}
        <A href="https://github.com/schoenwaldnils" target="github">
          <IconInline>
            <GoMarkGithub />
          </IconInline>{' '}
          Github
        </A>
        ,{' '}
        <A href="https://www.linkedin.com/in/schoenwaldnils/" target="linkedin">
          <IconInline>
            <FaLinkedinIn />
          </IconInline>{' '}
          LinkedIn
        </A>
        ,{' '}
        <A href="https://www.xing.com/profile/Nils_Schoenwald" target="xing">
          <IconInline>
            <FaXing />
          </IconInline>{' '}
          Xing
        </A>
        ,{' '}
        <A href="https://www.instagram.com/schoenwaldnils" target="instagram">
          <IconInline>
            <FaInstagram />
          </IconInline>{' '}
          Instagram
        </A>
        , basically anywhere as <code>schoenwaldnils</code>
      </P>
    </Card>
  </ViewMain>
)

export default Index
