import React from 'react'

function Contact() {
  return (
    <>
      <div className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="Logo" />

                
              </a>
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
                  <a className="nav-link" href="/Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* header section end */}
      {/* contact section start */}
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="contact_text">Contact Us</h1>
        </div>
      </div>
      <div className="contact_section_2 layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_0">
              <div className="mail_section">
                <div className="email_text">
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Name"
                      name="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Email"
                      name="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="email-bt"
                      placeholder="Phone Numbar"
                      name="Email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="massage-bt"
                      placeholder="Massage"
                      rows="5"
                      id="comment"
                      name="Massage"
                    ></textarea>
                  </div>
                  <div className="send_btn">
                    <div type="text" className="main_bt">
                      <a href="/">SEND</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Eiffel+Tower+Paris+France"
                  width="600"
                  height="508"
                  frameBorder="0"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact section end */}
      <div className="footer_section layout_padding">
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
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
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
      {/* footer section end */}
      {/* copyright section start */}
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2020 All Rights Reserved. Design by{" "}
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
      {/* copyright section end */}
      {/* Javascript files */}
      {/* ... (remaining script tags) */}
    </>
  );
}

export default Contact

// https://goo.gl/maps/DryqwGsKqAKt36656