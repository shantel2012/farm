import React from 'react'
// import Navbar from '../components/Navbar'
import Hero from '../Components/Services/Hero'
import ServicesGrid from '../Components/Services/ServicesGrid'
// import Footer from '../components/Footer'
import heroBg from '../assets/hero.jpg'

export default function Services() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero
        bg={heroBg}
        badge="Home • Services"
        titleLine1="Services"
        titleLine2=""
        subtitle="Quality agriculture, eco solutions, and organic products"
        ctaLabel=""
      />
      <ServicesGrid />
      {/* <Footer /> */}
    </>
  )
}
