import React from 'react'
import './ChooseTech.css'
import arrow from '../../Assets/serviceArrow.png'
const GuildCard = ({title,desc}) => {
  return (
    <div className='guildCard d-flex align-items-between justify-content-center'>
      <div className="guildDetails">
        <h5 className='uppercase'>{title}</h5>
        <p>{desc}</p>
      </div>
      <div className="d-flex align-items-center gap-3">
        <img src={arrow} alt="" />
        <p>Learn More</p>
      </div>
    </div>
  )
}

export default GuildCard
