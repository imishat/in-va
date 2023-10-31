import Head from 'next/head'
import React from 'react'

interface PageHeadProps {
  title?: string
}

function PageHead({ title = 'A way of new journey' }: PageHeadProps) {
  return (
    <Head>
      <title>iNVA | {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="Portfolio for iNVA"></meta>
      <meta property="og:url" content="https://invausa.com/" />
      <meta property="og:type" content="portfolio" />
      <meta property="og:locale" content="en" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default PageHead
