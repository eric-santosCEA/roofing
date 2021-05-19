import React from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="left">
          <h1>Cea Roofing</h1>
          <p>We are the Clean Energy America roofing division.</p>
          <button>See Our Best Work</button>
        </div>
        <div className="right">
          <img src="./photos/roofing-main-small.webp" alt="roofing" />
        </div>
      </div>
      <div className="case-study">
        <div className="left">
          <h1>Case Study</h1>
          <button>View Case Study</button>
          <h4>Services</h4>
          <Link to="/service-one" className="link">
            Service One
          </Link>
          <Link to="/service-two" className="link">
            Service Two
          </Link>
          <Link to="/service-three" className="link">
            Service Three
          </Link>
        </div>
        <div className="right"></div>
      </div>
    </>
  )
}
export default Home
