import React from 'react'
import '../styles/footer.css'
import { motion } from 'framer-motion'
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedin,
} from 'react-icons/ti'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="icons">
          <motion.a
            href="https://www.facebook.com/cleanenergyamerica/"
            alt="facebook"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TiSocialFacebookCircular size="2rem" className="social-link" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/cleanenergyamerica/"
            alt="Instagram"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TiSocialInstagram size="2rem" className="social-link" />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/cleanenergyamerica/"
            alt="Linkedin"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TiSocialLinkedin size="2rem" className="social-link" />
          </motion.a>
        </div>
        <h4>&#169; Copyright 2021</h4>
      </footer>
    </>
  )
}
export default Footer
