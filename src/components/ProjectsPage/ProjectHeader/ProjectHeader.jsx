import React from 'react';
import './ProjectHeader.css';
import halfcircle from '../../../Assets/haflcircle.png';
import cards from '../../../Assets/Card.png';

const ProjectHeader = () => {
    return (
        <>
            <div className="container-fluid mt-2 mt-md-5 project-header" style={{ minHeight: "50vh", borderRadius: "10px", backgroundColor: "var(--navbarColor)" }}>
                <div className="row">
                    <div className="col-12 col-md-8 pt-3 md-pt-5 mt-2 md-mt-5">
                        <div className="d-flex flex-column flex-md-row justify-content-start align-items-center ms-0 ms-md-5 gap-4">
                            <div className="order-0 order-md-1 mt-md-5">
                                <h1 style={{ color: "var(--textColor)" }}>EMPOWERING YOUR</h1>
                                <h1 style={{ color: "var(--textColor)" }}>DGITAL VISION</h1>
                            </div>
                            <img className="img-fluid mb-3 mb-md-1 order-0 order-md-2" src={halfcircle} alt="" />
                        </div>
                        <p className="d-flex align-items-center ms-4 w-75 ms-md-5" style={{ color: 'var( --paraText)', textAlign: 'justify' }}>At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <img className="w-100 h-100 p-3" style={{ width: "60vw" }} src={cards} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectHeader
