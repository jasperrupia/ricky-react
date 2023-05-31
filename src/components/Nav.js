import React from 'react'

export default function Nav() {
  return (
    <div className="custom_menu-container">
    <div className="container">
      <div className="custom_menu">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link pl-0" href="/">Home <span className="sr-only">(current)</span></a>
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
    </div>
  </div>
  )
}
