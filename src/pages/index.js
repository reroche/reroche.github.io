/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {
  EntypoLinkedinWithCircle,
  EntypoGithubWithCircle,
  EntypoMailWithCircle,
} from 'react-entypo-icons'

const IndexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
`

const IndexPage = ({ data }) => (
  <div>
    <p>This is my mission statement.</p>
    <IndexWrapper>
      <a href="https://github.com/reroche/">
        <EntypoGithubWithCircle
          style={{
            fill: '#497FA4',
            width: '6em',
            height: '6em',
          }}
        />
      </a>
      <a href="https://linkedin.com/">
        <EntypoLinkedinWithCircle
          style={{
            fill: '#497FA4',
            width: '6em',
            height: '6em',
          }}
        />
      </a>
      <a href="mailto:rers97@gmail.com">
        <EntypoMailWithCircle
          style={{
            fill: '#497FA4',
            width: '6em',
            height: '6em',
          }}
        />
      </a>
    </IndexWrapper>
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.any,
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
