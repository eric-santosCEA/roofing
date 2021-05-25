import React, { lazy } from 'react'
const Navbar = lazy(() => import('./Navbar.js'))

const Services = () => {
  return (
    <div>
      <Navbar />
      <h1>Services</h1>
    </div>
  )
}
export default Services
