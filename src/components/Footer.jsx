import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assests/logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Vinayak Banga</h2>
        <p>Front-end Developer</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/vinayak-banga-1749501b3/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/vinayakbanga/?hl=en" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/vinayakbanga" target={"blank"}>
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