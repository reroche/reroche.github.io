/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Separator from '../components/separator'
import {
  MyH1,
  MyH2,
  // MyH3,
  // MyH4,
  // MyH5,
  MyP,
  MyUl
} from '../components/styled-texts'

const Projects = () => (
  <div>
    <MyH1>Projects</MyH1>
    <MyP>
      Here is a (constantly growing) list of projects that I am working on or
      have completed.
    </MyP>
    {/*<Separator />
    <MyH2>Things I'm working on</MyH2>
    <MyUl>
      <li>
        React Native application for <a href="http://edutrade.com">Edutrade</a>.
        The app will have weekly lessons and daily trading recommendations.
      </li>
    </MyUl>
    <Separator /> */}
    <MyH2>Things I've Done</MyH2>
    <MyUl>
      <li>
        <a href="/docs/survey-viewing-habits-poster.pdf">
          <i>"What Do CMU Students Watch and How Do They Watch It?"</i>
        </a>
        -- a poster created for final project of 36-303 Surveys, Sampling, and
        Society.
      </li>
      <li>
        <a href="http://reroche.github.io/github-instructions">
          <i>Introduction to GitHub for CMU Students</i>
        </a>
        , a website created for my final project of 76-270 Writing for the
        Professions.{' '}
      </li>
      <li>
        Coursera and Andrew Ng's{' '}
        <a href="http://deeplearning.ai">deeplearning.ai</a> specialization. My
        certificate can be found{' '}
        <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/8QRL2F2FAUHY">
          here
        </a>
        .
      </li>
      <li>
        <a href="http://reroche.github.io/startpage/">Simple startpage</a> for
        my browser developed using React. Code available{' '}
        <a href="http://github.com/reroche/startpage/">here</a>.
      </li>
      <li>
        <a href="/docs/mnist_cnn.html">
          <i>
            Convolutional Neural Network for Digit Recognition using the MNIST
            Dataset
          </i>
        </a>
      </li>
      <li>
        Poster for <i>Meeting of the Minds 2017</i>, Carnegie Mellon
        University's Undergraduate Research Symposium.{' '}
        <a href="/docs/motm_poster.pdf">
          <i>
            Identifying Contact Binaries in the Catalina Real-Time Transient
            Survey
          </i>
        </a>
        .
      </li>
      <li>
        My 'native' version of{' '}
        <a href="http://github.com/reroche/todoist-dark-linux">
          Todoist for Linux
        </a>
        .
      </li>
      <li>
        <a href="http://github.com/reroche/stack_dump">StackDump</a>, a React
        Native productivity app that I developed for a course at Carnegie Mellon
        University.
      </li>
      <li>
        My final project for <i>36-315 Graphics and Visualization</i> at CMU.
        The <i>R Shiny</i> web app can be found{' '}
        <a href="https://reroche.shinyapps.io/final_project/">here</a>.
      </li>
    </MyUl>
    <Separator />
  </div>
)

Projects.propTypes = {
  data: PropTypes.any
}

export default Projects
