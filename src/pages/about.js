import React, { Component } from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Separator from '../components/Separator'
import { MyH1, MyH3, MyH4, MyH5, MyP } from '../components/StyledTexts'

const Status = styled.em`
  font-style: initial;
  font-weight: bolder;
  color: green;
`

class About extends Component {
  render () {
    const { data } = this.props
    return (
      <div>
        <Img
          style={{
            width: '35%',
            margin: '0 auto',
            borderRadius: '50%',
            boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.4)'
          }}
          sizes={data.avatar.sizes}
        />
        <MyH1>About</MyH1>
        <MyH4>
          So you want to learn more about me. Cool. I'll keep it short.
        </MyH4>
        <MyP>
          Status: <Status>AVAILABLE</Status> <br />
          (That means that you can hire me)
        </MyP>
        <MyP>
          I'm currently an undergraduate student at{' '}
          <a href='http://cmu.edu'>Carnegie Mellon University</a>, pursuing my
          Bachelor of Science degree in Statistics and Machine Learning. I'm a
          developing data scientist, with an affinity for beautiful
          visualizations and impactful applications. I strive to use data to
          improve the way people work, learn, and live.
        </MyP>
        <MyP>
          My philosophy is one of continuous improvement; not only keeping up
          with the latest technology and tools in data science, but also
          developing habits for improving my productivity and finding work-life
          balance.
        </MyP>
        <MyP>
          I'm always looking for new projects to work on and challenges to take
          on. Don't hesitate to <Link to='/'>contact me</Link> if you're
          interested in working with me or just want to say hi!
        </MyP>
        <MyP>
          And while you're here, check out <Link to='/resume'>my resume.</Link>
        </MyP>
        <Separator />
        <MyH3>Colophon</MyH3>
        <MyH5>Because this site uses things</MyH5>
        <MyP>
          This site was made with{' '}
          <a href='https://www.gatsbyjs.org'>Gatsby.js</a> and is hosted on{' '}
          <a href='http://www.github.com'>GitHub</a>. The code for my site is
          available <a>here</a>. I created my logo using{' '}
          <a href='http://www.figma.com'>Figma</a>. The font used throughout the
          site is <a href='https://fonts.google.com/specimen/Lato'>Lato</a>.
        </MyP>
        <MyP>
          I apologize if the site loads with some issues on your device. It's a
          work in progress.
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
