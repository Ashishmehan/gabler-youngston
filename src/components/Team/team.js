import React from 'react'
import './team.css'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap';
import Teamimg1 from '../../img/teamimg1.jpg'
import Teamimg2 from '../../img/team-img2.jpg'
import Teamimg3 from '../../img/team-img3.jpg'
import Teamimg4 from '../../img/team-img4.jpg'
const OurTeam = class extends React.Component {
  render() {
    return (
      <div className="Our_team">
          <h3>Team</h3>
        <Row>
           <Col md="3" sm="6" xs="6">
              <div className="our_team">
                  <img
                    src={Teamimg1}
                    alt="Our Team"
                  />
                <Link to="/Teamdetail"> 
                  <div className="team_info">
                    <h5>Morgan Gabler</h5>
                    <span>Principal</span>
                  </div> 
                </Link>              
              </div>
           </Col>
           <Col md="3" sm="6" xs="6">
              <div className="our_team">
                  <img
                    src={Teamimg2}
                    alt="Our Team"
                  /> 
                  <Link to="/Teamdetail">
                    <div className="team_info">
                      <h5>Jim Youngston</h5>
                      <span>Principal</span>
                    </div> 
                  </Link>
              </div>
           </Col>
           <Col md="3" sm="6" xs="6">
              <div className="our_team">
                  <img
                    src={Teamimg3}
                    alt="Our Team"
                  /> 
                  <Link to="/Teamdetail">
                    <div className="team_info">
                      <h5>Michael Marvin</h5>
                      <span>Designer</span>
                    </div> 
                  </Link>
              </div>
           </Col>
           <Col md="3" sm="6" xs="6">
              <div className="our_team">
                  <img
                    src={Teamimg4}
                    alt="Our Team"
                  />
                  <Link to="/Teamdetail">
                    <div className="team_info">
                      <h5>Lauren Lyngarkos</h5>
                      <span>Designer</span>
                    </div>
                  </Link> 
              </div> 
           </Col>
        </Row>
      </div>
    )
  }
}

export default OurTeam
