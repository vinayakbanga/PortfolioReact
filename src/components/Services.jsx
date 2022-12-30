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
      x:"-100%"
    },
    three:{
      opacity:0,
      x:"-100%"
    },
    four:{
      opacity:0,
      x:"100%"
    },

  }
  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className='servicebox1 ' whileInView={animations.whileInView}
        initial={animations.one}>
          <h3>5+</h3>
          <p>Years Experience</p>

        </motion.div>
        <motion.div className='servicebox2 ' whileInView={animations.whileInView}
        initial={animations.two}>
          <AiFillIeCircle/>
          <span>Web development</span>

        </motion.div>
        <motion.div className='servicebox3 ' whileInView={animations.whileInView}
        initial={animations.three}>
          <AiFillIeCircle/>
          <span>Web development </span>

        </motion.div>
        <motion.div className='servicebox4 ' whileInView={animations.whileInView}
        initial={animations.four}>
          <AiFillIeCircle/>
          <span>Web development </span>

        </motion.div>
        
      </section>
      </div>
  )
}

export default Services