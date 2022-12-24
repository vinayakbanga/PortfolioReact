import React from 'react'
import {motion} from "framer-motion"
import {BsArrowUpRight,BsChevronDown} from "react-icons/bs"
import Typewritter from "typewriter-effect"
import me from "../assests/logo.png"

const Home = () => {

    const animation ={
        h1:{
            initial :{
                x:"-100%",
                opacity:0

            },
            whileInView:{
                x:0,opacity:1
            }

        },
        button:{
            initial :{
                y:"-100%",
                opacity:0

            },
            whileInView:{
                y:0,opacity:1
            }

        },

    }
  return (
    <div id="home">
        <section>
            <div>
                <motion.h1 {...animation.h1} >
                    Hi, I am <br/>
                    Vinayak Banga
                </motion.h1>
                <Typewritter options={{
                    strings:["A Student","A Frontend developer "],
                    autoStart:true,
                    loop:true,
                    wrapperClassName:"typewriterpara",
                    cursor:"",
                }}/>
                <div>
                    <a href='mailto:vinayakbanga22@gmail.com'>
                       Hire Me
                    </a>
                    <a href='#work'>
                       Work
                    </a>
                    <a href='#projects'>
                       Projects <BsArrowUpRight/>
                    </a>
                </div>

                <article>
                    <p>
                        +<span>100</span>
                    </p>
                    <span> Clients Worldwide</span>
                </article>

                <aside>
                <article>
                    <p>
                        +<span>500</span>
                    </p>
                    <span> Projects Made</span>
                </article>
                <article data-special>
                    <p>
                        Contact
                    </p>
                    <span> vinayakbanga22@gmail.com</span>
                </article>
                </aside>


            </div>

        </section>
        <section>
            <img src ={me} alt="Vinayak"/>
        </section>
        <BsChevronDown/>
    </div>
  )
}

export default Home