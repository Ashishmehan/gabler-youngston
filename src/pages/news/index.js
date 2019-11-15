import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout'
import { Link } from 'gatsby'
import './news.css'
import Instfeed1 from '../../img/insta-post1.jpg'
import Instfeed2 from '../../img/insta-post2.jpg'
import Instfeed3 from '../../img/insta-post3.jpg'
import Instfeed4 from '../../img/insta-post4.jpg'
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
         <div className="all_news">
             <Container>
                <Row>
                   <Col md="7">
                     <h1>News</h1>
                   </Col>
                   <Col md="5">
                     <div className="filter_div">
                        <strong>Filter by category</strong>
                        <ul>
                          <li className="active-f"><a href="#">All </a></li>
                          <li><a href="#">Announcements</a></li>
                          <li><a href="#">Awards </a></li>
                          <li><a href="#">Events </a></li>
                          <li><a href="#">Publications </a></li>
                        </ul>
                     </div>
                   </Col>
                </Row>
             </Container>
             <div className="news_feed">
                <Row>
                    <Col md="8">
                       <Link to="/new-details" className="news">
                          <strong className="news-date">10 Jun 2019</strong>
                          <h6>GY goes to Court (to tour Robson Square and the Surrounding Civic Complex)</h6>
                          <p>Join Measured on June 27 for two fascinating events, hosted by the Arthur Erickson Foundation</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">10 Jun 2019</strong>
                          <h6>GY goes to Court (to tour Robson Square and the Surrounding Civic Complex)</h6>
                          <p>Join Measured on June 27 for two fascinating events, hosted by the Arthur Erickson Foundation.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">20 Mar 2019</strong>
                          <h6>In Memory of Joe Fafard</h6>
                          <p>GY is saddened by the death of Canadian Artist Joe Fafard.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">8 Mar 2019</strong>
                          <h6>Meet GY's Business Managers Jim and Morgan</h6>
                          <p>Learn more about Jim and Morgan, GY jack-of-all-trades business manager.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">5 Mar 2019</strong>
                          <h6>GY’s Shift House a winner at the 2019 BC Wood Awards</h6>
                          <p>The project won best Residential Wood Design at the 15th annual Wood Design Awards in BC.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">24 Feb 2019</strong>
                          <h6>Principal Clinton Cuddington featured at PechaKucha Vol. 48</h6>
                          <p>Join us in supporting Clinton as he speaks on the GY's approach to collaboration in design.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">14 Nov 2018</strong>
                          <h6>Grade House Featured in “Little House in the City”</h6>
                          <p>Grade House has been featured in "Little House in the City", an excellent new book by author Marc Vassallo</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">5 Nov 2018</strong>
                          <h6>Rough House written up in “The New Urban House: A Global Survey”</h6>
                          <p>Congratulations to Jonathan Bell and Ellie Stathaki, authors of "The New Urban House: A Global Survey." Rough House is the first project…15</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">Oct 2018</strong>
                          <h6>The Final Countdown: Equinox Gallery to be demolished in 2020</h6>
                          <p>The Equinox Gallery is to be demolished to make way for the Millennium Line extension.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">1 Sep 2018</strong>
                          <h6>Celebrating a Public Art Collaboration with Artist Michael Morris</h6>
                          <p>Measured is working with the acclaimed BC artist to reconstruct and situate his 1968 sculptural work, Palomar.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">2 Aug 2018</strong>
                          <h6>Ciao, GY! Rough House Featured in Venice Biennale</h6>
                          <p>Rough House is featured in both images and video at the 2018 Venice Biennale.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">26 Jul 2018</strong>
                          <h6>GY a Finalist for Western Living’s 2018 Designer of the Year Awards</h6>
                          <p>Thank you, Western Living! We're honoured to be named finalists in your 2018 DOTY Awards for both Architecture and Interior Design.</p>
                       </Link>
                       <Link to="/new-details" className="news">
                          <strong className="news-date">26 Jul 2018</strong>
                          <h6>Hannah Newton a finalist in fashion at Western Living Designer of the Year Awards</h6>
                          <p>Former GY designer Hannah Newton is getting the recognition she deserves for her bespoke leather bags and satchels.</p>
                       </Link>
                    </Col>
                    <Col md="4">
                       <div className="instagram_feed">
                          <img
                            src={Instfeed1}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          /> 
                          <img
                            src={Instfeed2}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          />
                          <img
                            src={Instfeed3}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          />
                          <img
                            src={Instfeed4}
                            alt="Psot"
                            style={{ display: 'block', width:'100%'}}
                          />                          
                       </div>
                    </Col>
                </Row>
             </div>
         </div>
     </Layout>
    )
  }
}
