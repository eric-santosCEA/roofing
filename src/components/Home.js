import React, { lazy } from 'react'
import '../styles/home.css'
import { GoLocation } from 'react-icons/go'
import { RiFilePaperLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import Footer from './Footer'
import LocationsBanner from './LocationsBanner'
import Button from './Button'

const Navbar = lazy(() => import('./Navbar.js'))

const Home = () => {
  return (
    <>
      <Navbar />
      <motion.div
        className="report"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <h4>Get Your Free Roof Inspection</h4>
      </motion.div>
      <div className="hero">
        <h1>CEA Roofing</h1>
        <h4>
          The Perfect Choice for Your Residential or Commercial Roofing Needs
        </h4>
        <div className="certifications">
          <motion.img
            src="./photos/certifications/gaf.png"
            alt="gaf certification"
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src="./photos/certifications/SystemPlus.png"
            alt="System Plus certification"
            animate={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      <section className="banner">
        <motion.div
          className="location"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GoLocation size="2rem" />
          <h1>Our Locations</h1>
          <h4>Roofing services in your area</h4>
        </motion.div>
        <motion.div
          className="inspection"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RiFilePaperLine size="2rem" />
          <h1>Free Tarp Installations</h1>
          <h4>Schedule free</h4>
        </motion.div>
      </section>
      <section className="about">
        <h1>About Us</h1>
        <p>
          CEA Contractors LLC specializes in assisting property owners with
          their roofing and handyman needs. By providing genuine and quality
          work, as well as fast, reliable and trustworthy service. We strive to
          provide excellent work and the best customer service available. We
          make our customers our top priority.
        </p>
        <Button />
      </section>
      <section className="systems">
        <h4>Commercial</h4>
        <h1>Roof Systems</h1>
        <div className="types">
          <h4>Type 1</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
          <h4>Type 2</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
          <h4>Type 3</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
          <h4>Type 4</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
        </div>
      </section>
      <section className="services">
        <h4>Commercial</h4>
        <h1>Roof Systems</h1>
        <div className="service">
          <h4>Service 1</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
        </div>
        <div className="service">
          <h4>Service 2</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
        </div>
        <div className="service">
          <h4>Service 3</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
        </div>
        <div className="service">
          <h4>Service 4</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            soluta porro quibusdam quam excepturi corporis ea, repudiandae eos
            culpa et laudantium dolorem. Totam quo voluptatem consectetur eius
            atque ullam dignissimos laborum dolorem, voluptatum, odio sit
            possimus aut ad deleniti! Delectus.
          </p>
        </div>
      </section>
      <LocationsBanner />
      <Footer />
    </>
  )
}
export default Home
