import React from 'react'
import './HomeService.css'
import arrow from '../../Assets/serviceArrow.png'
const HomeServiceCard = ({imageLink,serviceName,agencyDesc}) => {
  return (
    <div className='HomeServiceCard'>
      <div className="d-flex ourcarder  p-4 align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3">
        <img src={imageLink} alt="" />
        <p className='uppercase'>{serviceName}</p>
        </div>
        <div className="d-flex register  align-items-center gap-2">
            <img src={arrow}  alt="" />
            <p className='uppercase '>Register now</p>
        </div>
      </div>
      <div className="serviceDescription px-4">
        <p>{agencyDesc}</p>
        <h5 className='align-self-end px-4'>Know More</h5>
      </div>
    </div>
  )
}

export default HomeServiceCard
