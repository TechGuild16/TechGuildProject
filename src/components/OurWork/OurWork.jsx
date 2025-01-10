import React from 'react'
import './OurWorks.css'
import arrow from '../../Assets/serviceArrow.png'
import zenith from '../../Assets/Zenith.png'
import aura from '../../Assets/aura.png'
import workBackground from '../../Assets/workBackground.png'
import workBackground2 from '../../Assets/workBackground2.png'
import person1 from '../../Assets/person5.png'
import person2 from '../../Assets/person7.png'
import person3 from '../../Assets/person8.png'
import person4 from '../../Assets/person9.png'
import person5 from '../../Assets/person10.png'
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
      <div className="WorkFirstContainer">
          <div className="containerWorkone">
            <div className="container-fluid">
              <div className="row gap-3 myworkcontainerfirst ">
                <div className="col-md-4 mainWork mainworkfirst ">
                  <div className="d-flex justify-content-between align-items-center">
                   <div className="d-flex pt-3 px-2 align-items-center gap-3">
                    <img src={zenith} className='zelinth' alt="" />
                    <p className='uppercase zelinthtext'>Zenith Fitness App</p>
                   </div>
                   <div className="d-flex gap-2 align-items-center pt-3 px-3">
                   <img src={arrow} className='zelinth' alt="" />
                   <p className='uppercase zelinthtext'>Details</p>
                   </div>
                  </div>
                  <div className=" ">
                     <div className="categoryoutline d-flex align-items-center gap-2">
                        <div className='categorytext'>Category</div>
                        <div className="dot"></div>
                        <div className='categorytext'>Mobile App Development</div>
                     </div>
                     <div className="categoryoutline d-flex align-items-center gap-2">
                        <div className='categorytext'>Time Taken</div>
                        <div className="dot"></div>
                        <div className='categorytext'>3 months</div>
                     </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <p className='paragraphCategory'>An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.</p>
                  </div>
                </div>
                <div className="col-md-3 mainWork workbackground">
                  <div className="">
                    <img src={workBackground} alt="" />
                  </div>
                </div>
                <div className="col-md-3 mainWork">
                  <div className="conatiner-fluid">
                    <div className="row">
                      <div className="col-md-12 mycategorycontainer ">
                        <h4>Technologies Used</h4>
                        <div className="d-flex align-items-center gap-2">
                          <div className="cover">
                            React Native
                          </div>
                          <div className="cover">
                            Firebase
                          </div>
                          <div className="cover">
                            Redux
                          </div>
                          <div className="cover">
                            REST API
                          </div>
                          <div className="cover">
                            REST API
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3 myrower">
                      <div className="col-md-12 px-4 mycategorycontainer2 gap-3 d-flex align-items-center ">
                        <p className='zelinthtext uppercase'>Team Members</p>
                        <div className="d-flex align-items-center gap-2">
                          <div className="profilephoto mb-2">
                            <img src={person1} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person2} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person3} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person4} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person5} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 mycategorycontainer3 ">
                        <div className="d-flex align-items-center justify-content-center pt-1">
                        <p className='uppercase'>Book a call</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            
          </div>
      </div>
      <div className="WorkFirstContainer">
          <div className="containerWorkone">
            <div className="container-fluid">
              <div className="row gap-3 ">
                <div className="col-md-4 mainWork mainworkfirst ">
                  <div className="d-flex justify-content-between align-items-center">
                   <div className="d-flex pt-3 px-2 align-items-center gap-3">
                    <img src={aura} className='zelinth' alt="" />
                    <p className='uppercase zelinthtext'>A-Aura Ecommerce</p>
                   </div>
                   <div className="d-flex gap-2 align-items-center pt-3 px-3">
                   <img src={arrow} className='zelinth' alt="" />
                   <p className='uppercase zelinthtext'>Details</p>
                   </div>
                  </div>
                  <div className=" ">
                     <div className="categoryoutline d-flex align-items-center gap-2">
                        <div className='categorytext'>Category</div>
                        <div className="dot"></div>
                        <div className='categorytext'>Web Design & Development</div>
                     </div>
                     <div className="categoryoutline d-flex align-items-center gap-2">
                        <div className='categorytext'>Time Taken</div>
                        <div className="dot"></div>
                        <div className='categorytext'>3 months</div>
                     </div>
                  </div>
                  <div className="mt-4 mb-4">
                    <p className='paragraphCategory'>A complete overhaul of a corporate website to enhance its brand identity and user experience.</p>
                  </div>
                </div>
                <div className="col-md-3 mainWork workbackground">
                  <div className="">
                    <img src={workBackground2} alt="" />
                  </div>
                </div>
                <div className="col-md-3 mainWork">
                  <div className="conatiner-fluid">
                    <div className="row">
                      <div className="col-md-12 mycategorycontainer ">
                        <h4>Technologies Used</h4>
                        <div className="d-flex align-items-center gap-2">
                          <div className="cover">
                            WordPress
                          </div>
                          <div className="cover">
                            PHP
                          </div>
                          <div className="cover">
                            HTML5
                          </div>
                          <div className="cover">
                            CSS3
                          </div>
                          <div className="cover">
                            Javascript
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 px-4 mycategorycontainer2 gap-3 d-flex align-items-center ">
                        <p className='zelinthtext uppercase'>Team Members</p>
                        <div className="d-flex align-items-center gap-2">
                          <div className="profilephoto mb-2">
                            <img src={person1} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person2} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person3} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person4} alt="" />
                          </div>
                          <div className="profilephoto mb-2">
                            <img src={person5} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12 mycategorycontainer3 ">
                        <div className="d-flex align-items-center justify-content-center pt-1">
                        <p className='uppercase'>Book a call</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
      </div>
    </div>
  )
}

export default OurWork
