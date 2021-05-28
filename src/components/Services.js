import React, { lazy } from 'react'
import LocationsBanner from './LocationsBanner'
import Footer from './Footer'
import Button from './Button'
const Navbar = lazy(() => import('./Navbar.js'))

const Services = () => {
  return (
    <div>
      <Navbar />
      <h1>Roofing Projects Nationwide</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, unde
        laudantium. Est tempora, iste eaque, voluptates aut sed, repellendus
        tempore mollitia ipsa ipsam dolore doloremque dolor deserunt ipsum
        maiores fugiat!
      </p>
      <Button />
      <LocationsBanner />
      <Footer />
    </div>
  )
}
export default Services
