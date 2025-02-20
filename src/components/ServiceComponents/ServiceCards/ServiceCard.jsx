import React from 'react'
import arrow from '../../../Assets/ServiceArrow.png'
const ServiceCard = ({imageLink,serviceName ,description,price}) => {
  return (
    <div className='serviceCard'>
      <div className="serviceCardHeading">
        <div className="d-flex serviceHeading  align-items-center justify-content-between">
          <div className="d-flex priceflexer  align-items-center gap-1">
            <div className="d-flex  align-items-center gap-4">
            <img src={imageLink} className='cardimagefix' alt="" />
            <h3 className='uppercase' id='servicenamerabout'>{serviceName}</h3>
            </div>
            <h3 className='priceflexprice'>{price}</h3>
          </div>
          <div className="serviceCTA d-flex align-items-center gap-2">
              <img src={arrow}  alt="" />
              <h4 className='uppercase'>Book a call</h4>
          </div>
        </div>
        <div className="ServiceCarddescirption">
          <p>{description}</p>
          <h3 className='text-end priceignore'>{price}</h3>
          <button className='respbuttonprice'>View All Project</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
