import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import './project.css'
import HeroBanner from '../../img/hero-image.png'
import prjectimg1 from '../../img/photo-1.png'
import prjectimg2 from '../../img/01-photo.png'
import facebook from '../../img/facebook.jpg'
import twitter from '../../img/twitter.jpg'
import linkdin from '../../img/linkdin.jpg'
import googleplus from '../../img/google-plus.jpg'
import email from '../../img/email.jpg'
import back_btn_up from '../../img/back-to-top-button.jpg'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
         <div className="project_min">
           {/* Banner Start */}
            <div className="project_banner">
                 <img
                    src={HeroBanner}
                    alt="Banner"
                    style={{ display: 'block', width:'100%'}}
                 />   
                 <div className="banner-text">
                    <h2>Himitsu Lounge</h2>
                    <span>Design Studio Group, Atlanta, Ga.</span>
                 </div>  
            </div>
           {/* Banner End */}
           {/* Project Destils Start */ }
              <div className="project_details">
                  <Container>
                     <Row className="d-flex flex-wrap align-items-center">
                        <Col md="6" className="mt-4">
                           <p><b>Himitsu Lounge</b> consectetur adipiscing elit. Pellentesque euismod malesuada iaculis. Nam id sapien accumsan, lacinia diam nec, laoreet tortor. Proin mauris tellus, ultrices sed consectetur ac, mattis nec arcu. Duis scelerisque pretium ex, in bibendum tortor viverra id. Mauris fermentum, nulla et elementum mattis, sem quam suscipit enim, quis sollicitudin enim augue eu nulla. Proin finibus odio augue, ut posuere sem vulputate a. Donec a dictum ex. Donec lacinia, velit at luctus sagittis, ipsum magna consectetur odio, vitae accumsan est mauris iaculis est. </p>
                        </Col>
                        <Col md="6" className="mt-4">
                            <img
                                src={prjectimg1}
                                alt="Project Image"
                                style={{ display: 'block', width:'100%'}}
                            /> 
                        </Col>
                     </Row>
                  </Container>
              </div>
           {/* Project Destils End */ }
           <div className="project_details">
              <Container>
                  <Row className="d-flex flex-wrap align-items-center">
                     <Col md="6" className="mt-4 position-relative">
                           <img
                                src={prjectimg2}
                                alt="Project Image"
                                style={{ display: 'block', width:'100%'}}
                           /> 
                           <span>01</span>
                     </Col>
                     <Col md="6" className="mt-4">
                          <h5>Idea</h5>
                         <p><b>Himitsu Lounge</b> consectetur adipiscing elit. Pellentesque euismod malesuada iaculis. Nam id sapien accumsan, lacinia diam nec, laoreet tortor. Proin mauris tellus, ultrices sed consectetur ac, mattis nec arcu. </p>                        
                     </Col>
                  </Row>
              </Container>
           </div>
           <div className="project_details">
              <Container>
                  <Row className="">
                     <Col md="6" className="mt-4 build2">
                           <p><b>"Himitsu Lounge</b> consectetur adipiscing elit. Pellentesque euismod malesuada iaculis. Nam id sapien accumsan, lacinia diam nec, laoreet tortor. Proin mauris tellus, ultrices sed consectetur ac, mattis nec arcu." </p>
                     </Col>
                     <Col md="6" className="mt-4">
                          <h5>02 <span>Build</span></h5>
                         <p><b>Himitsu Lounge</b> consectetur adipiscing elit. Pellentesque euismod malesuada iaculis. Nam id sapien accumsan, lacinia diam nec, laoreet tortor. Proin mauris tellus, ultrices sed consectetur ac, mattis nec arcu.</p>                        
                     </Col>
                  </Row>
              </Container>
           </div>
           <div className="project_details">
              <Container>
                  <Row className="d-flex flex-wrap align-items-center">
                     <Col md="6" className="mt-4">
                          <h5 className="text-left"><span>Live</span></h5>
                         <p><b>Himitsu Lounge</b> consectetur adipiscing elit. Pellentesque euismod malesuada iaculis. Nam id sapien accumsan, lacinia diam nec, laoreet tortor. Proin mauris tellus, ultrices sed consectetur ac, mattis nec arcu. </p>                        
                     </Col>
                     <Col md="6" className="mt-4 position-relative porject-stp3">
                           <img
                                src={prjectimg2}
                                alt="Project Image"
                                style={{ display: 'block', width:'100%'}}
                           /> 
                           <span className="">03</span>
                     </Col>
                  </Row>
              </Container>
           </div>
           <div className="project-info">
             <Container>
                <Row>
                   <Col md="7">
                      <ul>
                         <li><b>Architect</b> <span>Piers Cunnington + Clinton Cuddington</span></li>
                         <li><b>Measured</b> <span>Team James Papa</span></li>
                         <li><b>General Contractor</b> <span>Powers Construction</span></li>
                         <li><b>Consultants</b> <span>Fast + Epp Structural Engineers, Geopacific Consultants</span></li>
                         <li><b>Collaborators</b> <span>Cloth Studio</span> (curtains), <span>Nenagh McCutcheon Landscape Design</span></li>
                         <li><b>Photographer</b> <span>Ema Peter Photography</span></li>
                         <li><b>Project Type Residential</b> / new build</li>
                         <li><b>Size</b> 2,450 SF & 550 SF garage</li>
                         <li><b>Location Vancouver</b> / RA-1 zoning</li>
                         <li><b>Completion</b> 2017</li>
                      </ul>
                   </Col>
                   <Col md="5" className="social_links">
                      <h6>Like it? Share it!</h6>
                       <ul>
                          <li><a href=""> 
                           <img
                                 src={facebook}
                                 alt="facebook"
                              /> 
                          </a></li>
                          <li><a href=""> 
                           <img
                                 src={twitter}
                                 alt="twitter"
                              /> 
                          </a></li>
                          <li><a href=""> 
                           <img
                                 src={linkdin}
                                 alt="linkdin"
                              /> 
                          </a></li>
                          <li><a href=""> 
                           <img
                                 src={googleplus}
                                 alt="googleplus"
                              /> 
                          </a></li>
                          <li><a href=""> 
                           <img
                                 src={email}
                                 alt="email"
                              /> 
                          </a></li>
                       </ul>

                       <div class="back-btn-up">
                           <Link to="/work">
                                <img
                                      src={back_btn_up}
                                      alt="Back Button"
                                      style={{ display: 'block', }}
                                />
                           </Link>
                       </div>
                   </Col>
                </Row>
             </Container>

           </div>
         </div>
     </Layout>
    )
  }
}
