import React from 'react'

export default function Header() {
  return (
    <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo.png" alt="" />
          <span>
            RickyGraphics
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-2">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Portfolio </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact us</a>
            </li>
          </ul>
          <div className="user_option">
            <div className="login_btn-container">
              <a href="/">
                Login
              </a>
            </div>
            <form className="form-inline my-2 my-lg-0">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
            </form>
          </div>
        </div>
        <div className="call_btn">
          <a href="/">
            Call: +255 752 085 279
          </a>
        </div>
      </nav>
    </div>
  </header>
  )
}
