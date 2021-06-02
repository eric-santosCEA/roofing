import React from 'react'
import '../styles/button.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Button = () => {
  return (
    <>
      <Link to="/contact">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          Reach out to us
        </motion.button>
      </Link>
    </>
  )
}
export default Button
