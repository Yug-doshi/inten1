import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <Link to="index.html">
              <img src="images/logo.png" alt="Logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_taital_main">
              <div className="about_taital">About Us</div>
              <p className="about_text">
                Full cleaning and housekeeping services for companies and
                households.
              </p>
              <p className="about_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.Lorem Ipsum is simply
              </p>
              <div className="read_bt">
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about_img">
              <img src="images/about-img.png" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterSection = () => {
  return (
    <div className="footer_section layout_padding margin_top90">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <h3 className="useful_text">About</h3>
            <p className="footer_text">
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation u
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h3 className="useful_text">Menu</h3>
            <div className="footer_menu">
              <ul>
                <li>
                  <Link to="index.html">Home</Link>
                </li>
                <li>
                  <Link to="about.html">About Us</Link>
                </li>
                <li>
                  <Link to="gallery.html">Gallery</Link>
                </li>
                <li>
                  <Link to="services.html">Services</Link>
                </li>
                <li>
                  <Link to="contact.html">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="useful_text">Useful Link</h1>
            <p className="dummy_text">
              Adipiscing Elit, sed do Eiusmod Tempor incididunt{" "}
            </p>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h1 className="useful_text">Contact Us</h1>
            <div className="location_text">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="padding_left_10">
                      Address : Loram Ipusm
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="padding_left_10">
                      Call : +01 1234567890
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span className="padding_left_10">
                      Email : demo@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CopyrightSection = () => {
  return (
    <div className="copyright_section">
      <div className="container">
        <p className="copyright_text">
          2020 All Rights Reserved. Design by{" "}
          <a href="https://html.design">Free html Templates</a>
        </p>
      </div>
    </div>
  );
};


function About() {
  return (
    <>
      <>
        <Header />
        <AboutSection />
        <FooterSection />
        <CopyrightSection />
      </>
    </>
  );
}

export default About