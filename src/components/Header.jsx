import React from "react";
import { NavLink } from "react-router-dom";

// import '../assets/css/vendor/bootstrap.min.css'
// import '../assets/css/vendor/cerebrisans.css'
// import '../assets/css/vendor/fontawesome-all.min.css'
// import '../assets/css/vendor/linea-icons.css'
// import '../assets/css/plugins/swiper.min.css'
// import '../assets/css/plugins/animate-text.css'
// import '../assets/css/plugins/animate.min.css'
// import '../assets/css/plugins/lightgallery.min.css'
// import '../assets/css/style.css'

import logo from "../assets/images/logo/logo-dark.webp";

const Header = () => {
  return (
    <>
      {/* <div className="preloader-activate preloader-active open_tm_preloader">
            <div className="preloader-area-wrap">
                <div className="spinner d-flex justify-content-center align-items-center h-100">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>
        </div> */}

      {/* <!--====================  header area ====================--> */}
      <div className="header-area header-sticky only-mobile-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                {/* <!-- brand logo --> */}
                <div className="header__logo top-logo">
                  <NavLink to="/">
                    <img src={logo} className="img-fluid" alt="" />
                    {/* // width="160" height="48v" */}
                  </NavLink>
                </div>

                <div className="header-right flexible-image-slider-wrap">
                  <div className="header-right-inner" id="hidden-icon-wrapper">
                    {/* <!-- Header Search Form --> */}
                    <div className="header-search-form d-md-none d-block">
                      <form action="#" className="search-form-top">
                        <input
                          className="search-field"
                          type="text"
                          placeholder="Search…"
                        />
                        <button className="search-submit">
                          <i className="search-btn-icon fa fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Header Top Info --> */}
                  <div className="swiper-container header-top-info-slider-werap top-info-slider__container">
                    <div className="swiper-wrapper header-top-info-inner default-color">
                      <div className="swiper-slide">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-phone"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">0122 8899900</h6>
                            <div className="info-sub-title">
                              Info@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-map-marker-alt"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">
                              219 Amara Fort Apt. 394
                            </h6>
                            <div className="info-sub-title">
                              New York, NY 941
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-clock"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">8:00AM - 6:00PM</h6>
                            <div className="info-sub-title">
                              Monday to Saturday
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="info-item">
                          <div className="info-icon">
                            <span className="fa fa-comment-alt-lines"></span>
                          </div>
                          <div className="info-content">
                            <h6 className="info-title">Online 24/7</h6>
                            <div className="info-sub-title">+122 123 4567</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Header Social Networks --> */}
                  <div className="header-social-networks style-icons">
                    <div className="inner">
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Twitter"
                        href="https://twitter.com"
                        data-hover="Twitter"
                      >
                        <i className="social-icon fab fa-twitter"></i>
                      </a>
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Facebook"
                        href="https://facebook.com"
                        data-hover="Facebook"
                      >
                        <i className="social-icon fab fa-facebook-f"></i>
                      </a>
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Instagram"
                        href="https://instagram.com"
                        data-hover="Instagram"
                      >
                        <i className="social-icon fab fa-instagram"></i>
                      </a>
                      <a
                        className=" social-link hint--black hint--bottom-left"
                        aria-label="Linkedin"
                        href="https://linkedin.com"
                        data-hover="Linkedin"
                      >
                        <i className="social-icon fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- mobile menu --> */}
                <div
                  className="mobile-navigation-icon d-block d-xl-none"
                  id="mobile-menu-trigger"
                >
                  <i></i>
                </div>
                {/* <!-- hidden icons menu --> */}
                <div
                  className="hidden-icons-menu d-block d-md-none"
                  id="hidden-icon-trigger"
                >
                  <a href="/">
                    <i className="far fa-ellipsis-h-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-bottom-inner position-relative">
                <div className="header-bottom-left-wrap">
                  {/* <!-- navigation menu --> */}
                  <div className="header__navigation d-none d-xl-block">
                    <nav className="navigation-menu navigation-menu--text_white">
                      <ul>
                        <li className="has-children has-children--multilevel-submenu">
                          <NavLink to="/">
                            <span>Home</span>
                          </NavLink>
                          <ul className="submenu">
                            <li>
                              <a href="index-infotechno.html">
                                <span>Infotechno</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-processing.html">
                                <span>Processing</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-appointment.html">
                                <span>Appointment</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-services.html">
                                <span>Services</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-resolutions.html">
                                <span>Resolutions</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-cybersecurity.html">
                                <span>Cybersecurity</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-modern-it-company.html">
                                <span>Modern IT Company</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-machine-learning.html">
                                <span>Machine Learning</span>
                              </a>
                            </li>
                            <li>
                              <a href="index-software-innovation.html">
                                <span>Software Innovation</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="/">
                            <span>Company</span>
                          </a>
                          <ul className="submenu">
                            <li className="has-children">
                              <NavLink to="/about">
                                <span>About us</span>
                              </NavLink>
                              <ul className="submenu">
                                <li>
                                  <NavLink to="/about">
                                    <span>About us 01</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/about">
                                    <span>About us 02</span>
                                  </NavLink>
                                </li>
                                <li className="has-children">
                                  <a href="/">
                                    <span>Submenu Level Two</span>
                                  </a>
                                  <ul className="submenu">
                                    <li>
                                      <a href="/">
                                        <span>Submenu Level Three</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span>Submenu Level Three</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span>Submenu Level Three</span>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <NavLink to="/contact">
                                <span>Contact us</span>
                              </NavLink>
                            </li>
                            <li>
                              <a href="leadership.html">
                                <span>Leadership</span>
                              </a>
                            </li>
                            <li>
                              <NavLink to="/choose">
                                <span>Why choose us</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/history">
                                <span>Our history</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/faqs">
                                <span>FAQs</span>
                              </NavLink>
                            </li>
                            <li>
                              <a href="careers.html">
                                <span>Careers</span>
                              </a>
                            </li>
                            <li>
                              <a href="pricing-plans.html">
                                <span>Pricing plans</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="/">
                            <span>IT solutions</span>
                          </a>
                          <ul className="submenu">
                            <li>
                              <a href="it-services.html">
                                <span>IT Services</span>
                              </a>
                            </li>
                            <li>
                              <a href="managed-it-service.html">
                                <span>Managed IT Services</span>
                              </a>
                            </li>
                            <li>
                              <a href="industries.html">
                                <span>Industries</span>
                              </a>
                            </li>
                            <li>
                              <a href="business-solution.html">
                                <span>Business solution</span>
                              </a>
                            </li>
                            <li>
                              <a href="it-services-details.html">
                                <span>IT Services Details</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <a href="/">
                            <span>Elements</span>
                          </a>
                          {/* <!-- mega menu --> */}
                          <ul className="megamenu megamenu--mega">
                            <li>
                              <h2 className="page-list-title">
                                ELEMENT GROUP 01
                              </h2>
                              <ul>
                                <li>
                                  <a href="element-accordion.html">
                                    <span>Accordions & Toggles</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-box-icon.html">
                                    <span>Box Icon</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-box-image.html">
                                    <span>Box Image</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-box-large-image.html">
                                    <span>Box Large Image</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-buttons.html">
                                    <span>Buttons</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-cta.html">
                                    <span>Call to action</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-client-logo.html">
                                    <span>Client Logo</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-countdown.html">
                                    <span>Countdown</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 className="page-list-title">
                                ELEMENT GROUP 02
                              </h2>
                              <ul>
                                <li>
                                  <a href="element-counters.html">
                                    <span>Counters</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-dividers.html">
                                    <span>Dividers</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-flexible-image-slider.html">
                                    <span>Flexible image slider</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-google-map.html">
                                    <span>Google Map</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-gradation.html">
                                    <span>Gradation</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-instagram.html">
                                    <span>Instagram</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-lists.html">
                                    <span>Lists</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-message-box.html">
                                    <span>Message box</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 className="page-list-title">
                                ELEMENT GROUP 03
                              </h2>
                              <ul>
                                <li>
                                  <a href="element-popup-video.html">
                                    <span>Popup Video</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-pricing-box.html">
                                    <span>Pricing Box</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-progress-bar.html">
                                    <span>Progress Bar</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-progress-circle.html">
                                    <span>Progress Circle</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-rows-columns.html">
                                    <span>Rows & Columns</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-social-networks.html">
                                    <span>Social Networks</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-tabs.html">
                                    <span>Tabs</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-team-member.html">
                                    <span>Team member</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 className="page-list-title">
                                ELEMENT GROUP 04
                              </h2>
                              <ul>
                                <li>
                                  <a href="element-testimonials.html">
                                    <span>Testimonials</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-timeline.html">
                                    <span>Timeline</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-carousel-sliders.html">
                                    <span>Carousel Sliders</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-typed-text.html">
                                    <span>Typed Text</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="/">
                            <span>Case Studies</span>
                          </a>
                          {/* <!-- multilevel submenu --> */}
                          <ul className="submenu">
                            <li>
                              <a href="case-studies.html">
                                <span>Case Studies 01</span>
                              </a>
                            </li>
                            <li>
                              <a href="case-studies-02.html">
                                <span>Case Studies 02</span>
                              </a>
                            </li>
                            <li>
                              <a href="single-smart-vision.html">
                                <span>Single Layout</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children has-children--multilevel-submenu">
                          <a href="blog-list-large-image.html">
                            <span>Blog</span>
                          </a>
                          {/* <!-- multilevel submenu --> */}
                          <ul className="submenu">
                            <li>
                              <a href="blog-list-large-image.html">
                                <span>List Large Image</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-list-left-large-image.html">
                                <span>Left Large Image</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-classic.html">
                                <span>Grid Classic</span>
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-masonry.html">
                                <span>Grid Masonry</span>
                              </a>
                            </li>
                            <li className="has-children">
                              <a href="blog-post-layout-one.html">
                                <span>Single Layouts</span>
                              </a>
                              <ul className="submenu">
                                <li>
                                  <a href="blog-post-layout-one.html">
                                    <span>Left Sidebar</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-post-right-sidebar.html">
                                    <span>Right Sidebar</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-post-no-sidebar.html">
                                    <span>No Sidebar</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="header-search-form ">
                  <form action="#" className="search-form-top style-03 ">
                    <input
                      className="search-field"
                      type="text"
                      placeholder="Search…"
                    />
                    <button className="search-submit">
                      <i className="search-btn-icon fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--====================  End of header area  ====================--> */}
    </>
  );
};

export default Header;