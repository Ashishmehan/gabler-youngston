import React from 'react'
import './newsletter.css'

const Newsletter = class extends React.Component {
  render() {
    return (
      <div className="newsletter-min">
         <div className="container">
           <div className="columns">
                <div className="column is-7">
                     <span>Stay in the loop, subscribe to our </span>
                     <h5>NEWSLETTER</h5>
                </div>
                <div className="column is-5">
                  <div className="form-group">
                     <label>Your name:</label>
                     <input type="text" className=""/>
                  </div>
                  <div className="form-group">
                     <label>Your email address:</label>
                     <input type="text" className=""/>
                  </div>
                  <div className="form-btm">
                     <em>Subscribe Now</em>
                     <input type="submit" className="submit-btn" value=" " />
                  </div>
                </div>
             </div>
         </div>
      </div>
    )
  }
}

export default Newsletter
