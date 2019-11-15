import React from 'react'
import './banner.css'

const AboutBanner = class extends React.Component {
  render() {
    return (
      <div>
        <div className="Banner-min" style={{ background: 'url(.././img/about-banner.jpg) no-repeat center center'}}>
          <div className="container">
              <h1>Our <span>Studio</span></h1>
          </div>
        </div>
       
      </div>
    )
  }
}

export default AboutBanner
