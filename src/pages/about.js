import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Separator from '../components/Separator'
import {
  MyH1,
  MyH2,
  MyH3,
  MyH4,
  MyH5,
  MyP,
  MyUl,
} from '../components/StyledTexts'

const ImgCaption = styled.h5`
  margin: 20px 0;
  text-align: center;
  font-style: italic;
  font-weight: normal;
  font-size: 28px;
  color: #777777;
`
const Status = styled.em`
  font-style: initial;
  font-weight: bolder;
  color: green;
`

class About extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Img
          style={{
            width: '35%',
            margin: '0 auto',
            borderRadius: '50%',
            boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.4)',
          }}
          sizes={data.avatar.sizes}
        />
        {/* <ImgCaption>This is a picture of me looking serious.</ImgCaption> */}
        <MyH1>About</MyH1>
        <MyH4>
          So you want to learn more about me. Cool. I'll keep it short.
        </MyH4>
        <MyP>
          Status: <Status>AVAILABLE</Status> <br />
          (This means that you can hire me)
        </MyP>
        <MyP>
          I'm currently an undergraduate student at{' '}
          <a href="http://cmu.edu">Carnegie Mellon University</a>, pursuing my
          Bachelor of Science degree in Statistics and Machine Learning. I'm a
          developing data scientist, with an affinity for beautiful
          visualizations and impactful applications. I strive to use data to
          improve the way people work, learn, and live. My goal, as an aspiring
          data scientist, is to become a Tim Ferris/Nate Silver crossover.
        </MyP>
        <MyP>
          My philosophy is one of continuous improvement; not only keeping up
          with the latest technology and tools in data science, but also
          developing habits for improving my productivity and finding work-life
          balance.
        </MyP>
        <MyP>
          I'm always looking for new projects to work on and challenges to take
          on. Don't hesitate to <Link to="/">contact me</Link> if you're
          interested in working with me or just want to say hi!
        </MyP>
        <MyP>
          And while you're here, check out <Link to="/resume">my resume.</Link>
        </MyP>
        <Separator />
      </div>
    )
  }
}

export default About

export const query = graphql`
  query AvatarQuery {
    avatar: imageSharp(id: { regex: "/profile-picture.jpg/" }) {
      sizes(maxWidth: 400) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
