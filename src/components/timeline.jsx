import React from 'react'
import data from "../assests/data.json"

const timeline = () => {
  return (
    <div id='timeline'>
        <h1>Work Experience</h1>
        <div className="timelineBox">
            {
                data.experience.map((item,index)=>(
                    <TimelineItem heading={item.place} text={item.role} index={index} duration={item.duration} key ={item.title}/>
                ))
            }


        </div>
    </div>
  )
}


const TimelineItem =({heading,text,duration,index})=>(
    <div className={`timelineItem 
    ${index%2===0 ? "leftTimeline":"rightTimeline"}`
    }>

        <div>
        <h2>{heading}</h2>
        <p>{text}</p>
        <span>{duration}</span>
        </div>
        
    </div>
)
export default timeline