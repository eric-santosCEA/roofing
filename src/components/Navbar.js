import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="./photos/roofing50x50.webp" alt="logo" />
      </Link>
      <div className="links">
        <Link to="/services" className="link">
          Services
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    </div>
  )
}
export default navbar
