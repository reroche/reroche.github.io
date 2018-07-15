import React from 'react'
import PropTypes from 'prop-types'

import PostListing from '../components/Post/PostListing'
import Separator from '../components/Separator'
import { MyH1, MyH5 } from '../components/StyledTexts'

const IndexPage = ({ data }) => (
  <div>
    <MyH5>
      NOTE: This page is currently under construction. I will be adding posts that I've written soon.
    </MyH5>
    <Separator />
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
