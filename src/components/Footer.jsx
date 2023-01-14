import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
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
          <a href="" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="" target={"blank"}>
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