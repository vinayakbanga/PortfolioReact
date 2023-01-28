import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuOpen,setMenuOpen}) => {
  return (
    <>
    <nav>
      <NavContent/>
      
    </nav>
    <button className='navBtn' onClick={()=> setMenuOpen(!menuOpen)}>
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
    <a onClick={()=> setMenuOpen(false)} href="#home">Home</a>
    <a onClick={()=> setMenuOpen(false)} href="#work">Work</a>
    <a onClick={()=> setMenuOpen(false)} href="#timeline">TimeLine</a>
    <a onClick={()=> setMenuOpen(false)} href="#tools">Tools</a>
    {/* <a onClick={()=> setMenuOpen(false)} href="#testimonials">Testimonials</a> */}
    <a onClick={()=> setMenuOpen(false)} href="#contact">Contact</a>
  </div>
  <a href='mailto:vinayakbanga22@gmail.com'>
    <button>Email</button>
  </a>
  
  </>
)

export default Header
//1120