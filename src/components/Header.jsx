import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo/over.png";

const Header = () => {
  const [btnState, setBtnState] = useState(false);
  // const [btn, setBtn] = useState(false);

  const [toggle, setToggle] = useState(false);
  const [Toggle, settoggle] = useState(false);
  const [Togglebtn, settogglebtn] = useState(false);
  const [Togglebn, settogglebn] = useState(false);
  const [togglebn, Settogglebn] = useState(false);
  const [toggleb, Settoggleb] = useState(false);
  const [toggleB, SettoggleB] = useState(false);
  const [ToggleB, settoggleB] = useState(false);
  const [Toggleb, settoggleb] = useState(false);
  const [Togglen, settogglen] = useState(false);
  const [ToggleN, settoggleN] = useState(false);

  function handleClick() {
    setBtnState((btnState) => !btnState);
  }

  // function handleclick() {
  //   setBtn((btn) => !btn);
  // }

  const toggleState = () => {
    setToggle(!toggle);
  };

  const togglestate = () => {
    settoggle(!Toggle);
  };

  const Togglestate = () => {
    settogglebtn(!Togglebtn);
  };

  const Togglestatebtn = () => {
    settogglebn(!Togglebn);
  };

  const togglestatebtn = () => {
    Settogglebn(!togglebn);
  };

  const togglestatebn = () => {
    Settoggleb(!toggleb);
  };

  const togglestateb = () => {
    SettoggleB(!toggleB);
  };

  const togglestateB = () => {
    settoggleB(!ToggleB);
  };

  const TogglestateB = () => {
    settoggleb(!Toggleb);
  };

  const Togglestaten = () => {
    settogglen(!Togglen);
  };

  const TogglestateN = () => {
    settoggleN(!ToggleN);
  };

  let toggleClassCheck = btnState ? " active" : "";
  // let toggleClass = btn ? " active" : "";

  return (
    <>
      {/* <!--====================  header area ====================--> */}
      {/* <div className="header-area header-sticky only-mobile-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                <!-- brand logo -->
                <div className="header__logo top-logo">
                  <NavLink to="/">
                    <img src={logo} className="img-fluid" alt="" />
                    // width="160" height="48v"
                  </NavLink>
                </div>

                <div className="header-right flexible-image-slider-wrap">
                  <div
                    className={`header-right-inner${toggleClass}`}
                    id="hidden-icon-wrapper"
                  >
                    <!-- Header Search Form -->
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

                  <!-- Header Top Info -->
                  <div className="swiper-container header-top-info-slider-werap top-info-slider__container swiper-container-initialized swiper-container-horizontal swiper-container-android">
                    <div className="swiper-wrapper header-top-info-inner default-color">
                      <div className="swiper-slide YourClass">
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
                      <div className="swiper-slide YourClass">
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
                      <div className="swiper-slide YourClass">
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
                      <div className="swiper-slide YourClass">
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

                  <!-- Header Social Networks -->
                  <div className="header-social-networks style-icons">
                    <div className="inner YourClass">
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
                <!-- mobile menu -->
                <div
                  className="mobile-navigation-icon d-block d-xl-none"
                  id="mobile-menu"
                  onClick={handleClick}
                >
                  <i></i>
                </div>
                <!-- hidden icons menu -->
                <div
                  className="hidden-icons-menu d-block d-md-none"
                  id="hidden-icon-trigger"
                >
                  <a href="/">
                  <i
                    className="far fa-ellipsis-h-alt YourClass"
                    onClick={handleclick}
                  ></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-bottom-inner position-relative">
                <div className="header-bottom-left-wrap">
                  <!-- navigation menu -->
                  <div className="header__navigation d-none d-xl-block">
                    <nav className="navigation-menu navigation-menu--text_white">
                      <ul>
                        <li className="has-children">
                          <a href="/">
                            <span>Company</span>
                          </a>
                          <ul className="submenu">
                            <li className="has-children">
                              <NavLink to="/about">
                                <span>About us</span>
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/contact">
                                <span>Contact us</span>
                              </NavLink>
                            </li>
                            <li>
                              <Link to="/leader">
                                <span>Leadership</span>
                              </Link>
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
                          </ul>
                        </li>
                        <li class="has-children">
                          <a href="/">
                            <span>Our Services</span>
                          </a>
                          <!-- mega menu -->
                          <ul class="megamenu megamenu--mega">
                            <li>
                              <h2 class="page-list-title">
                                Mobile App & Development
                              </h2>
                              <ul>
                                <li>
                                  <NavLink to="/ios">
                                    <span>iOS App Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/android">
                                    <span>Android App Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/flutter">
                                    <span>Flutter App Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/react-native">
                                    <span>React-Native Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/mobile">
                                    <span>Mobile App Maintenance</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 class="page-list-title">
                                Website Design & Development
                              </h2>
                              <ul>
                                <li>
                                  <NavLink to="/angularjs">
                                    <span>AngularJS Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/reactjs">
                                    <span>ReactJS Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/vuejs">
                                    <span>VueJS Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/nodejs">
                                    <span>NodeJS Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/website">
                                    <span>Website Maintenance</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 class="page-list-title">
                                Game Design & Development
                              </h2>
                              <ul>
                                <li>
                                  <NavLink to="/golang">
                                    <span>Golang Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/laravel">
                                    <span>Laravel Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/php">
                                    <span>PHP Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/wordpress">
                                    <span>Wordpress Development</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/game">
                                    <span>Game Maintenance</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 class="page-list-title">Other Services</h2>
                              <ul>
                                <li>
                                  <NavLink to="/seo">
                                    <span>SEO</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/smm">
                                    <span>SMM</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/ppc">
                                    <span>PPC</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/crm">
                                    <span>CRM</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/pos">
                                    <span>POS</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="has-children">
                          <a href="/">
                            <span>Hire Developers</span>
                          </a>
                          <!-- mega menu -->
                          <ul class="megamenu megamenu--mega">
                            <li>
                              <h2 class="page-list-title">
                                Mobile App Developers
                              </h2>
                              <ul>
                                <li>
                                  <NavLink to="/iosdev">
                                    <span>iOS App Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/androiddev">
                                    <span>Android App Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/nativedev">
                                    <span>React-Native Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/flutterdev">
                                    <span>Flutter App Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/hybriddev">
                                    <span>Hybrid Mobile App Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/crossdev">
                                    <span>Cross Platform App Developers</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 class="page-list-title">
                                Backend Developers
                              </h2>
                              <ul>
                                <li>
                                  <NavLink to="/fullstackdev">
                                    <span>Full Stack Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/nodedev">
                                    <span>NodeJS Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/laraveldev">
                                    <span>Laravel Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/golangdev">
                                    <span>Golang Developers</span>
                                  </NavLink>
                                </li>
                                <li>
                                  <NavLink to="/phpdev">
                                    <span>PHP Developers</span>
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h2 class="page-list-title">
                                Frontend Developers
                              </h2>
                              <ul>
                                <li>
                                  <a href="element-popup-video.html">
                                    <span>ReactJS Developers</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-pricing-box.html">
                                    <span>AngularJS Developers</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-progress-bar.html">
                                    <span>VueJS Developers</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="element-progress-circle.html">
                                    <span>Web Developers</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="/">
                                <h2 class="page-list-title">
                                  WordPress Developers
                                </h2>
                              </a>
                              <a href="/">
                                <h2 class="page-list-title">CMS Developers</h2>
                              </a>
                              <a href="/">
                                <h2 class="page-list-title">UI/UX Designers</h2>
                              </a>
                              <a href="/">
                                <h2 class="page-list-title">Game Developers</h2>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-children">
                          <Link to="/casestudies">
                            <span>Case Studies</span>
                          </Link>
                        </li>
                        <li className="has-children">
                          <Link to="/blog">
                            <span>Blog</span>
                          </Link>
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
      </div> */}
      {/* <!--====================  End of header area  ====================--> */}

      {/* <!--====================  header area ====================--> */}
      <div class="header-area header-area--default">
        {/* <!-- Header Bottom Wrap Start --> */}
        <div class="header-bottom-wrap header-sticky">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="header default-menu-style position-relative">
                  {/* <!-- brand logo --> */}
                  <div class="header__logo">
                    <NavLink to="/">
                      <img src={logo} className="img-fluid" alt="" />
                      {/* // width="160" height="48v" */}
                    </NavLink>
                  </div>

                  {/* <!-- header midle box  --> */}
                  <div class="header-midle-box">
                    <div class="header-bottom-wrap d-md-block d-none">
                      <div class="header-bottom-inner">
                        <div class="header-bottom-left-wrap">
                          {/* <!-- navigation menu --> */}
                          <div class="header__navigation d-none d-xl-block">
                            <nav class="navigation-menu primary--menu">
                              <ul>
                                <li className="has-children">
                                  <NavLink to="/">
                                    <span>Home</span>
                                  </NavLink>
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
                                    </li>
                                    <li>
                                      <NavLink to="/contact">
                                        <span>Contact us</span>
                                      </NavLink>
                                    </li>
                                    <li>
                                      <Link to="/leader">
                                        <span>Leadership</span>
                                      </Link>
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
                                  </ul>
                                </li>
                                <li class="has-children">
                                  <a href="/">
                                    <span>Our Services</span>
                                  </a>
                                  {/* <!-- mega menu --> */}
                                  <ul class="megamenu megamenu--mega">
                                    <li>
                                      <h2 class="page-list-title">
                                        Mobile App & Development
                                      </h2>
                                      <ul>
                                        <li>
                                          <NavLink to="/ios">
                                            <span>iOS App Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/android">
                                            <span>Android App Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/flutter">
                                            <span>Flutter App Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/react-native">
                                            <span>
                                              React-Native Development
                                            </span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/mobile">
                                            <span>Mobile App Maintenance</span>
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <h2 class="page-list-title">
                                        Website Design & Development
                                      </h2>
                                      <ul>
                                        <li>
                                          <NavLink to="/angularjs">
                                            <span>AngularJS Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/reactjs">
                                            <span>ReactJS Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/vuejs">
                                            <span>VueJS Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/nodejs">
                                            <span>NodeJS Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/website">
                                            <span>Website Maintenance</span>
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <h2 class="page-list-title">
                                        Game Design & Development
                                      </h2>
                                      <ul>
                                        <li>
                                          <NavLink to="/golang">
                                            <span>Golang Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/laravel">
                                            <span>Laravel Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/php">
                                            <span>PHP Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/wordpress">
                                            <span>Wordpress Development</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/game">
                                            <span>Game Maintenance</span>
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <h2 class="page-list-title">
                                        Other Services
                                      </h2>
                                      <ul>
                                        <li>
                                          <NavLink to="/seo">
                                            <span>SEO</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/smm">
                                            <span>SMM</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/ppc">
                                            <span>PPC</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/crm">
                                            <span>CRM</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/pos">
                                            <span>POS</span>
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                  </ul>
                                </li>
                                <li class="has-children">
                                  <a href="/">
                                    <span>Hire Developers</span>
                                  </a>
                                  {/* <!-- mega menu --> */}
                                  <ul class="megamenu megamenu--mega">
                                    <li>
                                      <h2 class="page-list-title">
                                        Mobile App Developers
                                      </h2>
                                      <ul>
                                        <li>
                                          <NavLink to="/iosdev">
                                            <span>iOS App Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/androiddev">
                                            <span>Android App Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/nativedev">
                                            <span>React-Native Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/flutterdev">
                                            <span>Flutter App Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/hybriddev">
                                            <span>
                                              Hybrid Mobile App Developers
                                            </span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/crossdev">
                                            <span>
                                              Cross Platform App Developers
                                            </span>
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <h2 class="page-list-title">
                                        Backend Developers
                                      </h2>
                                      <ul>
                                        <li>
                                          <NavLink to="/fullstackdev">
                                            <span>Full Stack Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/nodedev">
                                            <span>NodeJS Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/laraveldev">
                                            <span>Laravel Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/golangdev">
                                            <span>Golang Developers</span>
                                          </NavLink>
                                        </li>
                                        <li>
                                          <NavLink to="/phpdev">
                                            <span>PHP Developers</span>
                                          </NavLink>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <h2 class="page-list-title">
                                        Frontend Developers
                                      </h2>
                                      <ul>
                                        <li>
                                          <a href="element-popup-video.html">
                                            <span>ReactJS Developers</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-pricing-box.html">
                                            <span>AngularJS Developers</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-progress-bar.html">
                                            <span>VueJS Developers</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="element-progress-circle.html">
                                            <span>Web Developers</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <h2 class="page-list-title">
                                          WordPress Developers
                                        </h2>
                                      </a>
                                      <a href="/">
                                        <h2 class="page-list-title">
                                          CMS Developers
                                        </h2>
                                      </a>
                                      <a href="/">
                                        <h2 class="page-list-title">
                                          UI/UX Designers
                                        </h2>
                                      </a>
                                      <a href="/">
                                        <h2 class="page-list-title">
                                          Game Developers
                                        </h2>
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="has-children">
                                  <Link to="/casestudies">
                                    <span>Case Studies</span>
                                  </Link>
                                </li>
                                <li className="has-children">
                                  <Link to="/blog">
                                    <span>Blog</span>
                                  </Link>
                                </li>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- header right box --> */}
                  <div class="header-right-box">
                    <div class="header-right-inner" id="hidden-icon-wrapper">
                      {/* <!-- Header Social Networks --> */}
                      <div className="header-social-networks style-icons">
                        <div className="inner YourClass">
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
                          {/* <a
                            className=" social-link hint--black hint--bottom-left"
                            aria-label="Instagram"
                            href="https://instagram.com"
                            data-hover="Instagram"
                          >
                            <i className="social-icon fab fa-instagram"></i>
                          </a> */}
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
                      {/* <!-- header-search-form --> */}
                      <div class="header-search-form default-search">
                        <form action="#" class="search-form-top">
                          <input
                            class="search-field"
                            type="text"
                            placeholder="Search…"
                          />
                          <button class="search-submit">
                            <i class="search-btn-icon fa fa-search"></i>
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* <!-- mobile menu --> */}
                    <div
                      className="mobile-navigation-icon d-block d-xl-none"
                      id="mobile-menu"
                      onClick={handleClick}
                    >
                      <i></i>
                    </div>
                    {/* <!-- hidden icons menu --> */}
                    <div
                      className="hidden-icons-menu d-block d-md-none"
                      id="hidden-icon-trigger"
                    >
                      <a href="/">
                        <i
                          className="far fa-ellipsis-h-alt YourClass"
                          // onClick={handleclick}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header Bottom Wrap End --> */}
      </div>
      {/* <!--====================  End of header area  ====================--> */}

      {/* <!--====================  scroll top ====================--> */}
      <a href="/" className="scroll-top" id="scroll-top">
        <i className="arrow-top fal fa-long-arrow-up"></i>
        <i className="arrow-bottom fal fa-long-arrow-up"></i>
      </a>
      {/* <!--====================  End of scroll top  ====================--> */}

      {/* <!-- Start Toolbar --> */}
      <div className="demo-option-container">
        {/* <!-- Start Toolbar --> */}
        {/* <div className="aeroland__toolbar">
          <div className="inner">
            <a
              className="quick-option hint--bounce hint--left hint--black primary-color-hover-important"
              href="/"
              aria-label="Quick Options"
            >
              <i className="fal fa-project-diagram"></i>
            </a>
            <a
              className="hint--bounce hint--left hint--black primary-color-hover-important"
              href="https://hasthemes.com/contact-us/"
              aria-label="Support Center"
            >
              <i className="fal fa-life-ring"></i>
            </a>
            <a
              className="hint--bounce hint--left hint--black primary-color-hover-important"
              href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=mitech-preview&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource"
              aria-label="Purchase Mitech"
            >
              <i className="fal fa-shopping-cart"></i>
            </a>
          </div>
        </div> */}
        {/* <!-- End Toolbar --> */}
        {/* <!-- Start Quick Link --> */}
        <div className="demo-option-wrapper">
          <div className="demo-panel-header">
            <div className="title">
              <h6 className="heading mt-30">
                IT Solutions Mitech - Technology, IT Solutions & Services Html5
                Template
              </h6>
            </div>

            <div className="panel-btn mt-20">
              <a
                className="ht-btn ht-btn-md"
                href="https://1.envato.market/c/417168/275988/4415?subId1=hastheme&subId2=mitech-preview&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24906742%3Flicense%3Dregular%26size%3Dsource"
              >
                <i className="far fa-shopping-cart me-2"></i> Buy Now{" "}
              </a>
            </div>
          </div>
          <div className="demo-quick-option-list">
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-appointment.html"
              aria-label="Appointment"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-01.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-infotechno.html"
              aria-label="Infotechno"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-02.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-processing.html"
              aria-label="Processing"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-03.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-services.html"
              aria-label="Services"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-04.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-resolutions.html"
              aria-label="Resolutions"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-05.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-cybersecurity.html"
              aria-label="Cybersecurity"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/home-06.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-modern-it-company.html"
              aria-label="Modern IT Company"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/modern-it-company.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-machine-learning.html"
              aria-label="Machine Learning"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/machine-learning.webp"
                alt="Images"
              />
            </a>
            <a
              className="link hint--bounce hint--black hint--top hint--dark"
              href="index-software-innovation.html"
              aria-label="Software Innovation"
            >
              <img
                className="img-fluid"
                src="assets/images/demo-images/software-innovation.webp"
                alt="Images"
              />
            </a>
          </div>
        </div>
        {/* <!-- End Quick Link --> */}
      </div>
      {/* <!-- End Toolbar --> */}

      {/* <!--====================  mobile menu overlay ====================--> */}
      <div
        className={`mobile-menu-overlay${toggleClassCheck}`}
        id="mobile-menu-trigger"
      >
        <div className="mobile-menu-overlay__inner">
          <div className="mobile-menu-overlay__header">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-md-6 col-8">
                  {/* <!-- logo --> */}
                  <div className="logo">
                    <a href="index.html">
                      <img src={logo} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-4">
                  {/* <!-- mobile menu content --> */}
                  <div className="mobile-menu-content text-end">
                    <span
                      className="mobile-navigation-close-icon"
                      id="mobile-menu-close-trigger"
                      onClick={handleClick}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay__body">
            <nav className="offcanvas-navigation">
              <ul>
                <li className={toggle ? "has-children active" : "has-children"}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="has-children">
                  <span className="menu-expand" onClick={toggleState}>
                    <i></i>
                  </span>
                  <a href="/">Company</a>
                  <ul
                    className={
                      toggle ? "collapse show sub-menu" : "collapse sub-menu"
                    }
                  >
                    <li className="has-children">
                      <NavLink to="/about">
                        <span>About us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <span>Contact us</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/leader">
                        <span>Leadership</span>
                      </NavLink>
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
                  </ul>
                </li>
                <li className={Toggle ? "has-children active" : "has-children"}>
                  <span className="menu-expand" onClick={togglestate}>
                    <i></i>
                  </span>
                  <a href="/">Our Services</a>
                  <ul
                    className={
                      Toggle ? "collapse show sub-menu" : "collapse sub-menu"
                    }
                  >
                    <li
                      className={
                        Togglebtn ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={Togglestate}>
                        <i></i>
                      </span>
                      <a href="/">Mobile Development</a>
                      <ul
                        className={
                          Togglebtn
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <NavLink to="/ios">
                            <span>iOS App Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/android">
                            <span>Android App Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/flutter">
                            <span>Flutter App Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/react-native">
                            <span>React-Native Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/mobile">
                            <span>Mobile App Maintenance</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={
                        Togglebn ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={Togglestatebtn}>
                        <i></i>
                      </span>
                      <a href="/">Web Development</a>
                      <ul
                        className={
                          Togglebn
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <NavLink to="/angularjs">
                            <span>AngularJS Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/reactjs">
                            <span>ReactJS Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/vuejs">
                            <span>VueJS Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/nodejs">
                            <span>NodeJS Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/website">
                            <span>Website Maintenance</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={
                        togglebn ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={togglestatebtn}>
                        <i></i>
                      </span>
                      <a href="/">Game Development</a>
                      <ul
                        className={
                          togglebn
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <NavLink to="/golang">
                            <span>Golang Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/laravel">
                            <span>Laravel Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/php">
                            <span>PHP Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/wordpress">
                            <span>Wordpress Development</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/game">
                            <span>Game Maintenance</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={
                        toggleb ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={togglestatebn}>
                        <i></i>
                      </span>
                      <a href="/">Other Services</a>
                      <ul
                        className={
                          toggleb
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <NavLink to="/seo">
                            <span>SEO</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/smm">
                            <span>SMM</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/ppc">
                            <span>PPC</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/crm">
                            <span>CRM</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/pos">
                            <span>POS</span>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li
                  className={toggleB ? "has-children active" : "has-children"}
                >
                  <span className="menu-expand" onClick={togglestateb}>
                    <i></i>
                  </span>
                  <a href="/">Hire Developers</a>
                  <ul
                    className={
                      toggleB ? "collapse show sub-menu" : "collapse sub-menu"
                    }
                  >
                    <li
                      className={
                        ToggleB ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={togglestateB}>
                        <i></i>
                      </span>
                      <a href="/">Mobile App Developers</a>
                      <ul
                        className={
                          ToggleB
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <NavLink to="/iosdev">
                            <span>iOS App Developers</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/androiddev">
                            <span>Android App Developers</span>
                          </NavLink>
                        </li>
                        <li>
                          <a href="element-box-image.html">
                            <span>React-Native Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-box-large-image.html">
                            <span>Flutter App Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-buttons.html">
                            <span>Hybrid Mobile App Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-cta.html">
                            <span>Cross Platform App Developers</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={
                        Toggleb ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={TogglestateB}>
                        <i></i>
                      </span>
                      <a href="/">Backend Developers</a>
                      <ul
                        className={
                          Toggleb
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <a href="element-counters.html">
                            <span>Full Stack Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-dividers.html">
                            <span>NodeJS Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-flexible-image-slider.html">
                            <span>Laravel Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-google-map.html">
                            <span>Golang Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-gradation.html">
                            <span>PHP Developers</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={
                        Togglen ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={Togglestaten}>
                        <i></i>
                      </span>
                      <a href="/">Frontend Developers</a>
                      <ul
                        className={
                          Togglen
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <a href="element-popup-video.html">
                            <span>ReactJS Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-pricing-box.html">
                            <span>AngularJS Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-progress-bar.html">
                            <span>VueJS Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-progress-circle.html">
                            <span>Web Developers</span>
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li
                      className={
                        ToggleN ? "has-children active" : "has-children"
                      }
                    >
                      <span className="menu-expand" onClick={TogglestateN}>
                        <i></i>
                      </span>
                      <a href="/">Other Services</a>
                      <ul
                        className={
                          ToggleN
                            ? "collapse show sub-menu"
                            : "collapse sub-menu"
                        }
                      >
                        <li>
                          <a href="element-testimonials.html">
                            <span>Wordpress Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-timeline.html">
                            <span>CMS Developers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-carousel-sliders.html">
                            <span>UI/UX Designers</span>
                          </a>
                        </li>
                        <li>
                          <a href="element-typed-text.html">
                            <span>Game Developers</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <NavLink to="/casestudies">Case Studies</NavLink>
                </li>
                <li className="has-children">
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* <!--====================  End of mobile menu overlay  ====================--> */}

      {/* <!--====================  search overlay ====================--> */}
      <div className="search-overlay" id="search-overlay">
        <div className="search-overlay__header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 ms-auto col-4">
                {/* <!-- search content --> */}
                <div className="search-content text-end">
                  <span
                    className="mobile-navigation-close-icon"
                    id="search-close-trigger"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-overlay__inner">
          <div className="search-overlay__body">
            <div className="search-overlay__form">
              <form action="#">
                <input type="text" placeholder="Search" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!--====================  End of search overlay  ====================--> */}
    </>
  );
};

export default Header;
