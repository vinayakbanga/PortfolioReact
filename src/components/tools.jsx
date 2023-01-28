import React from 'react'
// import {AiOutlineHtml5} from "react-icons/ai"
// import{DiCss3} from "react-icons/di"
import{SiTailwindcss,SiExpress,SiMongodb,SiMysql,SiAmazonaws,SiRazorpay} from "react-icons/si"
import {FaHtml5,FaCss3Alt,FaGitAlt,FaJs,FaStripe,FaNode,FaReact,FaBootstrap} from "react-icons/fa"

const tools = () => {
  return (
    <div id="tools">
        <h2>Tools I use</h2>
        <section>
            <div className='tech'>
                {/* <AiOutlineHtml5/>
                <DiCss3/>
                <SiJavascript/> */}
                <FaHtml5/>
                <FaCss3Alt/>
                <FaBootstrap/>
                <SiTailwindcss/>
                <FaJs/>
                <FaNode/>
                <FaReact/>
                <SiExpress/>
                <h2><SiMongodb/>MongoDb</h2>
                <SiMysql/>
                <FaGitAlt/>
                <FaStripe/>
                <SiAmazonaws/>
                <SiRazorpay/>
                {/* <SiBootstrap/> */}

            </div>
        </section>
    </div>
  )
}

export default tools