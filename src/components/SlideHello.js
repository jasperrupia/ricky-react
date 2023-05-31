import React from 'react'

export default function SlideHello() {
  return (
    <section className="slider_section">
      <div className="container-fluid">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3 col-lg-2 offset-md-2">
                  <div className="detail-box">
                    <h1>
                      Make Design
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                    <div>
                      <a href="/">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3 col-lg-2 offset-md-2">
                  <div className="detail-box">
                    <h1>
                      Make Design
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                    <div>
                      <a href="/">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3 col-lg-2 offset-md-2">
                  <div className="detail-box">
                    <h1>
                      Make Design
                    </h1>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                    <div>
                      <a href="/">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8">
                  <div className="img-box">
                    <img src="images/hero.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  )
}
