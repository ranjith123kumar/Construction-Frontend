import React from 'react'
import Navbar from '../Navbar'
import ContactSection from './ContactSection'
import Footer from '../Footer'
import ContactEnquiry from './ContactEnquiry'

const ContactMain = () => {
  return (
    <div>
      <ContactEnquiry/>
        <ContactSection/>
    </div>
  )
}

export default ContactMain