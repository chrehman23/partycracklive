import React from 'react';
import ReactStars from "react-rating-stars-component";

import {BiChevronRight} from 'react-icons/bi';
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { FiPhone, FiHeart, FiShare2 } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import TopHeader from '../../Components/topHeader';
import Footer from '../../Components/footer/footer'

import BackGroundImge from "../../assets/imgs/img16.jpg";
import userImge from "../../assets/img/vendors/contact-info.jpg";
// slider images
import slider1 from "../../assets/img/vendors/water-165219_640.jpg";

// info imges
import infoImge1 from "../../assets/img/seats.svg";
import infoImge2 from "../../assets/img/music.svg";
import infoImge3 from "../../assets/img/byo.svg";
import infoImge4 from "../../assets/img/external.svg";

// Area imges
import areaImge1 from "../../assets/img/venue-icons/indoor_banquet.png";
import areaImge2 from "../../assets/img/venue-icons/outdoor_lawn.png";
import areaImge3 from "../../assets/img/venue-icons/poolside.png";
import areaImge4 from "../../assets/img/venue-icons/outdoor_terrace.png";

// Facilities imges
import FacImge1 from "../../assets/img/icons/details_icons/wifi.svg";
import FacImge2 from "../../assets/img/icons/details_icons/star.svg";
import FacImge3 from "../../assets/img/icons/details_icons/hanger.svg";
import FacImge4 from "../../assets/img/icons/details_icons/parking.svg";
import FacImge5 from "../../assets/img/icons/details_icons/projector.svg";
import FacImge6 from "../../assets/img/icons/details_icons/tv-monitor.svg";
import FacImge7 from "../../assets/img/icons/details_icons/close.svg";
import FacImge8 from "../../assets/img/icons/details_icons/close.svg";

// comment imges
import commentImge1 from "../../assets/img/vendors/contact-info.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



class venues_details extends React.Component {

 render() {
        return (
          <>
            <TopHeader />
            <div
              class="sub-banner"
              style={{ backgroundImage: `url(${BackGroundImge})` }}
            >
              <div class="container">
                <div class="breadcrumb-area text-white">
                  <h1>Relaxing Apartment</h1>
                  <ul class="breadcrumbs">
                    <li>Home</li>
                    <li>
                      <BiChevronRight />
                    </li>
                    <li>Relaxing Apartment</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* ******************************** */}
            <div className="partycrack-details-page content-area">
              <div className="container">
                <div className="row">
                  <div class="col-lg-8 col-md-12">
                    {/* ********************** */}
                    <div className="vanue_details_carasole">
                      <Carousel showArrows={true}>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                        <div>
                          <img src={slider1} />
                        </div>
                      </Carousel>
                      <a class="whybtn  px-3" href="javascript:void(0);">
                        See All Photos
                      </a>
                    </div>
                    {/* ********************** */}
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div class="sidebar-right">
                      <div class="tg-sellercontactdetail mb-4">
                        <div class="tg-sellertitle">
                          <h1>Vendors Contact Detail</h1>
                        </div>
                        <div class="tg-sellercontact">
                          <div class="tg-memberinfobox">
                            <figure>
                              <a href="javascript:void(0);">
                                <img src={userImge} alt="image description" />
                              </a>
                            </figure>
                            <div class="tg-memberinfo">
                              <h3>
                                <a href="javascript:void(0);">Vendor Name</a>
                              </h3>
                              <span>Member Since Jun 27, 2017</span>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-wrap justify-content-center vendor-button"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Click here for send message"
                          >
                            <a
                              class="tg-btnphone whatsapp mb-3"
                              href="javascript:void(0);"
                            >
                              <FaWhatsapp />
                              <em>Send Message</em>
                            </a>
                            <a
                              class="tg-btnphone contact mb-3"
                              href="javascript:void(0);"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Click here for contact no."
                            >
                              <FiPhone />
                              <em>View Contact</em>
                            </a>

                            <a
                              class="tg-btnphone enquire mb-3 d-md-none"
                              data-toggle="collapse"
                              href="#collapseContact"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseContact"
                            >
                              <span
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Click here for Enquire Now"
                                class="text-center "
                              >
                                <BsChatDots />

                                <em>Enquire Now</em>
                              </span>
                            </a>
                          </div>
                          <div class="d-flex flex-wrap justify-content-center new-options">
                            <a href="" class="rating-option text-center">
                              <span class="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                                <FaStar /> <span>4.8</span>
                              </span>
                              <small>19 reviews</small>
                            </a>
                            <a
                              href=""
                              class="shortlist d-flex justify-content-center align-items-center flex-column text-center"
                            >
                              <span>
                                <FiHeart />
                              </span>
                              <small>Shortlist</small>
                            </a>
                            <a
                              href=""
                              class="share text-center d-flex justify-content-center align-items-center flex-column"
                            >
                              <span>
                                <FiShare2 />
                              </span>
                              <small>Share</small>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="collapse" id="collapseContact">
                        <div class="tg-sellercontactdetail">
                          <div class="tg-sellertitle">
                            <h1>Vendors Contact</h1>
                          </div>
                          <div class="tg-sellercontact">
                            <form class="from">
                              <div class="form-group name">
                                <input
                                  type="text"
                                  name="name"
                                  class="form-control"
                                  placeholder="Name*"
                                />
                              </div>
                              <div class="form-group number">
                                <input
                                  type="text"
                                  name="phone"
                                  class="form-control"
                                  placeholder="Number"
                                />
                              </div>
                              <div class="form-group number">
                                <input
                                  type="email"
                                  name="Email"
                                  class="form-control"
                                  placeholder="Email*"
                                />
                              </div>
                              <div class="form-group message">
                                <textarea
                                  class="form-control"
                                  name="message"
                                  placeholder="Write message*"
                                ></textarea>
                              </div>
                              <div class="send-btn text-center">
                                <button type="submit" class="whybtn">
                                  Enquire now
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="tg-sellercontactdetail mb-4 d-none d-md-block">
                        <div class="tg-sellertitle">
                          <h1>Vendors Contact</h1>
                        </div>
                        <div class="tg-sellercontact">
                          <form class="from">
                            <div class="form-group name">
                              <input
                                type="text"
                                name="name"
                                class="form-control"
                                placeholder="Name*"
                              />
                            </div>
                            <div class="form-group number">
                              <input
                                type="text"
                                name="phone"
                                class="form-control"
                                placeholder="Number"
                              />
                            </div>
                            <div class="form-group number">
                              <input
                                type="email"
                                name="Email"
                                class="form-control"
                                placeholder="Email*"
                              />
                            </div>
                            <div class="form-group message">
                              <textarea
                                class="form-control"
                                name="message"
                                placeholder="Write message*"
                              ></textarea>
                            </div>
                            <div class="send-btn text-center">
                              <button type="submit" class="whybtn">
                                Enquire now
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
                <div className="row">
                  <div className="col-12">
                    <div class="partycrack-key-information mb-40 box_main">
                      <h3 class="heading-2">Key Information</h3>
                      <div class="row form-row">
                        <div class="col-md-3 col-lg-2 col-6">
                          <div class="key-point-inner">
                            <div class="img-wrap">
                              <img src={infoImge1} alt="" />
                            </div>
                            <div class="text-wrap">
                              <h4>
                                Up to 47 <br /> seats
                              </h4>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-3 col-lg-2 col-6">
                          <div class="key-point-inner">
                            <div class="img-wrap">
                              <img src={infoImge2} alt="" />
                            </div>
                            <div class="text-wrap">
                              <h4>Own music allowed </h4>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-3 col-lg-2 col-6 unavailable">
                          <div class="key-point-inner">
                            <div class="img-wrap">
                              <img src={infoImge3} alt="" />
                            </div>
                            <div class="text-wrap">
                              <h4>BYO alcohol not allowed</h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3 col-lg-2 col-6 unavailable">
                          <div class="key-point-inner">
                            <div class="img-wrap">
                              <img src={infoImge4} alt="" />
                            </div>
                            <div class="text-wrap">
                              <h4> External catering not allowed </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
                <div className="row">
                  <div className="col-12">
                    <div class="partycrack-description mb-40 box_main">
                      <h3 class="heading-2">Description</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla. Nulla posuere
                        sapien vitae lectus suscipit, et pulvinar nisi
                        tincidunt. Aliquam erat volutpat. Curabitur convallis
                        fringilla diam sed aliquam. Sed tempor iaculis massa
                        faucibus feugiat. In fermentum facilisis massa, a
                        consequat purus viverra a. Aliquam pellentesque nibh et
                        nibh feugiat gravida. Maecenas ultricies, diam vitae
                        semper placerat, velit risus accumsan nisl, eget tempor
                        lacus est vel nunc. Proin accumsan elit sed neque
                        euismod fringilla. Curabitur lobortis nunc velit, et
                        fermentum urna dapibus non. Vivamus magna lorem,
                        elementum id gravida ac, laoreet tristique augue.
                        Maecenas dictum lacus eu nunc porttitor, ut hendrerit
                        arcu efficitur.
                      </p>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
                <div className="row">
                  <div className="col-12">
                    <div class="floor-plans mb-40 box_main">
                      <h3 class="heading-2">Areas Available</h3>
                      <div class="row form-row">
                        <div class="col-lg-4 col-6 mb-3">
                          <div class="banquet d-md-flex text-center text-md-left">
                            <div class="section-left mr-md-4 mb-2 mb-md-0">
                              <div class="margin-r-20 img_sec">
                                <img src={areaImge1} alt="1" />
                                <div class="small capitalize help-text">
                                  Indoor
                                </div>
                              </div>
                            </div>
                            <div class="section-right">
                              <h6 class="mb-1">
                                <span>60 Seating | </span>
                                <span>750 Floating </span>
                              </h6>
                              <p class="mb-1">Banquet</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-6 mb-3">
                          <div class="banquet d-md-flex text-center text-md-left">
                            <div class="section-left mr-md-4 mb-2 mb-md-0">
                              <div class="margin-r-20 img_sec">
                                <img src={areaImge2} alt="1" />
                                <div class="small capitalize help-text">
                                  Outdoor
                                </div>
                              </div>
                            </div>
                            <div class="section-right">
                              <h6 class="mb-1">
                                <span>450 Seating | </span>
                                <span>700 Floating </span>
                              </h6>
                              <p class="mb-1">Outdoor</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-6 mb-3">
                          <div class="banquet d-md-flex text-center text-md-left">
                            <div class="section-left mr-md-4 mb-2 mb-md-0">
                              <div class="margin-r-20 img_sec">
                                <img src={areaImge3} alt="1" />
                                <div class="small capitalize help-text">
                                  Poolside
                                </div>
                              </div>
                            </div>
                            <div class="section-right">
                              <h6 class="mb-1">
                                <span>100 Seating | </span>
                                <span>170 Floating </span>
                              </h6>
                              <p class="mb-1">Poolside</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 col-6 mb-3">
                          <div class="banquet d-md-flex text-center text-md-left">
                            <div class="section-left mr-md-4 mb-2 mb-md-0">
                              <div class="margin-r-20 img_sec">
                                <img src={areaImge4} alt="1" />
                                <div class="small capitalize help-text">
                                  Outdoor
                                </div>
                              </div>
                            </div>
                            <div class="section-right">
                              <h6 class="mb-1">
                                <span>60 Seating | </span>
                                <span>100 Floating </span>
                              </h6>
                              <p class="mb-1">Terrace</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ********************** */}
                <div className="row">
                  <div className="col-12">
                    <div class="facilities-plans plans-list mb-40 box_main">
                      <h3 class="heading-2">Facilities</h3>
                      <div class="row">
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature ">
                            <div class="pf_icon">
                              <img src={FacImge1} alt="" />
                            </div>
                            <span class="partycrack__feature__name">Wi-Fi</span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature ">
                            <div class="pf_icon">
                              <img src={FacImge2} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Natural light
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature ">
                            <div class="pf_icon">
                              <img src={FacImge3} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Storage space
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature ">
                            <div class="pf_icon">
                              <img src={FacImge4} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Free on-street parking
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature">
                            <div class="pf_icon">
                              <img src={FacImge5} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Projector
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature">
                            <div class="pf_icon">
                              <img src={FacImge6} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Flatscreen TV
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature pf_strikethrough">
                            <div class="pf_icon">
                              <img src={FacImge7} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Whiteboard
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature pf_strikethrough">
                            <div class="pf_icon">
                              <img src={FacImge8} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Flipchart
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
                <div className="row">
                  <div className="col-12">
                    <div class="music-equipment plans-list mb-40 box_main">
                      <h3 class="heading-2">Music &amp; sound equipment</h3>
                      <div class="row">
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature ">
                            <div class="pf_icon">
                              <img src={FacImge1} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Own music allowed
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature ">
                            <div class="pf_icon">
                              <img src={FacImge2} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              Bring your own DJ
                            </span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-lg-4 col-xl-3 ">
                          <div class="partycrack__feature pf_strikethrough">
                            <div class="pf_icon">
                              <img src={FacImge7} alt="" />
                            </div>
                            <span class="partycrack__feature__name">
                              PA system / music speakers available
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
                <div className="row">
                  <div className="col-12">
                    <div class="music-equipment plans-list mb-40 box_main">
                      <h3 class="heading-2">Property Location</h3>
                      <div class="row">
                        <div className="col-12">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27442.456486498657!2d76.704336!3d30.709767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feef67a401d1b%3A0x60cd582ea8bf9d40!2sPhase%208%2C%20Industrial%20Area%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1620210374104!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: "none" }}
                            allowfullscreen=""
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
                <div class="reivews mb-40 box_main">
                  {/* <!-- Contact 2 start --> */}
                  <div class="contact-2 ca mb-40">
                    <h3 class="heading">Review Venue</h3>
                    <ReactStars
                      count={5}
                      onChange={(ratingChanged) => alert(ratingChanged)}
                      size={24}
                      activeColor="#f2b600"
                      isHalf={true}
                    />
                    <div class="row">
                      <div class="form-group message col-md-12">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="Write about your experience"
                        ></textarea>
                      </div>
                      <div class="send-btn col-md-12">
                        <button type="submit" class="whybtn">
                          Submit Reviews
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Comments start --> */}
                  <h3 class="heading-2">Reivews</h3>
                  <div class="row rating-area mb-20">
                    <div class="col-lg-4 col-md-4">
                      <div class="average-rating mb-30">
                        <h1>4.8</h1>
                        <div class="ratings d-flex justify-content-center mb-10">
                          <ReactStars
                            count={5}
                            value={4}
                            edit={false}
                            //     onChange={(ratingChanged) => alert(ratingChanged)}
                            size={24}
                            activeColor="#f2b600"
                            isHalf={true}
                          />
                        </div>
                        <h4>452 Review</h4>
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                      <div class="rating-details mb-30">
                        <div class="rating-item">
                          <div class="ratings">
                            <ReactStars
                              count={5}
                              value={4}
                              edit={false}
                              size={24}
                              activeColor="#f2b600"
                              isHalf={true}
                            />
                          </div>
                          <div class="rating-bar">
                            <div
                              class="rating-width"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                          <div class="rating-count">
                            <span>(80)</span>
                          </div>
                        </div>
                        <div class="rating-item">
                          <div class="ratings">
                            <ReactStars
                              count={5}
                              value={5}
                              edit={false}
                              size={24}
                              activeColor="#f2b600"
                              isHalf={true}
                            />
                          </div>
                          <div class="rating-bar">
                            <div
                              class="rating-width"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                          <div class="rating-count">
                            <span>(80)</span>
                          </div>
                        </div>
                        <div class="rating-item">
                          <div class="ratings">
                            <ReactStars
                              count={5}
                              value={4}
                              edit={false}
                              size={24}
                              activeColor="#f2b600"
                              isHalf={true}
                            />
                          </div>
                          <div class="rating-bar">
                            <div
                              class="rating-width"
                              style={{ width: "65%" }}
                            ></div>
                          </div>
                          <div class="rating-count">
                            <span>(60)</span>
                          </div>
                        </div>
                        <div class="rating-item">
                          <div class="ratings">
                            <ReactStars
                              count={5}
                              value={3}
                              edit={false}
                              size={24}
                              activeColor="#f2b600"
                              isHalf={true}
                            />
                          </div>
                          <div class="rating-bar">
                            <div
                              class="rating-width"
                              style={{ width: "35%" }}
                            ></div>
                          </div>
                          <div class="rating-count">
                            <span>(30)</span>
                          </div>
                        </div>
                        <div class="rating-item">
                          <div class="ratings">
                            <ReactStars
                              count={5}
                              value={1}
                              edit={false}
                              size={24}
                              activeColor="#f2b600"
                              isHalf={true}
                            />
                          </div>
                          <div class="rating-bar">
                            <div
                              class="rating-width"
                              style={{ width: "5%" }}
                            ></div>
                          </div>
                          <div class="rating-count">
                            <span>(0)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul class="comments vanues">
                    <li>
                      <div class="comment">
                        <div class="comment-author">
                          <a href="#">
                            <img src={commentImge1} alt="comments-user" />
                          </a>
                        </div>
                        <div class="comment-content">
                          <div class="comment-meta">
                            <h3>Maikel Alisa</h3>
                            <div class="comment-meta">8:42 PM 1/28/2017</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec luctus tincidunt aliquam. Aliquam
                            gravida massa at sem vulputate interdum et vel eros.
                            Maecenas eros enim, tincidunt vel turpis vel,
                            dapibus tempus nulla.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="comment">
                        <div class="comment-author">
                          <a href="#">
                            <img src={commentImge1} alt="comments-user" />
                          </a>
                        </div>
                        <div class="comment-content">
                          <div class="comment-meta">
                            <h3>Anne Brady</h3>
                            <div class="comment-meta">8:42 PM 1/28/2017</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec luctus tincidunt aliquam. Aliquam
                            gravida massa at sem vulputate interdum et vel eros.
                            Maecenas eros enim, tincidunt vel turpis vel,
                            dapibus tempus nulla.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* ********************** */}
                <div class="row similar-partycrack simelerVanes">
                  <div class="col-12">
                    <h3 class="heading-2">Similar Venues</h3>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="partycrack-box">
                      <div class="partycrack-thumbnail">
                        <a href="#0" class="partycrack-img">
                          <img
                            class="d-block w-100"
                            src={slider1}
                            alt="partycrack"
                          />
                        </a>
                        <a class="favourites" href="#">
                          <FiHeart/>
                        </a>
                      </div>
                      <div class="content_vendor">
                        <div class="d-md-flex justify-content-between">
                          <div class="detail">
                            <h1 class="title">
                              <a href="#0">Calista Resort</a>
                            </h1>
                            <div class="location">
                              <a href="#0">
                                <i class="flaticon-pin"></i>123 Kathal St. Tampa
                                City
                              </a>
                            </div>
                          </div>
                          <div class="reat_reviews">
                            <span class="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                              <i class="fa fa-star margin-r-5"></i>4.8
                            </span>
                            <small>19 reviews</small>
                          </div>
                        </div>
                        <div class="footer d-md-flex justify-content-between align-items-center">
                          <span class="strike ">
                            <i class="far fa-dollar-sign"></i> 1,000 Per Plate
                          </span>
                          <a
                            href="#0"
                            class="whatsapp-contact d-flex justify-content-center align-items-center"
                          >
                           <FaWhatsapp/>Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="partycrack-box">
                      <div class="partycrack-thumbnail">
                        <a href="#0" class="partycrack-img">
                          <img
                            class="d-block w-100"
                            src={slider1}
                            alt="partycrack"
                          />
                        </a>
                        <a class="favourites active" href="#">
                        <AiFillHeart/>
                        </a>
                      </div>
                      <div class="content_vendor">
                        <div class="d-md-flex justify-content-between">
                          <div class="detail">
                            <h1 class="title">
                              <a href="#0">Calista Resort</a>
                            </h1>
                            <div class="location">
                              <a href="#0">
                                <i class="flaticon-pin"></i>123 Kathal St. Tampa
                                City
                              </a>
                            </div>
                          </div>
                          <div class="reat_reviews">
                            <span class="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                              <i class="fa fa-star margin-r-5"></i>4.8
                            </span>
                            <small>19 reviews</small>
                          </div>
                        </div>
                        <div class="footer d-md-flex justify-content-between align-items-center">
                          <span class="strike ">
                            <i class="far fa-dollar-sign"></i> 1,000 Per Plate
                          </span>
                          <a
                            href="#0"
                            class="whatsapp-contact d-flex justify-content-center align-items-center"
                          >
                           <FaWhatsapp/> Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="partycrack-box">
                      <div class="partycrack-thumbnail">
                        <a href="#0" class="partycrack-img">
                          <img
                            class="d-block w-100"
                            src={slider1}
                            alt="partycrack"
                          />
                        </a>
                        <a class="favourites active" href="#">
                         <AiFillHeart/>
                        </a>
                      </div>
                      <div class="content_vendor">
                        <div class="d-md-flex justify-content-between">
                          <div class="detail">
                            <h1 class="title">
                              <a href="#0">Calista Resort</a>
                            </h1>
                            <div class="location">
                              <a href="#0">
                                <i class="flaticon-pin"></i>123 Kathal St. Tampa
                                City
                              </a>
                            </div>
                          </div>
                          <div class="reat_reviews">
                            <span class="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                              <i class="fa fa-star margin-r-5"></i>4.8
                            </span>
                            <small>19 reviews</small>
                          </div>
                        </div>
                        <div class="footer d-md-flex justify-content-between align-items-center">
                          <span class="strike ">
                            <i class="far fa-dollar-sign"></i> 1,000 Per Plate
                          </span>
                          <a
                            href="#0"
                            class="whatsapp-contact d-flex justify-content-center align-items-center"
                          >
                            <FaWhatsapp/> Contact
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ********************** */}
              </div>
            </div>
            {/* ******************************** */}
            <Footer />
          </>
        );
      }
}
export default venues_details;