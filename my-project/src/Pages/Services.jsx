import React from 'react'
// import Navbar from '../components/Navbar'
import Hero from '../Components/Services/Hero'
import ServicesGrid from '../Components/Services/ServicesGrid'
// import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero bg="/about.jpg" badge="Services" titleLine1="Services" titleLine2="" subtitle="" ctaLabel="" />
      <ServicesGrid />
      {/* <Footer /> */}
    </>
  )
}
