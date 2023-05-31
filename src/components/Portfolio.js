import React from 'react'

export default function Portfolio() {
  return (
    <section className="portfolio_section layout_padding">
    <div className="container">
      <div className="custom_heading-container">
        <h2>
          Our Portfolio
        </h2>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="box b-1">
                <img src="images/p-1.png" alt="" />
                <h4>
                  Logo Design
                </h4>
              </div>
              <div className="box b-2">
                <img src="images/p-2.png" alt="" />
                <h4>
                  Coding
                </h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box b-3">
                <img src="images/p-3.png" alt="" />
                <h4>
                  Bike Design
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="box b-4">
                <img src="images/p-4.png" alt="" />
                <h4>
                  Flower Design
                </h4>
              </div>
              <div className="box b-5">
                <img src="images/p-5.png" alt="" />
                <h4>
                  Website Design
                </h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="box b-6">
                <img src="images/p-6.jpg" alt="" />
                <h4>
                  More Design
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
