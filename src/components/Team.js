import React from 'react'
import Navbar from './Navbar'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import '../styles/team.css'

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="banner">
        <h1>Meet The Team</h1>
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
    </>
  )
}
export default Team
