/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import './index.css'
import './fonts.css'

const Wrapper = styled.div`
  margin: 0 auto;
  flex: 1;
  max-width: 960px;
  padding: 0px 20px;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'The personal website of Ricardo Elias Roche',
        },
        { name: 'keywords', content: 'resume, blog, data science' },
      ]}
    />
    <Header data={data} location={location} />
    <Wrapper>{children()}</Wrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.string,
}

export default Layout

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
