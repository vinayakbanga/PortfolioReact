import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from "../assests/data.json"
const Work = () => {
  return (
    <div id='work'>
        <h1>WORK</h1>
        <section>
            <article>
                <Carousel
                showArrows={true}
                showIndicators={true}
                showStatus={false}
                showThumbs={true}
                interval={2000}
                infiniteLoop={true}
                autoPlay={true}
                // centerMode={true}
                className="carousel"
                >


                  
                  {
                    data.projects.map(i=>(
                      <div key={i.title} className="workItem">
                        <img src={i.imgSrc} alt={i.title}/>
                        <aside>
                          <h3>
                            {i.title}
                          </h3>
                          <p>{i.description}</p>
                          <a target={"blank"} href={i.url}>View Demo</a>
                        </aside>
                      </div>
                    ))
                  }
                </Carousel>
            </article>
        </section>
    </div>
  )
}

export default Work