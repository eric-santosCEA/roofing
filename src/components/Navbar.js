import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <div>
        <Link to="/" className="logo">
          <img src="./photos/roofing50x50.webp" alt="logo" />
        </Link>

        <div className={active ? 'open' : 'links'}>
          <Link to="/services" className="link">
            <h1>Services</h1>
          </Link>
          <Link to="/about" className="link">
            <h1>About</h1>
          </Link>
          <Link to="/contact" className="link">
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
      <div className="icon">
        <AiOutlineMenu size="3rem" onClick={handleClick} />
      </div>
    </>
  )
}
export default Navbar
