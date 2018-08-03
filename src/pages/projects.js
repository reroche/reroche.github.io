/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Separator from '../components/Separator'
import {
  MyH1,
  MyH2,
  // MyH3,
  // MyH4,
  // MyH5,
  MyP,
  MyUl
} from '../components/StyledTexts'

const Projects = () => (
  <div>
    <MyH1>Projects</MyH1>
    <MyP>
      Here is a (constantly growing) list of projects that I am working on or
      have completed. If you're interested in any of my work or want more
      information, feel free to <Link to="/contact">contact me</Link>.
    </MyP>
    <Separator />
    <MyH2>Things I'm working on</MyH2>
    <MyUl>
      <li>
        React Native application for <a href="http://edutrade.com">Edutrade</a>.
        The app will have weekly lessons and daily trading recommendations.
      </li>
    </MyUl>
    <Separator />
    <MyH2>Things I've done</MyH2>
    <MyUl>
      <li>
        Coursera and Andrew Ng's{' '}
        <a href="http://deeplearning.ai">deeplearning.ai</a> specialization. My
        certificate can be found in the resume page.
      </li>
      <li>
        <a href="http://reroche.github.io/startpage/">Simple startpage</a> for my
        browser developed using React. Code available{' '}
        <a href="http://github.com/reroche/startpage/">here</a>.
      </li>
      <li>
        <a href="/docs/mnist_cnn.html">
          Convolutional Neural Network for digit recognition using the MNIST
          dataset
        </a>
      </li>
      <li>
        Poster for <i>Meeting of the Minds 2017</i>, Carnegie Mellon
        University's Undergraduate Research Symposium.{' '}
        <a href="/docs/motm_poster.pdf">
          Identifying Contact Binaries in the Catalina Real-Time Transient
          Survey
        </a>.
      </li>
      <li>
        My 'native' version of{' '}
        <a href="http://github.com/reroche/todoist-dark-linux">
          Todoist for Linux
        </a>.
      </li>
      <li>
        <a href="http://github.com/reroche/stack_dump">StackDump</a>, a React
        Native productivity app that I developed for a course at Carnegie Mellon
        University.
      </li>
      <li>
        My final project for <i>36-315 Graphics and Visualization</i> at CMU.
        The <i>R Shiny</i> web app can be found <a>here</a>.
      </li>
    </MyUl>
    <Separator />
  </div>
)

Projects.propTypes = {
  data: PropTypes.any
}

export default Projects
