import React from 'react'
import Stats from './Stats'
import Footer from './Footer'
import { Container } from '@mui/material'

const About = () => {
  return (
    <div>
      <Container>
        <p className='text-slate-800 text-center h-2'> We are committed to providing you with a seamless shopping experience, from browsing to checkout, and beyond. Join us in exploring the latest trends, discovering exciting deals, and finding your next favorite item.</p>
      </Container>
      <div className="w-fit m-auto"><Stats /></div>
      <div className="sticky-bottom">
        <Footer />
      </div>
    </div>
  )
}

export default About
