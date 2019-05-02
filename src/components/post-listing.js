import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Separator from './separator'
import { MyH3, MyP } from './styled-texts'

const Tags = styled.ul`
  list-style: none;
  display: flex;
  margin: 0px 0px 0px 0px;
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
`

const DateText = styled.h5`
  font-size: 18px;
  margin: 0px 0px 5px 0px;
  color: #333333;
`

const PostListing = ({ post }) => (
  <article>
    <MyH3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </MyH3>
    <DateText>{post.frontmatter.date}</DateText>
    {console.log(post.frontmatter.tags)}
    <Tags>
      {post.frontmatter.tags.sort().map(tag => (
        <Tag>{tag}</Tag>
      ))}
    </Tags>
    <MyP>{post.excerpt}...
    <Link to={post.fields.slug}> (read more)</Link>
    </MyP>
    <Separator />
  </article>
)

export default PostListing
