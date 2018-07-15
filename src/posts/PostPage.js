import React, { Component } from 'react'
import styled from 'styled-components'

import Separator from '../components/Separator'
import { MyH1, MyH4, MyP } from '../components/StyledTexts'


export default class PostPage extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <MyH4>{data.markdownRemark.frontmatter.date}</MyH4>
        <MyH1>{data.markdownRemark.frontmatter.title}</MyH1>
        <MyP
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        />
        <Separator />
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
