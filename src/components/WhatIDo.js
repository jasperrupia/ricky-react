import React from 'react'

export default function WhatIDo() {
  return (
    <section className="do_section layout_padding-bottom">
    <div className="container">
      <div className="custom_heading-container">
        <h2>
          What we do
        </h2>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="content-box bg-red">
            <div className="img-box">
              <img src="images/idea.png" alt="" />
            </div>
            <div className="detail-box">
              <h6>
                Original Ideas
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="content-box bg-green">
            <div className="img-box">
              <img src="images/controller.png" alt="" />
            </div>
            <div className="detail-box">
              <h6>
                Great apps
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="content-box bg-red">
            <div className="img-box">
              <img src="images/monitor.png" alt="" />
            </div>
            <div className="detail-box">
              <h6>
                High Resolution
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="content-box bg-green">
            <div className="img-box">
              <img src="images/rocket-ship.png" alt="" />
            </div>
            <div className="detail-box">
              <h6>
                Fast Loading
              </h6>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
