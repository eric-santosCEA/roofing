import React, { lazy } from 'react'
import '../styles/home.css'
import { GoLocation } from 'react-icons/go'
import { RiFilePaperLine } from 'react-icons/ri'
import Footer from './Footer'
const Navbar = lazy(() => import('./Navbar.js'))

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="report">
        <h4>Tap to report a leak or request service</h4>
      </div>
      <div className="hero">
        <h1>CEA Roofing</h1>
        <h4>
          The Perfect Choice for Your Residential or Commercial Roofing Needs
        </h4>
      </div>
      <section className="banner">
        <div className="location">
          <GoLocation size="2rem" />
          <h1>Our Location</h1>
          <h4>Roofing services in your area</h4>
        </div>
        <div className="inspection">
          <RiFilePaperLine size="2rem" />
          <h1>Free Tarp Installations</h1>
          <h4>Schedule free</h4>
        </div>
      </section>
      <section className="about">
        <h1>About Us</h1>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
          asperiores, incidunt eveniet harum minima vitae porro eaque. Iusto,
          eaque dolor possimus pariatur ex error excepturi consectetur, totam
          earum adipisci labore.
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          et, omnis enim eveniet quidem tempore dolore doloremque error sed,
          vitae esse expedita sequi qui accusamus aspernatur sunt? Vero
          doloribus quia numquam atque, aliquam iste consequuntur, ipsum quos a
          molestiae enim?
        </p>
        <button>Reach out to us</button>
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
      <section className="contact">
        <h1>Contact Us</h1>
        <address>
          <h2>EL Paso, TX</h2>
          <h4>
            6600 N Mesa St STE 502,
            <br /> El Paso, TX 79912
          </h4>
          <h4>Phone: (915) 201-2631</h4>
          <a href="mailto:jim@rock.com">
            <h4>support@joincea.com</h4>
          </a>
          <a href="tel:+13115552368">(311) 555-2368</a>
        </address>
        <address>
          <h2>Houston, TX</h2>
          <h4>
            13105 Northwest Freeway,
            <br /> STE 1260 Houston, TX 77040
          </h4>
          <h4>Phone: (915) 201-2631</h4>
          <a href="mailto:jim@rock.com">
            <h4>support@joincea.com</h4>
          </a>
          <a href="tel:+13115552368">(311) 555-2368</a>
        </address>
      </section>
      <Footer />
    </>
  )
}
export default Home
