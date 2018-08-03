import React, { Component } from 'react'
import styled from 'styled-components'
import { EntypoChevronDown, EntypoChevronRight } from 'react-entypo-icons'

const MyH1 = styled.h1`
  font-size: 48px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: 36px;
  }
`

const MyH2 = styled.h1`
  font-size: 36px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }
`

const MyH3 = styled.h1`
  font-size: 32px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: 24px;
  }
`

const MyH4 = styled.h1`
  font-size: 28px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`

const MyH5 = styled.h1`
  font-size: 24px;
  color: #497fa4;
  font-weight: normal;
  em {
    font-style: italic;
  }
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`

const MyP = styled.p`
  font-size: 24px;
  font-weight: normal;
  line-height: 1.6;
  a {
    text-decoration: none;
    color: #333333;
    border-bottom: 2px solid #739381;
    &:hover {
      border-bottom: 3px solid #e26741;
    }
  }
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`

const MyUl = styled.ul`
  line-height: 1.4;
  li {
    a {
      text-decoration: none;
      color: #333333;
      border-bottom: 2px solid #739381;
      &:hover {
        border-bottom: 3px solid #e26741;
      }
    }
  }
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Label = styled.a`
  color: #333333;
  font-size: 32px;
  font-weight: 300;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 2px solid #739381;
  margin: 20px 0px;
  padding-bottom: 4px;
  &:hover {
    border-bottom: 3px solid #e26741;
  }
  @media screen and (max-width: 1000px) {
    font-size: 28px;
  }
`

class CollapsibleSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle () {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }
  render () {
    const chevronStyle = {
      color: '#333333',
      width: '30px',
      height: '30px',
      margin: '0px'
    }
    return (
      <SectionWrapper>
        <LabelWrapper>
          {this.state.isOpen ? (
            <EntypoChevronDown style={chevronStyle} />
          ) : (
            <EntypoChevronRight style={chevronStyle} />
          )}
          <Label onClick={this.toggle}>{this.props.label}</Label>
        </LabelWrapper>
        {this.state.isOpen && this.props.content}
      </SectionWrapper>
    )
  }
}

export {
  CollapsibleSection,
  SectionWrapper,
  MyH1,
  MyH2,
  MyH3,
  MyH4,
  MyH5,
  MyP,
  MyUl
}
