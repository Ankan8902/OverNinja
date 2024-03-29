import React from "react";

import heart from "../assets/images/svg/linea-basic-heart.svg";
import alarm from "../assets/images/svg/linea-basic-alarm.svg";
import basic from "../assets/images/svg/linea-basic-case.svg";
import geolocalize from "../assets/images/svg/linea-basic-geolocalize-05.svg";
import money from "../assets/images/svg/linea-ecommerce-money.svg";
import text from "../assets/images/svg/linea-basic-spread-text-bookmark.svg";

import home from "../assets/images/hero/home2.png";
import home2 from "../assets/images/hero/home-2.jpg";
import box from "../assets/images/box-image/blog-01-480x298.webp";
import info from "../assets/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.webp";
import info2 from "../assets/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.webp";
import logo from "../assets/images/brand/mitech-client-logo-01.webp";
import logo2 from "../assets/images/brand/mitech-client-logo-01-hover.webp";
import logo3 from "../assets/images/brand/mitech-client-logo-02.webp";
import logo4 from "../assets/images/brand/mitech-client-logo-02-hover.webp";
import logo5 from "../assets/images/brand/mitech-client-logo-03.webp";
import logo6 from "../assets/images/brand/mitech-client-logo-03-hover.webp";
import logo7 from "../assets/images/brand/mitech-client-logo-04.webp";
import logo8 from "../assets/images/brand/mitech-client-logo-04-hover.webp";
import logo9 from "../assets/images/brand/mitech-client-logo-05.webp";
import logo10 from "../assets/images/brand/mitech-client-logo-05-hover.webp";
import logo11 from "../assets/images/brand/mitech-client-logo-06.webp";
import logo12 from "../assets/images/brand/mitech-client-logo-06-hover.webp";
import logo13 from "../assets/images/brand/mitech-client-logo-07.webp";
import logo14 from "../assets/images/brand/mitech-client-logo-07.webp";
import logo15 from "../assets/images/brand/mitech-client-logo-08.webp";
import logo16 from "../assets/images/brand/mitech-client-logo-08-hover.webp";
import logo17 from "../assets/images/brand/mitech-client-logo-09.webp";
import logo18 from "../assets/images/brand/mitech-client-logo-09-hover.webp";

import award from "../assets/images/award/mitech-company-award-01-161x110.webp";
import award2 from "../assets/images/award/mitech-company-award-02-161x116.webp";
import award3 from "../assets/images/award/mitech-company-award-03-161x112.webp";
import award4 from "../assets/images/award/mitech-company-award-04-161x109.webp";

import member from "../assets/images/hero/home-3.jpg";
import member2 from "../assets/images/hero/home-4.jpg";
import member3 from "../assets/images/hero/home-5.jpg";
import member4 from "../assets/images/hero/home-6.jpg";

import study from "../assets/images/hero/home-7.jpg";
import study2 from "../assets/images/projects/case-study-02-480x298.webp";
import study3 from "../assets/images/projects/case-study-03-480x298.webp";
import study4 from "../assets/images/projects/case-study-04-480x298.webp";

import testimonial from "../assets/images/hero/logo-1.jpg";
import testimonial2 from "../assets/images/testimonial/mitech-testimonial-avata-03-90x90.webp";
import testimonial3 from "../assets/images/testimonial/mitech-testimonial-avata-04-90x90.webp";
import testimonial4 from "../assets/images/testimonial/mitech-testimonial-avata-01-90x90.webp";

import behance from "../assets/images/logo/behance.png";
import github from "../assets/images/logo/github.png";
import dribble from "../assets/images/logo/dribble.png";

import service from "../assets/images/hero/services.webp";

// import design from "../assets/images/hero/design.jpg";
// import webdev from "../assets/images/hero/web.jpg";
// import mobile from "../assets/images/hero/mobile.jpg";

// import mail from "../assets/php/hero-mail.php";
import services from "../assets/php/services-mail.php";
import { useState } from "react";

export const Home = () => {
  const [toggleState, setToggleState] = useState(1);
  const [togglestate, setTogglestate] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggletab = (index) => {
    setTogglestate(index);
  };

  return (
    <div id="main-wrapper">
      <div className="site-wrapper-reveal">
        {/* <!--=================Infotechno Hero Start======================--> */}
        <div className="processing-hero processing-hero-bg">
          <div className="container">
            <div className="row align-items-center">
              {/* <!--baseline--> */}
              <div className="col-lg-8 col-md-7">
                <div className="processing-hero-text wow move-up animated">
                  <h6>IT Software Design</h6>
                  <h1 className="font-weight--regular mb-15">
                    "Virtual Technology in a "
                    <span className="text-color-secondary">
                      Refined IT System
                    </span>
                  </h1>
                  <p>
                    Set the trends for desktop & server virtualization
                    technology
                  </p>
                  <div className="hero-button mt-30">
                    <a href="/" className="btn btn--secondary">
                      Learn more
                    </a>
                    <div className="hero-popup-video video-popup">
                      <a href="/" className="video-link">
                        <div className="video-content">
                          <div className="video-play">
                            <span className="video-play-icon">
                              <i className="fa fa-play"></i>
                            </span>
                          </div>
                          <div className="video-text">How we work</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5">
                <div className="processing-hero-images-wrap wow move-up animated">
                  <div className="processing-hero-images">
                    <img src={home} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--=============== Infotechno Hero End =======================--> */}

        {/* <!--============ Software Innovation Hero Start ============--> */}
        {/* <div class="software-innovation-hero-wrapper">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <div class="software-innovation-hero-wrap wow move-up">
                  <div class="software-innovation-hero-text">
                    <p class="sub-heading">Find your solution</p>
                    <h3>Best choice for your</h3>
                    <h1 class="font-weight--reguler mb-30">Startup. </h1>
                    <h6 class="info-heading">
                      The full set of services around development and
                      maintenance <br /> of complex business-critical
                      applications.
                    </h6>
                    <div class="hero-button  mt-30">
                      <a href="/" class="ht-btn ht-btn-md">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="software-innovation-hero-image animation_images three mt-30">
                  <img src={home} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!--============ Software Innovation Hero End ============--> */}

        {/* <!--===========  feature-icon-wrapper  Start =============--> */}
        <div className="feature-icon-wrapper section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h6 className="section-sub-title mb-20">
                    Industries we Serve
                  </h6>
                  <h3 className="heading">
                    Services We Deliver
                    <br /> we provide{" "}
                    <span className="text-color-primary">
                      {" "}
                      truly prominent IT solutions.
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="feature-list__two">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 wow move-up">
                      <div className="ht-box-icon style-02 single-svg-icon-box">
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <div
                              className="svg-icon"
                              id="svg-1"
                              data-svg-icon={heart}
                            >
                              <img src={heart} alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">IT Design </h5>
                            <div className="text">
                              We provide the most responsive and functional IT
                              design for companies and businesses worldwide.
                            </div>
                            <div className="feature-btn">
                              <a href="/">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow move-up">
                      <div className="ht-box-icon style-02 single-svg-icon-box">
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <div
                              className="svg-icon"
                              id="svg-2"
                              data-svg-icon={basic}
                            >
                              <img src={basic} alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">IT Management</h5>
                            <div className="text">
                              It's possible to simultaneously manage and
                              transform information from one server to another.
                            </div>
                            <div className="feature-btn">
                              <a href="/">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow move-up">
                      <div className="ht-box-icon style-02 single-svg-icon-box">
                        {/* <!-- ht-box-icon Start --> */}
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <div
                              className="svg-icon"
                              id="svg-3"
                              data-svg-icon={alarm}
                            >
                              <img src={alarm} alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Data Security</h5>
                            <div className="text">
                              We provide the most responsive and functional IT
                              design for companies and businesses worldwide.
                            </div>
                            <div className="feature-btn">
                              <a href="/">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ht-box-icon End --> */}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow move-up">
                      <div className="ht-box-icon style-02 single-svg-icon-box">
                        {/* <!-- ht-box-icon Start --> */}
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <div
                              className="svg-icon"
                              id="svg-4"
                              data-svg-icon={geolocalize}
                            >
                              <img src={geolocalize} alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Business Reform</h5>
                            <div className="text">
                              We provide the most responsive and functional IT
                              design for companies and businesses worldwide.
                            </div>
                            <div className="feature-btn">
                              <a href="/">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ht-box-icon End --> */}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow move-up">
                      <div className="ht-box-icon style-02 single-svg-icon-box">
                        {/* <!-- ht-box-icon Start --> */}
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <div
                              className="svg-icon"
                              id="svg-5"
                              data-svg-icon={money}
                            >
                              <img src={money} alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Infrastructure Plan</h5>
                            <div className="text">
                              We provide the most responsive and functional IT
                              design for companies and businesses worldwide.
                            </div>
                            <div className="feature-btn">
                              <a href="/">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ht-box-icon End --> */}
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow move-up">
                      <div className="ht-box-icon style-02 single-svg-icon-box">
                        {/* <!-- ht-box-icon Start --> */}
                        <div className="icon-box-wrap">
                          <div className="icon">
                            <div
                              className="svg-icon"
                              id="svg-6"
                              data-svg-icon={text}
                            >
                              <img src={text} alt="" />
                            </div>
                          </div>
                          <div className="content">
                            <h5 className="heading">Firewall Advance</h5>
                            <div className="text">
                              We provide the most responsive and functional IT
                              design for companies and businesses worldwide.
                            </div>
                            <div className="feature-btn">
                              <a href="/">
                                <span className="button-text">
                                  Discover now
                                </span>
                                <i className="far fa-long-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!-- ht-box-icon End --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="feature-list-button-box mt-30 text-center">
                  <a href="/" className="ht-btn ht-btn-md">
                    Talk to a consultant
                  </a>
                  <a href="/" className="ht-btn ht-btn-md ht-btn--outline">
                    Contact us now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--===========  feature-icon-wrapper  End =============--> */}

        {/* <!--======== Tabs Wrapper Start ======== --> */}
        <div className="tabs-wrapper bg-gray section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
                  <h6 className="section-sub-title mb-20">
                    discover our company
                  </h6>
                  <h3 className="section-title">
                    We've been thriving in
                    <span className="text-color-primary"> 38 years</span>{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 ht-tab-wrap">
                <div className="text-center  ">
                  <ul
                    className="nav justify-content-center ht-tab-menu ht-tab-menu_two"
                    role="tablist"
                  >
                    <li
                      className="tab__item nav-item active"
                      onClick={() => toggleTab(1)}
                    >
                      <a
                        className={
                          toggleState === 1 ? "nav-link active" : "nav-link"
                        }
                        id="nav-tab1"
                        data-bs-toggle="tab"
                        href="#tab_list_06"
                        role="tab"
                        aria-selected={toggleState === 1 ? "true" : "false"}
                      >
                        Our mission
                      </a>
                    </li>
                    <li
                      className="tab__item nav-item"
                      onClick={() => toggleTab(2)}
                    >
                      <a
                        className={
                          toggleState === 2 ? "nav-link active" : "nav-link"
                        }
                        id="nav-tab2"
                        data-bs-toggle="tab"
                        href="#tab_list_07"
                        role="tab"
                        aria-selected={toggleState === 2 ? "true" : "false"}
                      >
                        Our services
                      </a>
                    </li>
                    <li
                      className="tab__item nav-item "
                      onClick={() => toggleTab(3)}
                    >
                      <a
                        className={
                          toggleState === 3 ? "nav-link active" : "nav-link"
                        }
                        id="nav-tab3"
                        data-bs-toggle="tab"
                        href="#tab_list_08"
                        role="tab"
                        aria-selected={toggleState === 3 ? "true" : "false"}
                      >
                        Technology partners
                      </a>
                    </li>
                    <li
                      className="tab__item nav-item "
                      onClick={() => toggleTab(4)}
                    >
                      <a
                        className={
                          toggleState === 4 ? "nav-link active" : "nav-link"
                        }
                        id="nav-tab5"
                        data-bs-toggle="tab"
                        href="#tab_list_09"
                        role="tab"
                        aria-selected={toggleState === 4 ? "true" : "false"}
                      >
                        Our awards
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content ht-tab__content">
                  <div
                    className={
                      toggleState === 1
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                    id="tab_list_06"
                    role="tabpanel"
                  >
                    <div className="tab-history-wrap section-space--mt_40">
                      <div className="row">
                        <div className="col-lg-6 ">
                          <div className="tab-history-image video-popup mt-30">
                            <a
                              href="https://www.youtube.com/watch?v=9No-FiEInLAv"
                              className="video-link"
                            >
                              <div className="single-popup-wrap">
                                <img className="img-fluid" src={home2} alt="" />
                                <div className="ht-popup-video video-button">
                                  <div className="video-mark">
                                    <div className="wave-pulse wave-pulse-1"></div>
                                    <div className="wave-pulse wave-pulse-2"></div>
                                  </div>
                                  <div className="video-button__two">
                                    <div className="video-play">
                                      <span className="video-play-icon"></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 ">
                          <div className="tab-content-inner  mt-30">
                            <div className="text mb-30">
                              We're available for 8 hours a day! <br />
                              Contact to require a detailed analysis and
                              assessment of your plan.
                            </div>
                            <ul className="check-list section-space--mb_40">
                              <li className="list-item">IT Consultancy </li>
                              <li className="list-item">IT Design </li>
                              <li className="list-item">Desktop Computing </li>
                              <li className="list-item">
                                Software Engineering{" "}
                              </li>
                            </ul>

                            <div className="tab-button">
                              <a className="btn-text" href="/">
                                <span className="button-text">
                                  Let's get started{" "}
                                  <i className="far fa-long-arrow-right"></i>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 2
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                    id="tab_list_07"
                    role="tabpanel"
                  >
                    <div className="tab-history-wrap section-space--mt_60">
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" className="ht-large-box-images style-04">
                            <div className="large-image-box">
                              <div className="box-image">
                                <div className="default-image">
                                  <img className="img-fluid" src={box} alt="" />
                                </div>
                              </div>
                              <div className="content">
                                <h5 className="heading">
                                  Quality Assurance System
                                </h5>
                                <div className="text">
                                  At Mitech, we have a holistic and integrated
                                  approach towards core modernization to
                                  experience technological evolution.
                                </div>

                                <div className="box-images-arrow">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" className="ht-large-box-images style-04">
                            <div className="large-image-box">
                              <div className="box-image">
                                <div className="default-image">
                                  <img
                                    className="img-fluid"
                                    src={info}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="content">
                                <h5 className="heading">
                                  Highly Professional Staffs
                                </h5>
                                <div className="text">
                                  Having obtained the official & formal training
                                  in IT technology and technical fields, our
                                  staffs know best.
                                </div>
                                <div className="box-images-arrow">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                          {/* <!-- ht-box-icon Start --> */}
                          <a href="/" className="ht-large-box-images style-04">
                            <div className="large-image-box">
                              <div className="box-image">
                                <div className="default-image">
                                  <img
                                    className="img-fluid"
                                    src={info2}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="content">
                                <h5 className="heading">
                                  Info Security Management
                                </h5>
                                <div className="text">
                                  At Mitech, we have a holistic and integrated
                                  approach towards core modernization to
                                  experience technological evolution.
                                </div>
                                <div className="box-images-arrow">
                                  <span className="button-text">
                                    Discover now
                                  </span>
                                  <i className="far fa-long-arrow-right"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- ht-box-icon End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- ht-box-icon End --> */}
                  </div>
                  <div
                    className={
                      toggleState === 3
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                    id="tab_list_08"
                    role="tabpanel"
                  >
                    <div className="tab-history-wrap section-space--mt_60 brand-logo-slider__one">
                      <div className="modern-grid--6">
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo2} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo3} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo4} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo5} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo6} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo7} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo8} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo9} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo10} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo11} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo12} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo13} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo14} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo15} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo16} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                        <div className="brand-logo brand-logo--slider">
                          <a href="/">
                            <div className="brand-logo__image">
                              <img src={logo17} className="img-fluid" alt="" />
                            </div>
                            <div className="brand-logo__image-hover">
                              <img src={logo18} className="img-fluid" alt="" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 4
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                    id="tab_list_09"
                    role="tabpanel"
                  >
                    <div className="tab-history-wrap section-space--mt_20">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="ht-box-images style-08 move-up animate">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <div className="image">
                                  <img src={award} alt="" />
                                </div>
                              </div>
                              <div className="content">
                                <h6 className="heading">
                                  {" "}
                                  Top Training Companies 2016{" "}
                                </h6>
                                <div className="text">
                                  More than 40 years ago, our company's
                                  namesake, LineThemes, pioneered a
                                  revolutionary sales training program for
                                  businesses of every size.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="ht-box-images style-08 move-up animate">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <div className="image">
                                  <img src={award2} alt="" />
                                </div>
                              </div>
                              <div className="content">
                                <h6 className="heading">CIO Big Data 100 </h6>
                                <div className="text">
                                  More than 40 years ago, our company's
                                  namesake, LineThemes, pioneered a
                                  revolutionary sales training program for
                                  businesses of every size.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="ht-box-images style-08 move-up animate">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <div className="image">
                                  <img src={award3} alt="" />
                                </div>
                              </div>
                              <div className="content">
                                <h6 className="heading">
                                  Top 20 Sales Training Companies 2015{" "}
                                </h6>
                                <div className="text">
                                  More than 40 years ago, our company's
                                  namesake, LineThemes, pioneered a
                                  revolutionary sales training program for
                                  businesses of every size.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="ht-box-images style-08 move-up animate">
                            <div className="image-box-wrap">
                              <div className="box-image">
                                <div className="image">
                                  <img src={award4} alt="" />
                                </div>
                              </div>
                              <div className="content">
                                <h6 className="heading">
                                  Pharma Tech Outlook{" "}
                                </h6>
                                <div className="text">
                                  More than 40 years ago, our company's
                                  namesake, LineThemes, pioneered a
                                  revolutionary sales training program for
                                  businesses of every size.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--======== Tabs Wrapper End ======== --> */}

        {/* <!-- ============ Team Member Wrapper Start =============== --> */}
        <div className="team-member-wrapper section-space--pt_100 section-space--pb_40">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-title section-space--mb_60">
                  <h3 className="heading">
                    Our <span className="text-color-primary">experience </span>{" "}
                    experts
                  </h3>
                  <p className="text mt-30">
                    Mitech specializes in technological and IT-related services
                    such as product engineering, warranty management, building
                    cloud, infrastructure, network, etc.{" "}
                  </p>

                  <div className="sider-title-button-box mt-30">
                    <a href="/" className="ht-btn ht-btn-md">
                      Join us now
                    </a>
                    <a
                      href="/"
                      className="btn-text font-weight--bold small-mt__20"
                    >
                      View all team{" "}
                      <i className="ml-1 button-icon far fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 ht-team-member-style-one">
                <div className="row">
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img className="img-fluid" src={member} alt="" />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="/"
                                className="hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Dollie Horton </h5>
                          <div className="position">Marketing</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img className="img-fluid" src={member2} alt="" />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Stephen Mearsley </h5>
                          <div className="position">President & CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img className="img-fluid" src={member3} alt="" />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Maggie Strickland </h5>
                          <div className="position">Financial Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 wow move-up">
                    <div className="grid-item">
                      <div className="ht-team-member">
                        <div className="team-image">
                          <img className="img-fluid" src={member4} alt="" />
                          <div className="social-networks">
                            <div className="inner">
                              <a
                                target="_blan/"
                                href="/"
                                className=" hint--bounce  hint--top hint--theme-two"
                                aria-label="Facebook"
                              >
                                <i className="fab fa-facebook"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Twitter"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a
                                target="_blank"
                                href="/"
                                className=" hint--bounce hint--top hint--theme-two"
                                aria-label="Instagram"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="team-info ">
                          <h5 className="name">Monica Blews</h5>
                          <div className="position">Project manager</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ============ Team Member Wrapper End =============== --> */}

        {/* <!-- =========================Our Platforms========================= --> */}

        <div id="main-wrapper">
          <div class="site-wrapper-reveal">
            {/* <!--========= Pricing Table Area Start ==========--> */}
            <div class="pricing-table-area section-space--ptb_100 bg-gray">
              <div class="pricing-table-title-area position-relative">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="section-title-wrapper text-center section-space--mb_60 wow move-up">
                        <h6 class="section-sub-title mb-20">Other Platforms</h6>
                        <h3 class="section-title">
                          Our Work Proof Across a Variety of{" "}
                          <span class="text-color-primary">Domains</span>{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pricing-table-content-area">
                <div class="container">
                  <div class="row pricing-table-one">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table wow move-up">
                      <div class="pricing-table__inner">
                        <div class="pricing-table__header">
                          <h6 class="sub-title">DRIBBLE</h6>
                          <div class="pricing-table__image">
                            <img src={dribble} class="dribble" alt="" />
                          </div>
                        </div>
                        <div class="pricing-table__body">
                          <div class="pricing-table__footer">
                            <a
                              href="/"
                              class="ht-btn ht-btn-md ht-btn--outline"
                            >
                              Get started
                            </a>
                          </div>
                          <ul class="pricing-table__list text-left">
                            <li>03 projects</li>
                            <li>Quality &amp; Customer Experience</li>
                            <li>
                              <span class="featured">
                                Try for free, forever!
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table pricing-table--popular wow move-up">
                      <div class="pricing-table__inner">
                        <div class="pricing-table__header">
                          <h6 class="sub-title">BEHANCE</h6>
                          <div class="pricing-table__image">
                            <img src={behance} class="behance" alt="" />
                          </div>
                        </div>
                        <div class="pricing-table__body">
                          <div class="pricing-table__footer">
                            <a href="/" class="ht-btn  ht-btn-md ">
                              Get started
                            </a>
                          </div>
                          <ul class="pricing-table__list text-left">
                            <li>Unlimited project</li>
                            <li>Power And Predictive Dialing</li>
                            <li>Quality &amp; Customer Experience</li>
                            <li>24/7 phone and email support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-4 pricing-table wow move-up">
                      <div class="pricing-table__inner">
                        <div class="pricing-table__header">
                          <h6 class="sub-title">GITHUB</h6>
                          <div class="pricing-table__image">
                            <img src={github} class="behance" alt="" />
                          </div>
                        </div>
                        <div class="pricing-table__body">
                          <div class="pricing-table__footer">
                            <a
                              href="/"
                              class="ht-btn ht-btn-md ht-btn--outline"
                            >
                              Get started
                            </a>
                          </div>
                          <ul class="pricing-table__list text-left">
                            <li>10 projects</li>
                            <li>Power And Predictive Dialing </li>
                            <li>Quality &amp; Customer Experience </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--========= Pricing Table Area End ==========--> */}
          </div>

          {/* <---Our Services----> */}
          <div className="tabs-wrapper bg-gray section-space--ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
                    <h6 className="section-sub-title mb-20">Our Services</h6>
                    <h3 className="section-title">
                      We've been thriving in
                      <span className="text-color-primary"> 38 years</span>{" "}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 ht-tab-wrap">
                  <div className="text-center  ">
                    <ul
                      className="nav justify-content-center ht-tab-menu ht-tab-menu_two"
                      role="tablist"
                    >
                      <li
                        className="tab__item nav-item active"
                        onClick={() => toggletab(1)}
                      >
                        <a
                          className={
                            togglestate === 1 ? "nav-link active" : "nav-link"
                          }
                          id="nav-tab1"
                          data-bs-toggle="tab"
                          href="#tab_list_06"
                          role="tab"
                          aria-selected={togglestate === 1 ? "true" : "false"}
                        >
                          Design
                        </a>
                      </li>
                      <li
                        className="tab__item nav-item"
                        onClick={() => toggletab(2)}
                      >
                        <a
                          className={
                            togglestate === 2 ? "nav-link active" : "nav-link"
                          }
                          id="nav-tab2"
                          data-bs-toggle="tab"
                          href="#tab_list_07"
                          role="tab"
                          aria-selected={togglestate === 2 ? "true" : "false"}
                        >
                          Web Development
                        </a>
                      </li>
                      <li
                        className="tab__item nav-item "
                        onClick={() => toggletab(3)}
                      >
                        <a
                          className={
                            togglestate === 3 ? "nav-link active" : "nav-link"
                          }
                          id="nav-tab3"
                          data-bs-toggle="tab"
                          href="#tab_list_08"
                          role="tab"
                          aria-selected={togglestate === 3 ? "true" : "false"}
                        >
                          Mobile App Development
                        </a>
                      </li>
                      <li
                        className="tab__item nav-item "
                        onClick={() => toggletab(4)}
                      >
                        <a
                          className={
                            togglestate === 4 ? "nav-link active" : "nav-link"
                          }
                          id="nav-tab5"
                          data-bs-toggle="tab"
                          href="#tab_list_09"
                          role="tab"
                          aria-selected={togglestate === 4 ? "true" : "false"}
                        >
                          Game Development
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content ht-tab__content">
                    <div
                      className={
                        togglestate === 1
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="tab_list_10"
                      role="tabpanel"
                    >
                      <div className="tab-history-wrap section-space--mt_40">
                        <div className="row">
                          <div class="technology-service-area technology-service-bg">
                            <div class="container">
                              <div class="row align-items-center">
                                <div class="col-lg-6">
                                  <div class="section-title section-space--pt_60">
                                    <p class="text-white font-weight--bold">
                                      OUR TECHNOLOGY
                                    </p>
                                    <h3 class="text-white">
                                      <span class="text-color-secondary">
                                        Mitech
                                      </span>{" "}
                                      - Top Software Development Technology
                                    </h3>
                                    <p class="text-infos text-white mt-30">
                                      Our strong passion to modern tech trends
                                      and best practices drive in the
                                      development of top-notch solutions that
                                      are perfectly tailored to provide high
                                      quality and affordable software
                                      outsourcing solutions to growing startup
                                      and enterprise companies in the world.
                                    </p>

                                    <div class="single-button-group">
                                      <div class="button-group-wrap mt-30">
                                        {/* <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ASP. NET Core
                                        </a> */}
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          FIGMA
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ADOBE XD
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ADOBE PHOTOSHOP
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ADOBE ILLUSTRATOR
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ADOBE AFTER EFFECT
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="banner-image section-space--pt_60">
                                    <img
                                      src={service}
                                      class="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        togglestate === 2
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="tab_list_10"
                      role="tabpanel"
                    >
                      <div className="tab-history-wrap section-space--mt_40">
                        <div className="row">
                          <div class="technology-service-area technology-service-bg">
                            <div class="container">
                              <div class="row align-items-center">
                                <div class="col-lg-6">
                                  <div class="section-title section-space--pt_60">
                                    <p class="text-white font-weight--bold">
                                      OUR TECHNOLOGY
                                    </p>
                                    <h3 class="text-white">
                                      <span class="text-color-secondary">
                                        Mitech
                                      </span>{" "}
                                      - Top Software Development Technology
                                    </h3>
                                    <p class="text-infos text-white mt-30">
                                      Our strong passion to modern tech trends
                                      and best practices drive in the
                                      development of top-notch solutions that
                                      are perfectly tailored to provide high
                                      quality and affordable software
                                      outsourcing solutions to growing startup
                                      and enterprise companies in the world.
                                    </p>

                                    <div class="single-button-group">
                                      <div class="button-group-wrap mt-30">
                                        {/* <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ASP. NET Core
                                        </a> */}
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ANGULAR
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          REACT JS
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          NODE JS
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          GOLANG
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          TAILWIND CSS
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="banner-image section-space--pt_60">
                                    <img
                                      src={service}
                                      class="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        togglestate === 3
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="tab_list_10"
                      role="tabpanel"
                    >
                      <div className="tab-history-wrap section-space--mt_40">
                        <div className="row">
                          <div class="technology-service-area technology-service-bg">
                            <div class="container">
                              <div class="row align-items-center">
                                <div class="col-lg-6">
                                  <div class="section-title section-space--pt_60">
                                    <p class="text-white font-weight--bold">
                                      OUR TECHNOLOGY
                                    </p>
                                    <h3 class="text-white">
                                      <span class="text-color-secondary">
                                        Mitech
                                      </span>{" "}
                                      - Top Software Development Technology
                                    </h3>
                                    <p class="text-infos text-white mt-30">
                                      Our strong passion to modern tech trends
                                      and best practices drive in the
                                      development of top-notch solutions that
                                      are perfectly tailored to provide high
                                      quality and affordable software
                                      outsourcing solutions to growing startup
                                      and enterprise companies in the world.
                                    </p>

                                    <div class="single-button-group">
                                      <div class="button-group-wrap mt-30">
                                        {/* <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ASP. NET Core
                                        </a> */}
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ANDROID
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          FLUTTER
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          REACT JS
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          IOS
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          FIREBASE
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="banner-image section-space--pt_60">
                                    <img
                                      src={service}
                                      class="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        togglestate === 4
                          ? "tab-pane fade show active"
                          : "tab-pane fade"
                      }
                      id="tab_list_10"
                      role="tabpanel"
                    >
                      <div className="tab-history-wrap section-space--mt_40">
                        <div className="row">
                          <div class="technology-service-area technology-service-bg">
                            <div class="container">
                              <div class="row align-items-center">
                                <div class="col-lg-6">
                                  <div class="section-title section-space--pt_60">
                                    <p class="text-white font-weight--bold">
                                      OUR TECHNOLOGY
                                    </p>
                                    <h3 class="text-white">
                                      <span class="text-color-secondary">
                                        Mitech
                                      </span>{" "}
                                      - Top Software Development Technology
                                    </h3>
                                    <p class="text-infos text-white mt-30">
                                      Our strong passion to modern tech trends
                                      and best practices drive in the
                                      development of top-notch solutions that
                                      are perfectly tailored to provide high
                                      quality and affordable software
                                      outsourcing solutions to growing startup
                                      and enterprise companies in the world.
                                    </p>

                                    <div class="single-button-group">
                                      <div class="button-group-wrap mt-30">
                                        {/* <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          ASP. NET Core
                                        </a> */}
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          UNITY
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          UNREAL ENGINE
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          SPRITE KIT
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          CORONA SDK
                                        </a>
                                        <a
                                          href="/"
                                          class="ht-btn ht-btn-md ht-btn--outline"
                                        >
                                          MARMALADE SDK
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-lg-6">
                                  <div class="banner-image section-space--pt_60">
                                    <img
                                      src={service}
                                      class="img-fluid"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--========== Call to Action Area Start ============--> */}
          <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-8 col-lg-7">
                  <div class="cta-content md-text-center">
                    <h3 class="heading text-white">
                      We run all kinds of IT services that vow your{" "}
                      <span class="text-color-secondary"> success</span>
                    </h3>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="cta-button-group--one text-center">
                    <a href="/" class="btn btn--white btn-one">
                      <span class="btn-icon me-2">
                        <i class="far fa-comment-alt-dots"></i>
                      </span>{" "}
                      Let's talk
                    </a>
                    <a href="/" class="btn btn--secondary  btn-two">
                      <span class="btn-icon me-2">
                        <i class="far fa-info-circle"></i>
                      </span>{" "}
                      Get info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--========== Call to Action Area End ============--> */}

          {/* <!--===========  Projects wrapper Start =============--> */}
          <div className="projects-wrapper projectinfotechno-bg section-space--ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* <!-- section-title-wrap Start --> */}
                  <div className="section-title-wrap text-center section-space--mb_40">
                    <h6 className="section-sub-title mb-20">Case studies</h6>
                    <h3 className="heading">
                      Proud projects{" "}
                      <span className="text-color-primary"> make us excel</span>
                    </h3>
                  </div>
                  {/* <!-- section-title-wrap Start --> */}
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="projects-wrap swiper-container projects-slider__container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {/* <!-- Projects Wrap Start --> */}
                        <a
                          href="/"
                          className="projects-wrap style-01 wow move-up"
                        >
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src={study} alt="" />
                            </div>
                            <div className="content">
                              <h6 className="heading">Mitech-Smart Vision</h6>
                              <div className="post-categories">
                                Cyber Security
                              </div>
                              <div className="text">
                                At Mitech, we have a holistic and integrated
                                approach towards core modernization to
                                experience technological evolution.
                              </div>
                              <div className="box-projects-arrow">
                                <span className="button-text">
                                  View case study
                                </span>
                                <i className="fa fa-long-arrow-right ml-1"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                        {/* <!-- Projects Wrap End --> */}
                      </div>

                      <div className="swiper-slide">
                        {/* <!-- Projects Wrap Start --> */}
                        <a
                          href="/"
                          className="projects-wrap style-01 wow move-up"
                        >
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src={study2} alt="" />
                            </div>
                            <div className="content">
                              <h6 className="heading">
                                Arden-Internal Networking
                              </h6>
                              <div className="post-categories">
                                Cyber Security
                              </div>
                              <div className="text">
                                The prospects for a company operating in this
                                new market are varied and exciting. The
                                potential …
                              </div>
                              <div className="box-projects-arrow">
                                <span className="button-text">
                                  View case study
                                </span>
                                <i className="fa fa-long-arrow-right ml-1"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                        {/* <!-- Projects Wrap End --> */}
                      </div>

                      <div className="swiper-slide">
                        {/* <!-- Projects Wrap Start --> */}
                        <a
                          href="/"
                          className="projects-wrap style-01 wow move-up"
                        >
                          <div className="projects-image-box">
                            <div className="projects-image">
                              <img className="img-fluid" src={study3} alt="" />
                            </div>
                            <div className="content">
                              <h6 className="heading">
                                A Freeserve case study
                              </h6>
                              <div className="post-categories">
                                Cyber Security
                              </div>
                              <div className="text">
                                The prospects for a company operating in this
                                new market are varied and exciting. The
                                potential …
                              </div>
                              <div className="box-projects-arrow">
                                <span className="button-text">
                                  View case study
                                </span>
                                <i className="fa fa-long-arrow-right ml-1"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                        {/* <!-- Projects Wrap End --> */}
                      </div>

                      <div className="swiper-slide">
                        {/* <!-- Projects Wrap Start --> */}
                        <div>
                          <a
                            href="/"
                            className="projects-wrap style-01 wow move-up"
                          >
                            <div className="projects-image-box">
                              <div className="projects-image">
                                <img
                                  className="img-fluid"
                                  src={study4}
                                  alt=""
                                />
                              </div>
                              <div className="content">
                                <h6 className="heading">
                                  Aqua - Research and Energy
                                </h6>
                                <div className="post-categories">
                                  Cyber Security
                                </div>
                                <div className="text">
                                  The prospects for a company operating in this
                                  new market are varied and exciting. The
                                  potential …
                                </div>
                                <div className="box-projects-arrow">
                                  <span className="button-text">
                                    View case study
                                  </span>
                                  <i className="fa fa-long-arrow-right ml-1"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          {/* <!-- Projects Wrap End --> */}
                        </div>
                      </div>
                      <div className="swiper-pagination swiper-pagination-project mt_20"></div>
                    </div>

                    {/* <div className="section-under-heading text-center section-space--mt_40">
                    Challenges are just opportunities in disguise.{" "}
                    <a href="/">Take the challenge!</a>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!--===========  Projects wrapper End =============--> */}

            {/* <!--=================== Hire Developers===============--> */}
            {/* <!--====================  Contact us Section Start ====================--> */}
            <div class="contact-us-section-wrappaer infotechno-contact-us-bg section-space--ptb_120">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-6 col-lg-6">
                    <div class="conact-us-wrap-one">
                      <h3 class="heading">
                        Hire Dedicated{" "}
                        <span class="text-color-primary">Developers</span>{" "}
                        {/* with our experienced IT staffs.{" "} */}
                      </h3>

                      <div class="sub-heading">
                        We're the web/app development and design team that walks
                        the talk!
                        {/* <br /> */}
                        We take your Vision, Solve the challenges. From
                        technology query to solution, delivering you value for
                        your money with a quality product that is worthy of your
                        reputation.
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-lg-6">
                    <div class="contact-info-one text-center">
                      {/* <div class="icon">
                      <span class="fal fa-phone"></span>
                    </div>
                    <h6 class="heading font-weight--reguler">Reach out now!</h6>
                    <h2 class="call-us">
                      <a href="tel:190068668">1900 68668</a>
                    </h2> */}
                      <div class="contact-us-button mt-20">
                        <a href="/" class="btn btn--secondary">
                          Hire Developers Now!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--====================  Conact us Section End  ====================--> */}

            {/* <!--====================  testimonial section ====================--> */}
            <div className="testimonial-slider-area bg-gray section-space--ptb_100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-wrap text-center section-space--mb_40">
                      <h6 className="section-sub-title mb-20">Testimonials</h6>
                      <h3 className="heading">
                        What do people praise about{" "}
                        <span className="text-color-primary"> Mitech?</span>
                      </h3>
                    </div>
                    <div className="testimonial-slider">
                      <div className="swiper-container testimonial-slider__container">
                        <div className="swiper-wrapper testimonial-slider__wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-slider__one wow move-up">
                              <div className="testimonial-slider--info">
                                <div className="testimonial-slider__media">
                                  <img
                                    src={testimonial}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div className="testimonial-slider__author">
                                  <div className="testimonial-rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </div>
                                  <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">
                                      Marketing
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-slider__one wow move-up">
                              <div className="testimonial-slider--info">
                                <div className="testimonial-slider__media">
                                  <img
                                    src={testimonial2}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div className="testimonial-slider__author">
                                  <div className="testimonial-rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </div>
                                  <div className="author-info">
                                    <h6 className="name">Monica Blews</h6>
                                    <span className="designation">
                                      Web designer
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-slider__one wow move-up">
                              <div className="testimonial-slider--info">
                                <div className="testimonial-slider__media">
                                  <img
                                    src={testimonial3}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div className="testimonial-slider__author">
                                  <div className="testimonial-rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </div>
                                  <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">
                                      WEB DESIGNER
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-slider__one wow move-up">
                              <div className="testimonial-slider--info">
                                <div className="testimonial-slider__media">
                                  <img
                                    src={testimonial4}
                                    className="img-fluid"
                                    alt=""
                                  />
                                </div>

                                <div className="testimonial-slider__author">
                                  <div className="testimonial-rating">
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                  </div>
                                  <div className="author-info">
                                    <h6 className="name">Abbie Ferguson</h6>
                                    <span className="designation">
                                      WEB DESIGNER
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="testimonial-slider__text">
                                I've been working with over 35 IT companies on
                                more than 200 projects of our company, but
                                @Mitech is one of the most impressive to me.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-t01 section-space--mt_30"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--====================  End of testimonial section  ====================--> */}

            {/* <!--=========== fun fact Wrapper Start ==========--> */}
            <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">120</div>
                      <h6 className="fun-fact__text">Happy clients</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">32</div>
                      <h6 className="fun-fact__text">Finished projects</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">73</div>
                      <h6 className="fun-fact__text">Skilled Experts</h6>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 wow move-up">
                    <div className="fun-fact--two text-center">
                      <div className="fun-fact__count counter">318</div>
                      <h6 className="fun-fact__text">Media Posts</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--=========== fun fact Wrapper End ==========--> */}

            {/* <!--============ Contact Us Area Start =================--> */}
            <div className="contact-us-area appointment-contact-bg section-space--ptb_100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact-title section-space--mb_50">
                      <h3 className="mb-20">Need a hand?</h3>
                      <p className="sub-title">
                        Reach out to the world's most reliable IT services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-form-wrap">
                      {/* <!-- <forv className="contact-form" id="contact-form-2" action="https://whizthemes.com/mail-php/jowel/mitech/php/services-mail.php" method="post"> --> */}
                      <form
                        className="contact-form"
                        id="contact-form-2"
                        action={services}
                        method="post"
                      >
                        <div className="contact-form__two">
                          <div className="contact-input">
                            <div className="contact-inner">
                              <input
                                name="con_name"
                                type="text"
                                placeholder="Name *"
                              />
                            </div>
                            <div className="contact-inner">
                              <input
                                name="con_email"
                                type="email"
                                placeholder="Email *"
                              />
                            </div>
                          </div>
                          <div className="contact-select">
                            <div className="contact-inner">
                              <input
                                name="con_contact"
                                type="contact"
                                placeholder="Contact No. *"
                              />
                            </div>
                            {/* <div className="form-item contact-inner">
                                <span className="inquiry">
                                  <select id="Visiting" name="Visiting">
                                    <option defaultValue="Select Department to email"></option>
                                    <option defaultValue="Your inquiry about"></option>
                                    <option defaultValue="General Information Request"></option>
                                    <option defaultValue="Partner Relations"></option>
                                    <option defaultValue="Careers">
                                      Careers
                                    </option>
                                    <option defaultValue="Software Licencing"></option>
                                  </select>
                                </span>
                              </div> */}
                          </div>
                          <div className="contact-inner contact-message">
                            <textarea
                              name="con_message"
                              placeholder="Please describe what you need."
                            ></textarea>
                          </div>
                          <div className="comment-submit-btn">
                            <button className="ht-btn ht-btn-md" type="submit">
                              Get a free consultation
                            </button>
                            <p className="form-messege-2"></p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5 ms-auto">
                    <div className="contact-info-three text-left">
                      <h6 className="heading font-weight--reguler">
                        Reach out now!
                      </h6>
                      <h3 className="call-us">
                        <a href="/">(+00) 123 567990</a>
                      </h3>
                      <div className="text">
                        Start the collaboration with us while figuring out the
                        best solution based on your needs.
                      </div>
                      <div className="location-button mt-20">
                        <div>
                          <a href="/" className="location-text-button">
                            <span className="button-icon"></span>{" "}
                            <span className="button-text">
                              View on Google map
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--============ Contact Us Area End =================--> */}
          </div>
        </div>
      </div>
    </div>
  );
};
