import React from 'react'
import { Helmet } from 'react-helmet'
import Nav from './Nav'
import './sass/all.scss'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import Typography from "../fonts/typography.js"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <Typography />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/home/gy_icon_logo.png`} />
      </Helmet>
      <Nav />
      <div>{children}</div>
    </div>
  )
}

export default TemplateWrapper
