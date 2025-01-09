import React from 'react'
import './OurWorks.css'
import arrow from '../../../Assets/serviceArrow.png'
const OurWork = () => {
  return (
    <div className='ourWorks'>
      <div className="ourWorkHeading d-flex align-items-center justify-content-between p-4">
        <h4 className='uppercase'>Our Works</h4>
        <div className="d-flex align-items-center gap-3">
        <img src={arrow} alt="" />
        <p className='uppercase'>All Works</p>
        </div>
      </div>
    </div>
  )
}

export default OurWork
