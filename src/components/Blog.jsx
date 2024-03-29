import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/hero/blog-1.jpg";
import image2 from "../assets/images/hero/blog-2.jpg";
import image3 from "../assets/images/hero/blog-3.jpg";
import image4 from "../assets/images/hero/blog-4.jpg";
import image5 from "../assets/images/hero/blog-5.jpg";
import image6 from "../assets/images/hero/blog-6.jpg";

const Blog = () => {
  return (
    <>
      {/* <!-- breadcrumb-area start --> */}
      <div class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="breadcrumb_box text-center">
                <h2 class="breadcrumb-title">Blogs</h2>
                {/* <!-- breadcrumb-list start --> */}
                <ul class="breadcrumb-list">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li class="breadcrumb-item active">List Left Large Image</li> */}
                </ul>
                {/* <!-- breadcrumb-list end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- breadcrumb-area end --> */}

      <div id="main-wrapper">
        <div class="site-wrapper-reveal">
          {/* <!--====================   Blog Area Start ====================--> */}
          <div class="blog-pages-wrapper section-space--ptb_100">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 order-lg-2 order-1">
                  <div class="section-title-wrap text-center section-space--mb_60">
                    <h3 class="heading">
                      Interesting articles
                      <span class="text-color-primary"> updated daily</span>
                    </h3>
                  </div>
                  <div class="main-blog-wrap">
                    {/* <!--======= Single Blog Item Start ========--> */}
                    <div class="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                      <div class="row ">
                        <div class="col-lg-6">
                          {/* <!-- Post Feature Start --> */}
                          <div class="post-feature blog-thumbnail">
                            <a href="blog-post-layout-one.html">
                              <img
                                class="img-fluid"
                                src={image}
                                alt="Blog Images"
                              />
                            </a>
                          </div>
                          {/* <!-- Post Feature End --> */}
                        </div>

                        <div class="col-lg-6">
                          {/* <!-- Post info Start --> */}
                          <div class="post-info lg-blog-post-info">
                            <h4 class="post-title">
                              <a href="blog-post-layout-one.html">
                                Ideas for High Returns on Investment
                              </a>
                            </h4>

                            <div class="post-meta mt-20">
                              <div class="post-author">
                                <a href="/">
                                  <img
                                    class="img-fluid avatar-96"
                                    src={image6}
                                    alt=""
                                  />{" "}
                                  Harry Ferguson
                                </a>
                              </div>
                              <div class="post-date">
                                <span class="far fa-calendar meta-icon"></span>
                                January 14, 2019
                              </div>
                              <div class="post-view">
                                <span class="meta-icon far fa-eye"></span>
                                346 views
                              </div>
                            </div>

                            <div class="post-excerpt mt-15">
                              <p>
                                Using the profit accumulator is one such way,
                                and you should understand why it increases your
                                chances of the profits. …
                              </p>
                            </div>

                            <div class="read-post-share-wrap mt-30">
                              <div class="post-read-more">
                                <Link to="/blogs" class="ht-btn ht-btn-md">
                                  Read more{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Post info End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!--===== Single Blog Item End =========--> */}

                    {/* <!--======= Single Blog Item Start ========--> */}
                    <div class="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                      <div class="row ">
                        <div class="col-lg-6">
                          {/* <!-- Post Feature Start --> */}
                          <div class="post-feature blog-thumbnail">
                            <a href="blog-post-layout-one.html">
                              <img
                                class="img-fluid"
                                src={image2}
                                alt="Blog Images"
                              />
                            </a>
                          </div>
                          {/* <!-- Post Feature End --> */}
                        </div>

                        <div class="col-lg-6">
                          {/* <!-- Post info Start --> */}
                          <div class="post-info lg-blog-post-info">
                            <h4 class="post-title">
                              <a href="blog-post-layout-one.html">
                                How Technology Made Businesses More Efficient
                              </a>
                            </h4>

                            <div class="post-meta mt-20">
                              <div class="post-author">
                                <a href="/">
                                  <img
                                    class="img-fluid avatar-96"
                                    src={image6}
                                    alt=""
                                  />{" "}
                                  James Scott
                                </a>
                              </div>
                              <div class="post-date">
                                <span class="far fa-calendar meta-icon"></span>
                                January 14, 2019
                              </div>
                              <div class="post-view">
                                <span class="meta-icon far fa-eye"></span>
                                346 views
                              </div>
                            </div>

                            <div class="post-excerpt mt-15">
                              <p>
                                Using the profit accumulator is one such way,
                                and you should understand why it increases your
                                chances of the profits. …
                              </p>
                            </div>

                            <div class="read-post-share-wrap mt-30">
                              <div class="post-read-more">
                                <Link to="/blogs" class="ht-btn ht-btn-md">
                                  Read more{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Post info End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!--===== Single Blog Item End =========--> */}

                    {/* <!--======= Single Blog Item Start ========--> */}
                    <div class="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                      <div class="row ">
                        <div class="col-lg-6">
                          {/* <!-- Post Feature Start --> */}
                          <div class="post-feature blog-thumbnail">
                            <a href="blog-post-layout-one.html">
                              <img
                                class="img-fluid"
                                src={image3}
                                alt="Blog Images"
                              />
                            </a>
                          </div>
                          {/* <!-- Post Feature End --> */}
                        </div>

                        <div class="col-lg-6">
                          {/* <!-- Post info Start --> */}
                          <div class="post-info lg-blog-post-info">
                            <h4 class="post-title">
                              <a href="blog-post-layout-one.html">
                                Data Secure on Transitioning to a New Office
                              </a>
                            </h4>

                            <div class="post-meta mt-20">
                              <div class="post-author">
                                <a href="/">
                                  <img
                                    class="img-fluid avatar-96"
                                    src={image6}
                                    alt=""
                                  />{" "}
                                  James Scott
                                </a>
                              </div>
                              <div class="post-date">
                                <span class="far fa-calendar meta-icon"></span>
                                January 14, 2019
                              </div>
                              <div class="post-view">
                                <span class="meta-icon far fa-eye"></span>
                                346 views
                              </div>
                            </div>

                            <div class="post-excerpt mt-15">
                              <p>
                                Using the profit accumulator is one such way,
                                and you should understand why it increases your
                                chances of the profits. …
                              </p>
                            </div>

                            <div class="read-post-share-wrap mt-30">
                              <div class="post-read-more">
                                <Link to="/blogs" class="ht-btn ht-btn-md">
                                  Read more{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Post info End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!--===== Single Blog Item End =========--> */}

                    {/* <!--======= Single Blog Item Start ========--> */}
                    <div class="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                      <div class="row ">
                        <div class="col-lg-6">
                          {/* <!-- Post Feature Start --> */}
                          <div class="post-feature blog-thumbnail">
                            <a href="blog-post-layout-one.html">
                              <img
                                class="img-fluid"
                                src={image4}
                                alt="Blog Images"
                              />
                            </a>
                          </div>
                          {/* <!-- Post Feature End --> */}
                        </div>

                        <div class="col-lg-6">
                          {/* <!-- Post info Start --> */}
                          <div class="post-info lg-blog-post-info">
                            <h4 class="post-title">
                              <a href="blog-post-layout-one.html">
                                Blockchain Technology Effects on Logistics
                                Sector?
                              </a>
                            </h4>

                            <div class="post-meta mt-20">
                              <div class="post-author">
                                <a href="/">
                                  <img
                                    class="img-fluid avatar-96"
                                    src={image6}
                                    alt=""
                                  />{" "}
                                  James Scott
                                </a>
                              </div>
                              <div class="post-date">
                                <span class="far fa-calendar meta-icon"></span>
                                January 14, 2019
                              </div>
                              <div class="post-view">
                                <span class="meta-icon far fa-eye"></span>
                                346 views
                              </div>
                            </div>

                            <div class="post-excerpt mt-15">
                              <p>
                                Using the profit accumulator is one such way,
                                and you should understand why it increases your
                                chances of the profits. …
                              </p>
                            </div>

                            <div class="read-post-share-wrap mt-30">
                              <div class="post-read-more">
                                <Link to="/blogs" class="ht-btn ht-btn-md">
                                  Read more{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Post info End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!--===== Single Blog Item End =========--> */}

                    {/* <!--======= Single Blog Item Start ========--> */}
                    <div class="single-blog-item post-list-wrapper xs-list-blog-item border-bottom wow move-up">
                      <div class="row ">
                        <div class="col-lg-6">
                          {/* <!-- Post Feature Start --> */}
                          <div class="post-feature blog-thumbnail">
                            <a href="blog-post-layout-one.html">
                              <img
                                class="img-fluid"
                                src={image5}
                                alt="Blog Images"
                              />
                            </a>
                          </div>
                          {/* <!-- Post Feature End --> */}
                        </div>

                        <div class="col-lg-6">
                          {/* <!-- Post info Start --> */}
                          <div class="post-info lg-blog-post-info">
                            <h4 class="post-title">
                              <a href="blog-post-layout-one.html">
                                How Wireless Technology is Changing Business
                              </a>
                            </h4>

                            <div class="post-meta mt-20">
                              <div class="post-author">
                                <a href="/">
                                  <img
                                    class="img-fluid avatar-96"
                                    src={image6}
                                    alt=""
                                  />{" "}
                                  James Scott
                                </a>
                              </div>
                              <div class="post-date">
                                <span class="far fa-calendar meta-icon"></span>
                                January 14, 2019
                              </div>
                              <div class="post-view">
                                <span class="meta-icon far fa-eye"></span>
                                346 views
                              </div>
                            </div>

                            <div class="post-excerpt mt-15">
                              <p>
                                Using the profit accumulator is one such way,
                                and you should understand why it increases your
                                chances of the profits. …
                              </p>
                            </div>

                            <div class="read-post-share-wrap mt-30">
                              <div class="post-read-more">
                                <Link to="/blogs" class="ht-btn ht-btn-md">
                                  Read more{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Post info End --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!--===== Single Blog Item End =========--> */}

                    <div class="ht-pagination mt-30 pagination justify-content-center">
                      <div class="pagination-wrapper">
                        <ul class="page-pagination">
                          <li>
                            <a class="prev page-numbers" href="/">
                              Prev
                            </a>
                          </li>
                          <li>
                            <a class="page-numbers current" href="/">
                              1
                            </a>
                          </li>
                          <li>
                            <a class="page-numbers" href="/">
                              2
                            </a>
                          </li>
                          <li>
                            <a class="next page-numbers" href="/">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--====================  Blog Area End  ====================--> */}

          {/* <!--========== Call to Action Area Start ============--> */}
          <div class="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-xl-8 col-lg-7">
                  <div class="cta-content md-text-center">
                    <h3 class="heading text-white">
                      Assess your business potentials and find opportunities{" "}
                      <span class="text-color-secondary">
                        for bigger success
                      </span>
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
        </div>
      </div>
    </>
  );
};

export default Blog;
