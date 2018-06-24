import React, { Component } from 'react'
import Img from 'gatsby-image'

class About extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <Img
          style={{
            width: '35%',
            margin: '0 auto',
            borderRadius: '50%',
            boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.4)',
          }}
          sizes={data.avatar.sizes}
        />
        <h1>About</h1>
        <p>
          Direct trade kombucha schlitz vexillologist kickstarter polaroid
          occupy enamel pin tattooed four loko raclette +1. Snackwave mlkshk
          kale chips, keytar iPhone hella offal neutra bicycle rights whatever.
          Vinyl tumeric copper mug craft beer. Helvetica cloud bread raw denim
          irony art party. Subway tile occupy next level YOLO authentic, synth
          celiac truffaut. Messenger bag DIY brooklyn truffaut cronut.
        </p>
      </div>
    )
  }
}

export default About

export const query = graphql`
  query AvatarQuery {
    avatar: imageSharp(id: { regex: "/profile-picture.jpg/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
