import React from "react";

import "../assets/css/vendor/bootstrap.min.css";
import "../assets/css/vendor/cerebrisans.css";
import "../assets/css/vendor/fontawesome-all.min.css";
import "../assets/css/vendor/linea-icons.css";
import "../assets/css/plugins/swiper.min.css";
import "../assets/css/plugins/animate-text.css";
import "../assets/css/plugins/animate.min.css";
import "../assets/css/plugins/lightgallery.min.css";
import "../assets/css/style.css";

import logo from "../assets/images/logo/dark-logo-160x48.webp";
import google from "../assets/images/icons/aeroland-button-google-play.webp";
import app from "../assets/images/icons/aeroland-button-app-store.webp";

export const Footer = () => {
  return (
    <>
      {/* <!--====================  footer area ====================--> */}
      <div className="footer-area-wrapper bg-gray">
        <div className="footer-area section-space--ptb_80">
          <div className="container">
            <div className="row footer-widget-wrapper">
              <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                <div className="footer-widget__logo mb-30">
                  <img src={logo} className="img-fluid" alt="" />
                  {/* assets/images/logo/dark-logo-160x48.webp */}
                  {/* width="160" height="48v */}
                </div>
                <ul className="footer-widget__list">
                  <li>58 Howard Street #2 San Francisco, CA 941</li>
                  <li>
                    <a
                      href="mailto:contact@aeroland.com"
                      className="hover-style-link"
                    >
                      contact@aeroland.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:123344556"
                      className="hover-style-link text-black font-weight--bold"
                    >
                      (+68)1221 09876
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hasthemes.com/"
                      className="hover-style-link text-color-primary"
                    >
                      www.mitech.xperts.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">IT Services</h6>
                <ul className="footer-widget__list">
                  <li>
                    <a href="/" className="hover-style-link">
                      Managed IT
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      IT Support
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      IT Consultancy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">Quick links</h6>
                <ul className="footer-widget__list">
                  <li>
                    <a href="/" className="hover-style-link">
                      Pick up locations
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Terms of Payment
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Where to Find Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">Support</h6>
                <ul className="footer-widget__list">
                  <li>
                    <a href="/" className="hover-style-link">
                      Forum Support
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Help & FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Pricing and plans
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover-style-link">
                      Cookies Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <div className="footer-widget__title section-space--mb_50"></div>
                <ul className="footer-widget__list">
                  <li>
                    <a href="/" className="image_btn">
                      <img className="img-fluid" src={google} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/" className="image_btn">
                      <img className="img-fluid" src={app} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-area section-space--pb_30">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start">
                <span className="copyright-text">
                  &copy; 2021 Mitech.{" "}
                  <a href="https://hasthemes.com/">All Rights Reserved.</a>
                </span>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="list ht-social-networks solid-rounded-icon">
                  <li className="item">
                    <a
                      href="https://twitter.com"
                      aria-label="Twitter"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-twitter link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://facebook.com"
                      aria-label="Facebook"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-facebook-f link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://instagram.com"
                      aria-label="Instagram"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-instagram link-icon"></i>
                    </a>
                  </li>
                  <li className="item">
                    <a
                      href="https://linkedin.com"
                      aria-label="Linkedin"
                      className="social-link hint--bounce hint--top hint--primary"
                    >
                      <i className="fab fa-linkedin link-icon"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--====================  End of footer area  ====================--> */}
    </>
  );
};
