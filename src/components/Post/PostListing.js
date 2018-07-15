import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Separator from '../Separator';
import { MyH3, MyP } from '../StyledTexts';

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
    <MyP>{post.excerpt}</MyP>
    <Separator />
  </article>
);

export default PostListing;
