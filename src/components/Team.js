import React from 'react'
import Navbar from './Navbar'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import LocationsBanner from './LocationsBanner'
import Footer from './Footer'
import '../styles/team.css'

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="banner">
        <h1>Meet The Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          quisquam repellendus quos consequuntur in, nobis recusandae iste,
          eaque unde, modi ipsum. Earum rem alias ab ex repudiandae eaque ipsam
          voluptatibus.
        </p>
      </section>
      <section className="images">
        <LazyMotion features={domAnimation}>
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team1.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team2.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team3.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team4.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team5.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team6.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team7.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team8.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team9.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team10.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team11.webp"
            alt="teammates"
            height="300"
          />
          <m.img
            whileHover={{ scale: 1.5 }}
            src="./photos/team-small/team12.webp"
            alt="teammates"
            height="300"
          />
        </LazyMotion>
      </section>
      <LocationsBanner />
      <Footer />
    </>
  )
}
export default Team
