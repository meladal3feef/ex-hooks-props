import React from 'react'
import image from "../logo.jpg"
const Navigation = () => {
  return (
    <div className='nav'>
      <img className='logo' src={image} alt="Logo" />
      <div className='nav-menu'>
        <nav>Home</nav>
        <nav>About</nav>
        <nav>Service</nav>
        <nav>Projects</nav>
        <nav>Contact</nav>
      </div>
    </div>
  )
}

export default Navigation
