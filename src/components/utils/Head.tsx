import NextHead from 'next/head'
import { VFC } from 'react'
import { meta } from '@/constants/meta'

type Props = {
  title?: string
  description?: string
  url?: string
  siteName?: string
  noindex?: boolean
}

export const Head: VFC<Props> = (props) => {
  return (
    <NextHead>
      <title>{props.title || meta.title}</title>
      <meta
        name="description"
        content={props.description || meta.description}
      />
      {props.noindex && <meta name="robots" content="noindex" />}
      {!props.noindex && props.url && <link rel="canonical" href={props.url} />}
      <meta property="og:url" content={props.url || meta.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title || meta.title} />
      <meta
        property="og:description"
        content={props.description || meta.description}
      />
      <meta property="og:site_name" content={props.siteName || meta.siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ja_JP" />
    </NextHead>
  )
}
