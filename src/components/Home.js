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
          <Link to="/services" className="button">
            See Our Best Work
          </Link>
        </div>
        <div className="right">
          <img src="./photos/roofing-main-small.webp" alt="roofing" />
        </div>
      </div>
      <Link to="/services" className="case-study">
        <div className="left">
          <h1>Case Study</h1>
          <button>View Case Study</button>
        </div>
        <div className="right">
          <img src="./photos/roofing2-main.webp" alt="roofer" width="325" />
          {/* <video
            src=".videos/roof-video.webm"
            poster="movie.jpg"
            controls
            autoPlay
          >
            This is fallback content to display for user agents that do not
            support the video tag.
          </video> */}
        </div>
      </Link>
    </>
  )
}
export default Home
