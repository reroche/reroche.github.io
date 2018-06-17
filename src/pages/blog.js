/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import PostListing from '../components/Post/PostListing'

const IndexPage = ({ data }) => (
  <div>
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.any,
}

export default IndexPage

export const query = graphql`
  query SiteMeta {
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
