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
        {/* <MyH4>
          So you want to learn more about me. Cool. I'll keep it short.
        </MyH4> */}
        <MyH4>
          Status: <Status>AVAILABLE</Status> <br />
          {/* (That means that you can hire me) */}
        </MyH4>

        <MyP>We often hear that data is the new oil, that data is the new currency, that data is the new bacon. I think that these claims miss the point – data is about people. My passion is turning data into insight; enabling people to interpret the numbers and helping them make the best possible decisions. </MyP>

        <MyP>I am a senior majoring in Statistics and Machine Learning with training and experience across the full stack of data science skills – from constructing relational databases to developing interactive web-based dashboards. Throughout my undergraduate career, I’ve had the pleasure of working on some truly intellectually challenging problems, developing critical thinking skills and a greater awareness of the value of using data to solve problems. And the internships and job opportunities I have had over the past few summers have allowed me to polish my abilities while working on real-world applications.</MyP>

        <MyP>Data Science is a growing and ever-changing field. With new technologies and frameworks constantly popping up, there is a surplus of exciting tools for data scientists to use. I am dedicated to staying at the bleeding edge of the field by learning to work with these tools. In the past year, I completed a Coursera specialization in Deep Learning and worked on personal projects using PyTorch for implementing neural network architectures. Similarly, I have attained a working knowledge of Docker and git, and experience working on Paperspace (a cloud platform with GPUs for ML pipelines). Data is only useful when the right tools are used to convert it to insight, and I am devoted to developing the skills to make this a reality.</MyP>

        <MyP>I'm a Linux User, a Vim advocate, and command line aficionado.</MyP>


        {/* <MyP>
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
        </MyP */}
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
