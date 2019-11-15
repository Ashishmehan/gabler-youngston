import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./team_detail.css";
import morgan from '../../img/teamimg1.jpg'
import Purpose2 from '../../img/Bitmap2.png'
import Purpose3 from '../../img/Bitmap3.png'
import Purpose4 from '../../img/Bitmap4.png'
import backbutton from '../../img/back-btn.jpg'
const Teamdetails = () => (
      <Layout>
         <div>
            <div className="team_detail_min">
             <h3>Team</h3>
              <div className="columns">
                  <div className="column is-4">
                      <img
                        src={morgan}
                        alt="Team"
                        style={{width:'100%'}}
                      />
                      <img
                        className="hide-phone"
                        src={Purpose2}
                        alt="Our purpose"
                        style={{ padding: '25px 0 0 30px', width:'100%'}}
                      />
                      <Link to="/about" className="back-btn hide-phone">
                          <img
                            className="hide-phone"
                            src={backbutton}
                            alt="back Button"
                            style={{ }}
                          />
                          <span>Back</span>
                      </Link>
                  </div>
                  <div className="column is-8">
                      <div className="columns hide-phone">
                          <div className="column is-6 column.is-6-mobile">
                            <img

                              src={Purpose3}
                              alt="Our purpose"
                            />
                          </div>
                          <div className="column is-6 column.is-6-mobile">
                            <img
                              src={Purpose4}
                              alt="Our purpose"
                            />
                          </div>
                      </div>
                      <div className="columns">
                          <div className="column is-12 team_detail_text">
                            <h2>MORGAN GABLER</h2>
                            <span>Principal / Iald</span>
                            <p>Prior to forming Gabler-Youngston, Morgan was a senior designer with the Lighting Design Group at Newcomb & Boyd in Atlanta and with Linda Cummings/Lighting Consultants in Houston. Her professional theatrical work includes past positions with the Alley Theatre in Houston, Theatre for the New City in New York and Theatre Project in Baltimore. She received a Bachelor of Arts degree from Bennington College with a double major in Theatrical Design and Spanish Literature.</p>
                            <p>Morgan is a Professional Member of the International Association of Lighting Designers (IALD). She was president of the Georgia Section of the Illuminating Engineering Society of North America (IESNA) in 2002-2003 and Regional Vice President for the Southern Region of the IESNA from 2007-2008. She also served on the Consultant Advisory Committee to GE Industrial from 2003-2007. She served as a Regional Coordinator for the IALD from 2007-2012.</p>
                            <p>Morgan presented the Lightfair Innovation Awards at Lightfair 2007. She has also seen her work published in numerous trade journals including recent articles on retail illumination and light pollution in Architectural Lighting and Professional Lighting Design magazines. Morgan has received six International Illumination Design Awards, an Edison Award of Merit and an Edison Award for Sustainable Design.</p>
                          </div>
                      </div>
                      <Link to="/about" className="back-btn only-phone">
                          <img
                            src={backbutton}
                            alt="back Button"
                            style={{ }}
                          />
                          <span>Back</span>
                      </Link>
                  </div>
              </div>
            </div>
         </div>
      </Layout>
    )
export default Teamdetails
