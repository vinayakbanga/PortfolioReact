import React from 'react'

const Testimonials = () => {
  return (
    <div id='testimonial'>
        <h2>
            Testimonial
        </h2>
        <section>
            <TestimonialCard name={"Vinayak"} feedback={"Good Work"}/>
            <TestimonialCard name={"Vinayak"} feedback={"Good Work"}/>
            <TestimonialCard name={"Vinayak"} feedback={"Good Work"}/>
            {/* <TestimonialCard name={"Vinayak"} feedback={"Good Work"}/>
            <TestimonialCard name={"Vinayak"} feedback={"Good Work"}/>
             */}
        </section>

    </div>
  )
}


const TestimonialCard =({name,feedback})=>(
    <article>
        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt="User"/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>

)


export default Testimonials