import React from 'react'
import styled from 'styled-components'

import profilePic from '../../images/profile-picture.jpg'

const AvatarWrapper = styled.div`
  width: 35%;
  margin: 0 auto;
  img {
    border-radius: 50%;
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
  }
`

const Avatar = () => (
  <AvatarWrapper>
    <img src={profilePic} alt="Profile Picture" />
  </AvatarWrapper>
)

export default Avatar
