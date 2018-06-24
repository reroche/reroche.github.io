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
`

const MissionText = styled.p`
  margin: 4rem 0 3rem 0;
  font-size: 48px;
  font-style: italic;
  color: #777777;
  &::before: '"';
`

const InfoText = styled.p`
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 32px;
  color: #333333;
  a {
    color: #333333;
    text-decoration: none;
    font-style: none;
    border-bottom: 2px solid #e26741;
    &:hover {
      border-bottom: 3px solid #739381;
    }
  }
`

const IndexPage = ({ data }) => (
  <div>
    <MissionText>This is my mission statement.</MissionText>
    <Separator />
    <InfoText>
      Learn more <Link to="/about">about me.</Link>
    </InfoText>
    <InfoText>
      Look at <Link to="/projects">projects I've worked on.</Link>
    </InfoText>
    <InfoText>
      Read <Link to="/blog">things I've written.</Link>
    </InfoText>
    <Separator />
    <InfoText>Email me, or find me on Github and LinkedIn:</InfoText>
    <IconWrapper>
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
    </IconWrapper>
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
