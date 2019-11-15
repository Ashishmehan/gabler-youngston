import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout'
import './news-details.css'
import { Link } from 'gatsby'
import Instfeed1 from '../../img/insta-post1.jpg'
import Instfeed2 from '../../img/insta-post2.jpg'
import Instfeed3 from '../../img/insta-post3.jpg'
import Instfeed4 from '../../img/insta-post4.jpg'
import back_btn_up from '../../img/back-to-top-button.jpg'
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
                       <div className="news_details">
                          <strong className="news-date">10 Jun 2019</strong>
                          <h6>Time to Restock: IDS Vancouver Unveils Central Bar Design</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit lectus, tempus quis dignissim nec, scelerisque ac massa. Cras tempor massa ac auctor imperdiet. Cras sed efficitur ipsum, a sagittis urna. Mauris rutrum viverra nisi, eu interdum risus semper sit amet. Aenean a eleifend nunc. Etiam sodales tempus aliquam. Donec vitae varius dui. Quisque commodo, mi sed fringilla consectetur, nulla leo laoreet nibh, non sagittis ante enim at nunc. Proin luctus venenatis egestas. Cras mollis orci elit, vel dictum orci rutrum vitae. Donec tincidunt eros ut accumsan sodales. Quisque tristique metus quis orci ultricies, non vehicula dui lacinia.</p>
                          <p>Donec pellentesque nunc at commodo euismod. Vivamus ornare elit a ante vestibulum tincidunt. Quisque sed eros lectus. Phasellus nibh nulla, imperdiet id tellus sed, lobortis condimentum nulla. Morbi a elit ante. Donec rhoncus arcu id nibh eleifend, sit amet semper tellus sollicitudin. Praesent interdum elementum elit non pulvinar. Etiam egestas eleifend tellus vitae hendrerit. Integer malesuada ante eget blandit sollicitudin. In viverra, purus nec elementum mollis, nunc ligula eleifend metus, non mollis lorem mauris eu leo. Maecenas sodales orci sed rhoncus elementum. Nulla posuere, nulla condimentum tincidunt ultricies, tortor neque gravida odio, vel fringilla felis nibh id tellus. Maecenas a ipsum orci. Praesent faucibus massa blandit quam volutpat, eu efficitur ex laoreet.</p>
                          <p>Nulla et purus venenatis, hendrerit velit at, dignissim enim. Phasellus eget suscipit mi, ut sodales nisi. Quisque commodo orci sit amet lacinia ultrices. Maecenas vulputate elementum accumsan. Phasellus eu efficitur nibh, a dapibus arcu. Duis consequat feugiat eleifend. Donec dapibus massa ac lacus interdum bibendum. Integer congue lorem ut orci hendrerit, eu feugiat elit fermentum. Quisque posuere mauris at mattis tincidunt. Sed rutrum condimentum pharetra.</p>
                          <p>Nunc consequat at ex at volutpat. Ut id finibus mauris. Aliquam auctor arcu lacus, in ultrices enim dictum sed. Cras et urna ut ante interdum tincidunt vehicula sit amet nisi. Nam mattis quam eu diam lacinia egestas. Praesent nec orci a ligula interdum pharetra at pharetra sem. Phasellus imperdiet odio vel est lobortis congue. Mauris eget massa vitae arcu vulputate cursus. Mauris quis congue odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris venenatis, metus sit amet volutpat ultrices, nulla ante volutpat magna, vel pretium est neque vel enim. Morbi venenatis nulla vel porta rhoncus. Maecenas ac ultrices leo. Duis volutpat sapien nisl, eget lobortis mi egestas quis.</p>
                       </div>
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
                       <div className="col-md-12">
                          <div className="back-btn-up">
                            <Link to="/news">
                                <img
                                      src={back_btn_up}
                                      alt="Back Button"
                                      style={{ display: 'block', }}
                                />
                              </Link>
                            </div>
                       </div>
                    </Col>
                </Row>
             </div>
         </div>
     </Layout>
    )
  }
}
