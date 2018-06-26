/* eslint-disable */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import logo from '../../images/logo-with-name.png'
import '../../layouts/fonts.css'

const HeaderWrapper = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
`
const HeaderContainer = styled.div`
  height: ${({ isHome }) => (isHome ? '60vh' : '30vh')};
  background-color: #497fa4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 660px) {
    height: 50vh;
  }
`

const MainNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  z-index: 1;
  background-color: #FFFFFF;
  padding: 1em 1em;
  img {
    height: 50px;
    margin: 0;
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    font-family: 'Lato', sans-serif;
    li {
      margin: 10px 10px;
      font-size: 24px;
      a {
        text-decoration: none;
        color: #777777;
        &:hover {
          border-bottom: 3px solid #E26741;
        }
      }
    }
  }
  @media screen and (max-width: 660px) {
    img {
      height: 35px;
    }
    ul {
      li {
        font-size: 18px;
        }
      }
    }
  }
`

const InfoContainer = styled.div`
  margin: 20px 20px;
  opacity: 0.7;
  z-index: 3;
  color: white;
  background-color: #000000;
  padding: 25px 5px;
  font-family: 'Lato', sans-serif;
  font-size: 64px;
  @media screen and (max-width: 660px) {
    font-size: 36px;
  }
`

class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        this.container.animate([{ height: '30vh' }, { height: '60vh' }], {
          duration: 400,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        })
      } else if (
        location.pathname !== '/' &&
        prevProps.location.pathname !== '/'
      ) {
        // do nothing
      } else {
        this.container.animate([{ height: '60vh' }, { height: '30vh' }], {
          duration: 400,
          fill: 'forwards',
          easing: 'cubic-bezier(0.86, 0, 0.07, 1)',
          iterations: 1,
        })
      }
    }
  }

  render() {
    const { data, location } = this.props
    return (
      <HeaderWrapper>
        <MainNav>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Ricardo Elias Roche" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </MainNav>
        <HeaderContainer
          isHome={location.pathname === '/'}
          ref={container => (this.container = ReactDOM.findDOMNode(container))}
        >
          <Img
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              opacity: 0.6,
            }}
            sizes={data.background.sizes}
          />
          <InfoContainer>Data Scientist.</InfoContainer>
          <InfoContainer>Developer.</InfoContainer>
          <InfoContainer>Student.</InfoContainer>
          {/* <InfoContainer>Productivity Enthusiast.</InfoContainer> */}
          {/* <InfoContainer>Bricoleur.</InfoContainer> */}
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}

Header.propTypes = {
  data: PropTypes.any,
  location: PropTypes.string,
}

export default Header
