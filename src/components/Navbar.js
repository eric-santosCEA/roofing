import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { motion } from 'framer-motion'
import { AiOutlineMenu } from 'react-icons/ai'

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
}

const Navbar = () => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <>
      <Link to="/">
        <motion.img
          src="./photos/roofing-small/logo50x50.webp"
          alt="logo"
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Link>

      <motion.div
        className={active ? 'open' : 'links'}
        animate={active ? 'open' : 'closed'}
        variants={variants}
      >
        <Link to="/about" className="link">
          <h1>About</h1>
        </Link>
        <Link to="/our-work" className="link">
          <h1>Our Work</h1>
        </Link>
        <Link to="/contact" className="link">
          <h1>Contact</h1>
        </Link>

        <Link to="/team" className="link">
          <h1>Meet The Team</h1>
        </Link>

        <Link to="/about" className="link">
          <h1>Careers</h1>
        </Link>
      </motion.div>

      <div className="icon">
        <AiOutlineMenu size="3rem" onClick={handleClick} />
      </div>
    </>
  )
}
export default Navbar
