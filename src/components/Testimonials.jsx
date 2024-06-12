import { useState } from "react"
import SectionHead from "./SectionHead"
import Card from "../UI/Card"
import { testimonials } from "../data"
import { ImQuotesLeft } from 'react-icons/im'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";



const Testimonials = () => {
  const [index, setIndex] = useState(0)
  const {name, quote, job, avatar} = testimonials[index]
  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <SectionHead className='testimonials-head' icon={<ImQuotesLeft />} title='Testimonials' />
        <Card className='testimonial'>
          <div className="testmonial-avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial-quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial-title">{ job }</small>
        </Card>
        <div className="testimonials-btn-container">
          <div className="testimonials-btn"><IoIosArrowDropleftCircle/></div>
          <div className="testimonials-btn"><IoIosArrowDroprightCircle/></div>
        </div>
      </div>
    </section>
    
  )
}

export default Testimonials