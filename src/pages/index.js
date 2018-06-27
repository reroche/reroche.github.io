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

import Separator from '../components/Separator'

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  margin-bottom: 30px;
  margin-top: 50px;
  padding: 0px 80px;
  @media screen and (max-width: 660px) {
    padding: 0px 10px;
  }
`

const MissionText = styled.p`
  margin: 2.5rem 0 2.5rem 0;
  font-size: 48px;
  font-style: italic;
  line-height: 1.6;
  color: #777777;
  /* &::before: '"'; */
  @media screen and (max-width: 660px) {
    font-size: 32px;
  }
`

const InfoText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 32px;
  color: #333333;
  line-height: 1.6;
  a {
    color: #333333;
    text-decoration: none;
    font-style: none;
    border-bottom: 2px solid #739381;
    &:hover {
      border-bottom: 3px solid #e26741;
    }
  }
  @media screen and (max-width: 660px) {
    font-size: 18px;
  }
`

const IndexPage = ({ data }) => (
  <div>
    <MissionText>Welcome to my corner of the internet.</MissionText>
    <Separator />
    <InfoText>
      Learn more <Link to="/about">about me.</Link>
    </InfoText>
    <InfoText>
      Check out <Link to="/resume">my resumé.</Link>
    </InfoText>
    <InfoText>
      Look at <Link to="/projects">projects I've worked on.</Link>
    </InfoText>
    <InfoText>
      Read <Link to="/blog">things I've written.</Link>
    </InfoText>
    <Separator />
    <InfoText>Send me an email, or find me on GitHub and LinkedIn:</InfoText>
    <IconWrapper>
      <a href="https://github.com/reroche/">
        <EntypoGithubWithCircle
          style={{
            fill: '#497FA4',
            width: '4em',
            height: '4em',
          }}
        />
      </a>
      <a href="https://linkedin.com/">
        <EntypoLinkedinWithCircle
          style={{
            fill: '#497FA4',
            width: '4em',
            height: '4em',
          }}
        />
      </a>
      <a href="mailto:rers97@gmail.com">
        <EntypoMailWithCircle
          style={{
            fill: '#497FA4',
            width: '4em',
            height: '4em',
          }}
        />
      </a>
    </IconWrapper>
    <Separator />
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
