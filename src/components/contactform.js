import React from 'react'
import styled from 'styled-components'

const Label = styled.h5`
  font-family: 'Lato', sans-serif;
  color: #777777;
  font-size: 20px;
  margin: 10px 0px 5px 0px;
`

const ContactInput = styled.input`
  width: 100%;
  padding: 20px 20px;
  margin: 0px 0px 10px 0px;
  border: 1px solid #777777;
  :focus {
    outline: none;
    border: 3px solid #497fa4;
  }
`

const ContactText = styled.textarea`
  width: 100%;
  padding: 20px 20px;
  margin: 0px 0px 10px 0px;
  border: 1px solid #777777;
  height: 200px;
  :focus {
    outline: none;
    border: 3px solid #497fa4;
  }
`

const SubmitButton = styled.input`
  background-color: #497fa4;
  border: 1px solid #777777;
  color: white;
  font-size: 20px;
  margin: 0px 0px 10px 0px;
  padding: 20px 20px;
  width: 100%;
  :hover {
    background-color: #739381;
  }
`

const ContactForm = () => (
  <form>
    <Label>First Name:</Label>
    <ContactInput />
    <Label>Last Name:</Label>
    <ContactInput />
    <Label>Email:</Label>
    <ContactInput />
    <Label>Message:</Label>
    <ContactText />
    <SubmitButton type="submit" />
  </form>
)

export default ContactForm

