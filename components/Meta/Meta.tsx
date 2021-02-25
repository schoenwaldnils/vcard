import Head from 'next/head'
import { FC } from 'react'

import { Favicons } from '../Favicons'

type Props = {
  url?: string
  type?: string
  title?: string
  description?: string
  image?: string
}

export const Meta: FC<Props> = ({
  url = 'https://schoen.world',
  type = 'website',
  title = 'Nils Schönwald',
  description = 'Frontend-Developer',
  image = 'https://schoen.world/static/assets/images/avatar.png',
}) => {
  return (
    <Head>
      <meta content="width=device-width,initial-scale=1" name="viewport" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Schönwald" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@schoenwaldnils" />
      <meta name="twitter:creator" content="@schoenwaldnils" />

      <Favicons />
    </Head>
  )
}
