import React from 'react'

const Header = () => {
  return (
    <>
    <nav>
      <NavContent/>
    </nav>
      </>
  )
};

const NavContent =() =>(
  <>
  <h2>Vinayak Banga</h2>
  <div>
    <a href="#home">Home</a>
    <a href="#work">Work</a>
    <a href="#timeline">TimeLine</a>
    <a href="#services">Services</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#contact">Contact</a>
  </div>
  <a href='mailto:vinayakbanga22@gmail.com'>
    <button>Email</button>
  </a>
  
  </>
)

export default Header