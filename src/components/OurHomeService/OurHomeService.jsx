import React from 'react'
import './HomeService.css'
import HomeServiceCard from './HomeServiceCard'
import agencyLogo from '../../Assets/agencyLogo.png'
import projectLogo from '../../Assets/projectLogo.png'
import qualityAssuranceLogo from '../../Assets/qualityAssurance.png'
import managmentLogo from '../../Assets/managment.png'
const OurHomeService = () => {
  return (
    <div className='HomeService'>
        <div className="HomeServiceHeading d-flex align-items-center justify-content-center">
        <h3 className='uppercase'>Our Services</h3>
        </div>
        <div className="container-fluid p-3">
            <div className="row gap-3 mypadding">
                <div className="col-md-6 homeServiceContainer">
                    <HomeServiceCard imageLink={agencyLogo} serviceName="Agnecy connection" agencyDesc="We connect businesses with the most suitable agencies based on specific project requirements. Our platform provides detailed agency profiles, ratings, and reviews to help clients make informed decisions." />
                </div>
                <div className="col-md-5 homeServiceContainer">
                    <HomeServiceCard imageLink={projectLogo} serviceName="Project Management" agencyDesc="We oversee the entire project lifecycle, from initial briefings to final delivery. We set clear milestones and deadlines to ensure timely completion. " />
                </div>
            </div>
            <div className="row gap-3 mt-3 mypadding">
                <div className="col-md-6 homeServiceContainer">
                    <HomeServiceCard imageLink={qualityAssuranceLogo} serviceName="Quality Assurance " agencyDesc="We implement rigorous quality control measures to ensure high-quality deliverables. We review and assess the work of agencies to maintain standards. " />
                </div>
                <div className="col-md-5 homeServiceContainer">
                    <HomeServiceCard imageLink={managmentLogo} serviceName="Project Management" agencyDesc="We facilitate secure and efficient payment processing between clients and agencies. We handle invoicing, payment schedules, and dispute resolution.  " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurHomeService
