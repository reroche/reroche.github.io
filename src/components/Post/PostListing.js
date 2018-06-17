import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const PostListing = ({ post }) => (
  <article>
    <h3>
      <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>{post.excerpt}</p>
  </article>
);

PostListing.propTypes = {
  post: PropTypes.any,
};

export default PostListing;
