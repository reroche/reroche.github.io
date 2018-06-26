/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
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

const Projects = () => (
  <div>
    <MyH1>Projects</MyH1>
    <MyP>
      Here is a (constantly growing) list of projects that I am working on or
      have completed. If you're interested in any of my work or want more
      information, feel free to <Link to="/contact">contact me</Link>.
    </MyP>
    <Separator />
    <MyH3>Things I'm working on</MyH3>
    <MyUl>
      <li>
        Coursera and Andrew Ng's{' '}
        <a href="http://deeplearning.ai">deeplearning.ai</a> course
      </li>
      <li>
        React Native application for <a href="http://edutrade.com">Edutrade</a>.
        The app will have weekly lessons and daily trading recommendations.
      </li>
    </MyUl>
    <Separator />
    <MyH3>Things I've done</MyH3>
  </div>
)

Projects.propTypes = {
  data: PropTypes.any,
}

export default Projects
