import React, { useEffect, useState } from 'react'
import './Testimonial.css'
import arrow from '../../../Assets/serviceArrow.png'
import TestimonialCard from './TestimonialCards/TestimonialCard'
import person1 from '../../../Assets/person1.png'
import person2 from '../../../Assets/person2.png'
import person3 from '../../../Assets/person3.png'
import person4 from '../../../Assets/person4.png'
import { useLocation } from 'react-router-dom'
const Testimonial = () => {
      const location = useLocation().pathname;
      const [className, setClassName] = useState('');
      useEffect(() => {
        if (location === "/") {
          setClassName('hometestimonialadjustment');
        } else {
          setClassName(''); 
        }
      }, [location]); 
      
    return (
        <div className={className ?   `${className}` : " testimonialMaindiv forservicetestidiv"}>
            <div className="OurServiceHeading testimonialheadinger d-flex align-items-center justify-content-between">
                <h1 className='uppercase'>Testimonails</h1>
                <div className="d-flex testimonialdiv gap-2 align-items-center">
                    <img src={arrow} alt="" />
                    <h4 className='uppercase'>All testimonials</h4>
                </div>
            </div>
            <div className="container-fluid mycontainer">
                <div className="row gap-2" >
                    <div className="col-md-2 firstTestimonalbox "><TestimonialCard heading="NexGen turned our business around!" desc="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!" personName='Sarah Thompson' personDesignation='CEO of Bluetooth' personImage={person1} /></div>
                    <div className="col-md-2 firstTestimonalbox "><TestimonialCard heading="NexGen turned our business around!" desc="Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!" personName='Wade Warren' personDesignation='Art Director' personImage={person2}  /></div>
                    <div className="col-md-2 firstTestimonalbox  "><TestimonialCard heading='Working with NexGen was a pleasure' desc="Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive."personName="Lisa Williams" personDesignation="CEO Of HealthTech" personImage={person3} /></div>
                    <div className="col-md-2  firstTestimonalbox "><TestimonialCard heading="NexGen's web design team brought our vision to life" desc="Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement and customer service." personName="Jennifer Lee" personDesignation="COO of Foodie Haven" personImage={person4} /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
