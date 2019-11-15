import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'
import AboutBanner from '../components/Aboutbanner/banner'
import OurTeam from '../components/Team/team'
import Aboutusimage from '../img/leadership_photo.png'
import Purpose1 from '../img/Bitmap1.png'
import Purpose2 from '../img/Bitmap2.png'
import Purpose3 from '../img/Bitmap3.png'
import Purpose4 from '../img/Bitmap4.png'
import './allpage.css'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  //const PageContent = contentComponent || Content

  // return (
  //   <section className="section section--gradient">
  //     <div className="container">
  //       <div className="columns">
  //         <div className="column is-10 is-offset-1">
  //           <div className="section">
  //             <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
  //               {title}
  //             </h2>
  //             <PageContent className="content" content={content} />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

//   return (
//     <Layout>
//       <AboutPageTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         content={post.html}
//       />
//     </Layout>
//   )
// }
return (
  <Layout>
     <div>
     <AboutBanner></AboutBanner>
       <div className="about-us">
          <img
              src={Aboutusimage}
              alt="About us image"
            />
          <div className="about_text">
              <p><span>GABLER YOUNGSTON</span> is an award winning architectural lighting design firm founded by Morgan Gabler and Jim Youngston. Morgan and Jim have more than thirty years’ combined professional experience in theatrical and architectural lighting design, contributing to over 300 architectural lighting projects in that time, and have worked as a team over the last eight years. Gabler-Youngston is the result of a shared vision for improved environments through creative lighting design and thorough documentation.</p>
          </div>
        </div>
       <div className="Our_purpose">
           <div className="columns">
               <div className="column is-4">
                  <img
                    src={Purpose1}
                    alt="Our purpose"
                   />
                  <img
                    src={Purpose2}
                    alt="Our purpose"
                    style={{ padding: '25px 0 0 30px', width:'100%'}}
                   />
               </div>
               <div className="column is-8">
                  <div className="columns">
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
                      <div className="column is-12 our-purpose">
                        <h2>Our <br/> Purpose</h2>
                        <p>Lighting design studies the interactions of volume, materials, user needs, and illumination. A successful design responds to and reinforces architectural elements without overwhelming them.</p>
                        <p>As partners, Morgan and Jim respond to the needs of clients through a collaborative process. We work with designers and owners as our collaborators to create an aesthetically pleasing, practically functional design that is also maintenance and budget friendly. Ours is an encompassing approach interconnecting all the pieces of the architectural puzzle, and resulting in a truly integrated design.</p>
                      </div>
                  </div>
               </div>
           </div>
        </div>
        <OurTeam></OurTeam>
        <div className="through_years">
           <div className="container">
               <h4>Through the years</h4>
              <div className="columns">
                 <div className="column is-2"></div>
                 <div className="column is-10">
                    <ul>
                        <li><b>2007 GE Edison Award of Merit</b> – Showroom for Allsteel and Gunlocke</li>
                        <li><b>2007 GE Edison Award for Sustainable Design </b>– Showroom for Allsteel and Gunlocke
                               International Illumination Design Awards (IIDA), International Award of Merit 2007 (sustainability) – Showroom for Allsteel and Gunlocke, Atlanta, Georgia
                        </li>
                        <li><b>IIDA, Section Award, Georgia Section 2007 (interiors)</b> – Showroom for Allsteel and Gunlocke, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2006</b> – Studio, Buenos Aires, Argentina</li>
                        <li><b>IIDA, International Award of Merit 2004</b> – Corporate Conference Center Lobby, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2003 (2)</b> – The Left Bank, Duck, North Carolina and Newcomb & Boyd Offices, Atlanta, Georgia</li>
                        <li><b>IIDA, Section Award, San Jacinto Section, 2003</b> – Humphrey Residence, Houston, Texas</li>
                        <li><b>IIDA, International Award of Merit 2002, Emory University</b> – Library for Music & Media, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2002</b> – Corporate Environments, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2001</b> – Residence for Art, Fort Worth, Texas</li>
                        <li><b>IIDA, Section Award, San Jacinto Section 2000 (2)</b> – American General Corporate Headquarters, Houston, Texas and Piso 16, Mexico City, Mexico</li>
                        <li><b>IIDA, International Award of Merit 1999 (2)</b> – British Airways Hospitality Suite, Houston, Texas and Riverbend Church, Austin, Texas</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
        <div className="through_years pt-0">
           <div className="container">
               <h4>Recognition</h4>
              <div className="columns">
                 <div className="column is-2"></div>
                 <div className="column is-10">
                    <ul>
                        <li><b>2007 GE Edison Award of Merit </b> – Showroom for Allsteel and Gunlocke</li>
                        <li><b>2007 GE Edison Award for Sustainable Design </b>– Showroom for Allsteel and Gunlocke International Illumination Design Awards (IIDA), International Award of Merit 2007 (sustainability) – Showroom for Allsteel and Gunlocke, Atlanta, Georgia
                        </li>
                        <li><b>IIDA, Section Award, Georgia Section 2007 (interiors)</b> – Showroom for Allsteel and Gunlocke, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2006</b> – Studio, Buenos Aires, Argentina</li>
                        <li><b>IIDA, International Award of Merit 2004</b> – Corporate Conference Center Lobby, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2003 (2)</b> – The Left Bank, Duck, North Carolina and Newcomb & Boyd Offices, Atlanta, Georgia</li>
                        <li><b>IIDA, Section Award, San Jacinto Section, 2003</b> – Humphrey Residence, Houston, Texas</li>
                        <li><b>IIDA, International Award of Merit 2002, Emory University</b> – Library for Music & Media, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2002</b> – Corporate Environments, Atlanta, Georgia</li>
                        <li><b>IIDA, International Award of Merit 2001</b> – Residence for Art, Fort Worth, Texas</li>
                        <li><b>IIDA, Section Award, San Jacinto Section 2000 (2)</b> – American General Corporate Headquarters, Houston, Texas and Piso 16, Mexico City, Mexico</li>
                        <li><b>IIDA, International Award of Merit 1999 (2)</b> – British Airways Hospitality Suite, Houston, Texas and Riverbend Church, Austin, Texas</li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
     </div>

  </Layout>
)
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
