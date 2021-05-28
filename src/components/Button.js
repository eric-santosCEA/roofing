import React from 'react'
import '../styles/button.css'
import { motion } from 'framer-motion'

const Button = () => {
  return (
    <>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Reach out to us
      </motion.button>
    </>
  )
}
export default Button
