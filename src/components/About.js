import React from 'react'
import Navbar from './Navbar'
import LocationsBanner from './LocationsBanner'
import Footer from './Footer'
import Button from './Button'
import '../styles/about.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-hero">
        <img src="../photos/roofing-large/roofing4.webp" alt="home" />
        <h1>
          The Perfect Choice for Your Residential or Commercial Roofing Needs
        </h1>
      </div>
      <section className="content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis, ex recusandae magnam incidunt modi odit
          eveniet, dolor voluptas a obcaecati. Magnam, ex consequuntur quisquam
          sed deserunt dolorem perspiciatis exercitationem quidem sequi
          accusantium quam repudiandae, nam, cumque odit cupiditate esse?
        </p>
        <h1>Our Mission</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis, ex recusandae magnam incidunt modi odit
          eveniet, dolor voluptas a obcaecati. Magnam, ex consequuntur quisquam
          sed deserunt dolorem perspiciatis exercitationem quidem sequi
          accusantium quam repudiandae, nam, cumque odit cupiditate esse?
        </p>
        <h1>What We Offer</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis, ex recusandae magnam incidunt modi odit
          eveniet, dolor voluptas a obcaecati. Magnam, ex consequuntur quisquam
          sed deserunt dolorem perspiciatis exercitationem quidem sequi
          accusantium quam repudiandae, nam, cumque odit cupiditate esse?
        </p>
        <h1>About Our Team</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis, ex recusandae magnam incidunt modi odit
          eveniet, dolor voluptas a obcaecati. Magnam, ex consequuntur quisquam
          sed deserunt dolorem perspiciatis exercitationem quidem sequi
          accusantium quam repudiandae, nam, cumque odit cupiditate esse?
        </p>
        <img src="../photos/team-small/team9.webp" alt="team" />
        <h1>Our History</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, perferendis, ex recusandae magnam incidunt modi odit
          eveniet, dolor voluptas a obcaecati. Magnam, ex consequuntur quisquam
          sed deserunt dolorem perspiciatis exercitationem quidem sequi
          accusantium quam repudiandae, nam, cumque odit cupiditate esse?
        </p>
        <h1>Awwards And Recognition</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ea,
          magnam odit debitis porro voluptas ducimus sed. Voluptatem fugit
          deserunt sed qui quisquam nihil quibusdam exercitationem
          necessitatibus! Modi dicta autem nesciunt voluptatibus, quisquam
          eaque, alias suscipit atque, quos aut quasi?
        </p>
        <h1>Call Us Today!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          maiores.
        </p>
        <Button />
      </section>
      <LocationsBanner />
      <Footer />
    </div>
  )
}
export default About
