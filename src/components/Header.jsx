import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <nav>
      <NavContent/>
      
    </nav>
    <button className='navBtn' aria-label="Open navigation menu" onClick={()=> setMenuOpen(!menuOpen)}>
        <AiOutlineMenu/>
      </button>
      </>
  )
};
export const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${ menuOpen ? "navPhoneComes" :""} `}>
        <NavContent setMenuOpen={setMenuOpen} />
    </div>
  )
}

export const NavContent =({setMenuOpen}) =>(
  <>
  <h2>Vinayak Banga</h2>
  <div>
    <a onClick={()=> setMenuOpen(false)} href="#home" aria-label="Go to Home section">Home</a>
    <a onClick={()=> setMenuOpen(false)} href="#work" aria-label="Go to Work section">Work</a>
    <a onClick={()=> setMenuOpen(false)} href="#timeline" aria-label="Go to Timeline section">TimeLine</a>
    <a onClick={()=> setMenuOpen(false)} href="#tools" aria-label="Go to Tools section">Tools</a>
    {/* <a onClick={()=> setMenuOpen(false)} href="#testimonials">Testimonials</a> */}
    <a onClick={()=> setMenuOpen(false)} href="#contact" aria-label="Go to Contact section">Contact</a>
  </div>
  <a href='mailto:vinayakbanga22@gmail.com' aria-label="Send email to Vinayak Banga">
    <button>Email</button>
  </a>
  
  </>
)

export default Header
//1120