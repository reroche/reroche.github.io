import styled from 'styled-components'

const MyH1 = styled.h1`
  font-size: 48px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1200px) {
    font-size: 36px;
  }
`

const MyH2 = styled.h1`
  font-size: 36px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }
`

const MyH3 = styled.h1`
  font-size: 32px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }
`

const MyH4 = styled.h1`
  font-size: 28px;
  color: #555555;
  font-weight: normal;
  @media screen and (max-width: 1200px) {
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
  @media screen and (max-width: 1200px) {
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
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`

const MyUl = styled.ul`
  line-height: 1.6;
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

export { MyH1, MyH2, MyH3, MyH4, MyH5, MyP, MyUl }
