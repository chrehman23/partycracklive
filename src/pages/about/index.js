import React from "react";
import TopHeader from "../../Components/topHeader";
import Footer from "../../Components/footer/footer";
import {AiOutlineSearch} from 'react-icons/ai'
import { FaRegHandshake } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import PartyCatagry from '../Home/PartyVendor'

import sideImge from '../../assets/img/img-4.jpg'
import aboutImge1 from '../../assets/img/icons/arrow.png'
import aboutIme2 from "../../assets/img/icons/arrow.png";
class About extends React.Component {
  render() {
    return (
      <>
        <TopHeader />
        <div className="banner d-md-block d-none">
          <div className="container-pic h-100 d-flex justify-content-center align-items-center">
            <div className="area">
              <h1 className="sign">About us</h1>
              <ul className="bread-crumb">
                <li className="signa">Home > About</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about-real-estate  content-area-5 bg-grea-3">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="about-info">
                  <img class="d-block w-100" src={sideImge} alt="Third slide" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div class="about-text">
                  <h3>Welcome to partycrack</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five electronic
                    typesetting, remaining essentially unchanged. specimen book.
                    It has survived not only five electronic typesetting,
                    remaining. It has survived not only five electronic
                    typesetting, remaining. specimen book. It has survived not
                    only five electronic typesetting, remaining. It has survived
                    not only five electronic typesetting, remaining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="how_works content-area-5">
          <div class="container">
            <div class="row">
              <div class="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
                <div class="section-title text-center">
                  {/* <!-- section title start--> */}
                  <h2 class="mb10">How it works ?</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium.
                  </p>
                </div>
                {/* <!-- /.section title start--> */}
              </div>
            </div>
            <div class="row" id='aboutinfos'>
              {/* <!-- feature-1 --> */}
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                <div class="feature">
                  <div class="feature-icon icon-circle circle-xxxl pinside80  bg-light-default text-default mr-auto ml-auto shape-circle rounded-0 mb40 ">
                    <AiOutlineSearch/>
                    <div class="process-number-second">
                      <div class="feature-icon icon-circle circle-lg bg-default text-white p-0 ">
                        1
                      </div>
                    </div>
                  </div>
                  <div class="feature-content p-4">
                    <h5>Search &amp; Discover</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div class="process-arrow d-none d-xl-block d-lg-block">
                    <img src={aboutIme2} alt="" />
                  </div>
                </div>
              </div>
              {/* <!-- feature-1 --> */}
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                <div class="feature">
                  <div class="feature-icon icon-circle  circle-xxxl pinside80  bg-light-default text-default mr-auto ml-auto shape-circle rounded-0 mb40  ">
                  <FaRegHandshake/>
                   <div class="process-number-second">
                      <div class="feature-icon icon-circle circle-lg bg-default text-white p-0 ">
                        2
                      </div>
                    </div>
                  </div>
                  <div class="feature-content p-4">
                    <h5>Enquire &amp; Book</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div class="process-arrow d-none d-xl-block d-lg-block">
                    <img src={aboutImge1} alt="" />
                  </div>
                </div>
              </div>
              {/* <!-- feature-1 --> */}
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                <div class="feature">
                  <div class="feature-icon icon-circle circle-xxxl pinside80 mb40 bg-light-default text-default mr-auto ml-auto shape-circle rounded-0 ">
                   <FaStarHalfAlt/>
                   <div class="process-number-second">
                      <div class="feature-icon icon-circle circle-lg bg-default text-white p-0 ">
                        3
                      </div>
                    </div>
                  </div>
                  <div class="feature-content p-4">
                    <h5>Give &amp; Receive Feedback</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PartyCatagry/>

        <Footer />
      </>
    );
  }
}

export default About;
