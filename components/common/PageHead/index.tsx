import Head from 'next/head'
import React from 'react'

interface PageHeadProps {
  title?: string
}

function PageHead({ title = 'iNVA' }: PageHeadProps) {
  return (
    <Head>
      <title>iNVA | {title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="Portfolio for iNVA"></meta>
      <meta property="og:url" content="https://inva.us/" />
      <meta property="og:type" content="portfolio" />
      <meta property="og:locale" content="en" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default PageHead
