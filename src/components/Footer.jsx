import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Vinayak Banga - Founder profile"
        />

        <h2>Vinayak Banga</h2>
        <p>Front-end Developer</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/vinayak-banga-1749501b3/" target={"blank"} aria-label="LinkedIn profile">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/vinayakbanga/?hl=en" target={"blank"} aria-label="Instagram profile">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/vinayakbanga" target={"blank"} aria-label="GitHub profile">
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;