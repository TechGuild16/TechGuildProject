import React from 'react'
import './ChooseTech.css'
import GuildCard from './GuildCard'
const ChooseTech = () => {
    return (
        <div className='chooseTech'>
            <div className="chooseHeading d-flex align-items-center justify-content-center">
                <h3 className='uppercase desktopchoosetextr'>Reasons to Choose Tech Guild </h3>
                <h3 className='uppercase moiblechoosetext'>Reasons to Choose Tech Guild For your digital journey </h3>
            </div>
            <div className="container-fluid mt-3">
                <div className="row gap-3 mychooseer">
                    <div className="col-md-3 chooseTechDiv "><GuildCard title="Access to Diverse Expertise" desc="Tech Guild's extensive network of agencies provides access to a wide range of skills and expertise from around the world." /></div>
                    <div className="col-md-2 chooseTechDiv "><GuildCard title="Performance-Based Ranking System" desc="The platform's ranking system prioritizes agencies with proven track records, ensuring high-quality deliverables.
                    " /></div>
                    <div className="col-md-2 chooseTechDiv "><GuildCard title="Transparent Communication" desc="The platform facilitates clear communication between you and the agency, minimizing misunderstandings and delays." /></div>
                    <div className="col-md-3 chooseTechDiv "><GuildCard title="Innovative Contests and Rewards" desc="Monthly contests encourage agencies to strive for excellence and deliver innovative solutions.
                    " /></div>
                </div>
            </div>
        </div>
    )
}

export default ChooseTech
