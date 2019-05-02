import React, { Component } from 'react'
import styled from 'styled-components'

import Separator from '../components/separator'
import { MyH1, MyH4, MyP } from '../components/styled-texts'

const Tags = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px 0px 0px 0px;
  float: right;
`

const Tag = styled.li`
  font-size: 18px;
  margin: 0px 10px 5px 0px;
  color: #f09d57;
  text-transform: uppercase;
  a {
    text-decoration: none;
    color: #777777;
    &:hover {
      border-bottom: 3px solid #E26741;
    }
  }
`

const ContentContainer = styled.div`
  h2 {
    font-size: 36px;
  }
`

export default class PostPage extends Component {
  render () {
    const { data } = this.props
    return (
      <div>
        <Tags>
          {data.markdownRemark.frontmatter.tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Tags>
        <MyH4>{data.markdownRemark.frontmatter.date}</MyH4>
        <MyH1>{data.markdownRemark.frontmatter.title}</MyH1>
        <ContentContainer
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
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
        tags
      }
    }
  }
`
