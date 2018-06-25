import React, { Component } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Separator from '../components/Separator'
import { MyH1, MyH2, MyP, MyH4 } from '../components/StyledTexts'

const ImgCaption = styled.h5`
  margin: 20px 0;
  text-align: center;
  font-style: italic;
  font-weight: normal;
  font-size: 28px;
  color: #777777;
`
const Status = styled.em`
  font-style: initial;
  font-weight: bolder;
  color: green;
`

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
        {/* <ImgCaption>This is a picture of me looking serious.</ImgCaption> */}
        <MyH1>About</MyH1>
        <MyH4>
          So you want to learn more about me. Cool. I'll keep it short.
        </MyH4>
        <MyP>
          Status: <Status>AVAILABLE</Status> <br />
          (This means that you can hire me)
        </MyP>
        <MyP>
          I'm currently and undergraduate student at{' '}
          <a href="http://cmu.edu">Carnegie Mellon University</a>, pursuing my
          Bachelor of Science degree in Statistics and Machine Learning. I'm a
          developing data scientist, with an affinity for beautiful
          visualizations and impactful applications. I strive to use data to
          improve the way people work, learn, and live.
        </MyP>
        <MyP>My philosophy is one of continuo</MyP>
        <MyH2>Work Experience</MyH2>
        <MyP>
          raw denim hoodie art party farm-to-table YOLO Cosby sweater four loko
          flannel keffiyeh bicycle rights beard semiotics before they sold out
          banjo scenester 3 wolf moon Brooklyn occupy meggings chillwave small
          batch Blue Bottle mumblecore Odd Future organic skateboard vegan
          brunch Schlitz literally irony XOXO Kickstarter Portland next level
          lo-fi paleo tousled pickled jean shorts fingerstache wolf aesthetic
          fanny pack Carles 90's leggings narwhal selfies Williamsburg trust
          fund mustache crucifix selvage kogi Etsy polaroid salvia normcore
          asymmetrical bitters whatever direct trade mlkshk viral PBR vinyl
          tattooed street art meh cardigan keytar cray wayfarers fixie PBR&B
          cornhole Pitchfork put a bird on it Neutra yr quinoa gluten-free food
          locavore swag 8-bit dreamcatcher master cleanse messenger bag plaid
          fashion axe Marfa mixtape seitan
        </MyP>
        <Separator />
        <MyH2>Education</MyH2>
        <MyP>
          gluten-free heirloom bicycle rights tousled wolf sustainable selfies
          shabby chic Tumblr American Apparel 90's DIY Brooklyn ethical small
          batch butcher chia kogi Thundercats iPhone disrupt selvage meh
          whatever pour-over narwhal fanny pack artisan authentic blog Echo Park
          mlkshk skateboard fashion axe actually twee PBR&B mumblecore yr raw
          denim next level beard semiotics Cosby sweater Godard Pinterest umami
          dreamcatcher 3 wolf moon forage Portland literally kitsch swag put a
          bird on it master cleanse gastropub pickled cray Shoreditch Helvetica
          four loko sriracha paleo hoodie single-origin coffee post-ironic deep
          v scenester direct trade PBR ennui brunch letterpress readymade trust
          fund chillwave vinyl Neutra mixtape banjo keffiyeh McSweeney's photo
          messenger bag irony fingerstache YOLO Tonx organic freegan street art
          cardigan fap pop-up stumptown aesthetic vegan cliche gentrify squid
          Vice distillery kale chips hella mustache bitters Intelligentsia Blue
          Bottle Marfa quinoa slow-carb cornhole wayfarers craft beer High Life
          flexitarian
        </MyP>
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
