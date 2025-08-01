import React from 'react'
import {motion} from "framer-motion"
import {AiFillIeCircle} from "react-icons/ai"

const Services = () => {

  const animations={
    
    whileInView:{
      x:0,y:0,opacity:1
    },
    one:{
      opacity:0,
      x:"-100%"
    },
    two:{
      opacity:0,
      y:"-100%"
    },
    three:{
      opacity:0,
      y:"-100%"
    },
    four:{
      opacity:0,
      x:"100%"
    },

  }
  return (
    <div id="services" aria-label="Services section">
      <h2>Services</h2>
      <section>
        <motion.div className='serviceBox1 ' whileInView={animations.whileInView}
        initial={animations.one}>
          <h3>2+</h3>
          <p>Years Experience</p>

        </motion.div>
        <motion.div className='serviceBox2 ' whileInView={animations.whileInView}
        initial={animations.two}>
          <AiFillIeCircle/>
          <span>Web development</span>

        </motion.div>
        <motion.div className='serviceBox3 ' whileInView={animations.whileInView}
        initial={animations.three}>
          <AiFillIeCircle/>
          <span>Frontend development </span>

        </motion.div>
        <motion.div className='serviceBox4 ' whileInView={animations.whileInView}
        initial={animations.four} transition={{delay:0.2}}
        >
          <AiFillIeCircle/>
          <span>Web development </span>

        </motion.div>
        
      </section>
      </div>
  )
}

export default Services