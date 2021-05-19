import React from 'react'
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Cea Roofing</h1>
          <p>We are the Clean Energy America roofing division</p>
          <button>See Our Best Work</button>
        </div>
        <div className="right">
          <img src="./photos/roofing-main-small.webp" alt="roofing" />
        </div>
      </div>
    </>
  )
}
export default Home
