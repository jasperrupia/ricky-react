import React, { Component } from 'react'
// import {appendScript} from '../utils/appendScript';

export class About extends Component {

  render() {
    return (
      <section id="about" className="about_section layout_padding mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="img-box">
                <img src="images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="custom_heading-container">
                  <h2>
                    About Design
                  </h2>
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here , content here', making it
                </p>
                <div>
                  <a href="/">
                    About More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About