import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../pages/work/work.css'
import Work1 from '../img/work/work1.jpg'
import Work2 from '../img/work/work2.jpg'
import Work3 from '../img/work/work3.jpg'
import Work4 from '../img/work/work4.jpg'
import Work5 from '../img/work/work5.jpg'
import Work6 from '../img/work/work6.jpg'
import Work7 from '../img/work/work7.jpg'
import Work8 from '../img/work/work8.jpg'
import Work9 from '../img/work/work9.jpg'
import Work10 from '../img/work/work10.jpg'
import Work11 from '../img/work/work11.jpg'
import Work12 from '../img/work/work12.jpg'
import Work13 from '../img/work/work13.jpg'
import Work14 from '../img/work/work14.jpg'
import Work15 from '../img/work/work15.jpg'
export const WorkPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content

    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent className="content" content={content} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

WorkPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const WorkPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            {/* <WorkPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            /> */}
            <div className="work_min">
                 <Container>
                     <h1>Work</h1>
                 </Container>
                     <Row>
                         <Col lg="7"></Col>
                         <Col lg="5" className="">
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
                     <Row className="latest-work">
                         <Col md="7" className="mt-3">
                            <img
                                src={Work1}
                                alt="latest project"
                                style={{ display: 'block', width:'100%'}}
                            />
                         </Col>
                         <Col md="5" className="mt-3">
                             <div className="latest-project-info">
                              <strong>Latest Project</strong>
                                <h2>HIMITSU LOUNGE</h2>
                                <span>Scope <b>Hospitality</b></span>
                                <p>She has also seen her work published in numerous trade journals including recent articles on retail illumination and light pollution in Architectural Lighting and Professional Lighting Design magazines. Morgan has received six International Illumination Design Awards, an Edison Award of Merit and an Edison Award for Sustainable Design.</p>
                             </div>
                         </Col>
                     </Row>

                     <Row>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work1}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work2}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work3}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work4}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work5}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work6}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work7}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work8}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work9}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work10}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work11}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work12}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work13}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work14}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                         <Col md="4" sm="6" xs="6">
                            <div class="hvrbox">
                                <img
                                    class="hvrbox-layer_bottom"
                                    src={Work15}
                                    alt="latest project"
                                    style={{ display: 'block', width:'100%'}}
                                />
                                <Link to="/project-detail" className="hvrbox-layer_top">
                                    <div class="hvrbox-text">
                                        <h5>HIMITSU LOUNGE</h5>
                                        <span>Scope  <b>Hospitality</b></span>
                                    </div>
                                </Link>
                            </div>
                         </Col>
                     </Row>
            </div>
        </Layout>
    )
}

WorkPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default WorkPage

export const workPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
