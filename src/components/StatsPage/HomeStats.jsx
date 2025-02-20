import React from 'react'
import './HomeStats.css'
import arrow from '../../Assets/serviceArrow.png'
const HomeStats = () => {
    return (
        <div className="StatsMain">

            <div className='statsCover'>
                <div className="container-fluid">
                    <div className="row gap-3 mystatdiv">
                        <div className="col-md-1 statsDiv">
                            <div className="">
                                <p>Clients</p>
                                <h4>200+</h4>
                            </div>
                        </div>
                        <div className="col-md-2 statsDiv">
                            <div className="">
                                <p>Projects</p>
                                <h4>280+</h4>
                            </div>
                        </div>
                        <div className="col-md-2 statsDiv agencyhiden">
                            <div className="">
                                <p>Agencies</p>
                                <h4>500+</h4>
                            </div>
                        </div>
                        <div className="col-md-2 statsDiv happyclients foloowerwer">
                            <div className="">
                                <p>happy clients</p>
                                <h4>100%</h4>
                            </div>
                        </div>
                        <div className="col-md-2 statsDiv foloowerwer">
                            <div className="">
                                <p>Followers</p>
                                <h4>420k</h4>
                            </div>
                        </div>
                       
                        <div className="col-md-2 statsDiv contest">
                            <div className="">
                                <p>contest</p>
                                <h4>10+</h4>
                            </div>
                        </div>
                        <div className="col-md-1 statsDiv  gap-2 knowmoredeskt">
                            <img src={arrow} alt="" />
                            <p className='uppercase knowmore pt-2'>know more</p>
                        </div>
                    </div>

                
                </div>
                    <div className=" statsDiv tenyearexpe">
                            <div className="">
                                <p>Years of experience</p>
                                <h4>10+</h4>
                            </div>
                        </div>
                        <div className="col-md-1 statsDiv  gap-2 knowmoremobile">
                            <img src={arrow} alt="" />
                            <p className='uppercase knowmore pt-2'>know more</p>
                        </div>
            </div>
        </div>
    )
}

export default HomeStats
