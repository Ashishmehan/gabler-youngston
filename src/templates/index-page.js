import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';
import { Tween, Timeline } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import geoShape from '../../static/img/home/geo_shape.png';

const tweenProps = {
  ease: 'Strong.easeOut',
  to: {
    rotationY: 180,
  }
}

const FlippyGeoShape = ({progress}) => {
  return (
    <Timeline
      totalProgress={progress * 2}
      paused
    >
      <Tween {...tweenProps}>
        <img src={geoShape} />
      </Tween>
    </Timeline>
  );
};

export const IndexPageTemplate = ({
  image,
  title,
  stuff,
}) => {
    // const slides = homepage.slides;
    // const slide2 = slides[0];
    // const slide3 = slides[1];
    return (
    <div className="home-slides">
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Scene pin>
          <div className="panel panel-1">
              <PreviewCompatibleImage
                imageInfo={{
                  image: !!image.childImageSharp ? image.childImageSharp.fluid.src : image,
                  alt: `featured image thumbnail for logo`,
                  style: {
                    width: '500px',
                  }
                }}
              />
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
          </div>
        </Scene>
        <Scene pin pinSettings={{ pushFollowers: false }} duration="900">
          {(progress) => (
          <div className="panel panel-2">
            
            <div className="sidebar">
              <p className="purpose">
                {/* {slide2.sidebarHero} */}
              </p>
            </div>
            
            <div className="right">
              <div className="slideText">
                <p>
                  {/* {slide2.slideBlurb} */}
                </p>
              </div>
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
            </div>
            <div className="animatedGeoShape">
              <FlippyGeoShape progress={progress} />
            </div> 
          </div>
          )}
        </Scene>
        <Scene pin>
          <div className="panel panel-3">
            <div className="left">
              <div className="slideText">
                <p>
                  {/* {slide3.slideBlurb} */}
                </p>
                {/* <PreviewCompatibleImage
                  imageInfo={{
                      image: !!slide3.slideImg.childImageSharp ? slide3.slideImg.childImageSharp.fluid.src : slide3.slideImg,
                      alt: `Himitsu Lounge Featured Image`,
                  }}
                /> */}
              </div>
              <span>
                <span className="scroll-bob">SCROLL</span>
              </span>
            </div>
            <div className="sidebar">
                <p className="sidebar-hero">
                  {/* {slide3.sidebarHero} */}
                </p>
                <p className="sidebar-desc">
                  {/* {slide3.sidebarDescription} */}
                </p>
            </div>
          </div>
        </Scene>
      </Controller>
    </div>
    )
  }


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  homepage: PropTypes.object
}


const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout location="/">
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        stuff={frontmatter.stuff}
      />
    </Layout>
  )
}
IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stuff
      }
    }  
  }
`
