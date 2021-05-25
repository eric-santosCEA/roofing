import React, { lazy } from 'react'
import '../styles/home.css'
const Navbar = lazy(() => import('./Navbar.js'))

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Home</h1>
    </>
  )
}
export default Home
