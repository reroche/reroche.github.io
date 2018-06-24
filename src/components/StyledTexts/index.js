import React from 'react'
import styled from 'styled-components'

const MyH1 = styled.h1`
  font-size: 48px;
  color: #555555;
  font-weight: normal;
`

const MyH2 = styled.h1`
  font-size: 36px;
  color: #555555;
  font-weight: normal;
`

const MyH3 = styled.h1`
  font-size: 32px;
  color: #555555;
  font-weight: normal;
`

const MyH4 = styled.h1`
  font-size: 28px;
  color: #555555;
  font-weight: normal;
`

const MyP = styled.p`
  font-size: 24px;
  font-weight: normal;
  line-height: 1.6;
  a {
    text-decoration: none;
    color: #333333;
    border-bottom: 2px solid #e26741;
    &:hover {
      border-bottom: 2px solid #739381;
    }
  }
`

export { MyH1, MyH2, MyH3, MyH4, MyP }
