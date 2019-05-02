import React from 'react'
import PropTypes from 'prop-types'

import PostListing from '../components/post-listing.js'
import Separator from '../components/separator'
import { MyH1, MyH5 } from '../components/styled-texts'

const IndexPage = ({ data }) => (
  <div>
    <MyH5>Note: this page is still under construction.</MyH5>
    <MyH1>Posts</MyH1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

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
            tags
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
