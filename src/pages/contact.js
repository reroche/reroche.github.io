import React from 'react'

import ContactForm from '../components/ContactForm'
import Separator from '../components/Separator'

const Contact = () => (
  <div>
    <p>Fill out the form to leave me a message and I will get back to you as soon as possible.</p>
    <Separator />
    <ContactForm />
    <Separator />
  </div>
)

export default Contact
