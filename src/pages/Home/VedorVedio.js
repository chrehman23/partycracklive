import React from "react";
import Slider from "react-slick";

import { AiOutlineHome, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";

import backLogo from "../../assets/imgs/black-logo.png";
// card imges`
import cardImge1 from "../../assets/imgs/img4.jpg";
import cardImge2 from "../../assets/imgs/img3.jpg";
import cardImge3 from "../../assets/imgs/img5.jpg";
import cardImge4 from "../../assets/imgs/img7.jpg";

export default function VedorVedio() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="vanueSearches text-center mt-5">
            <h1>Our Videos</h1>
           <img src={backLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider className="slick-sliderContainer" {...settings}>
            <div>
              <div className="card-Container">
                <div>
                  <img src={cardImge1} alt="" />
                  <div className="btnconatiner2">
                    <div>
                      <a href="#0">
                        <div>
                          <FaPlay />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-Container">
                <div>
                  <img src={cardImge2} alt="" />
                  <div className="btnconatiner2">
                    <div>
                      <a href="#0">
                        <div>
                          <FaPlay />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-Container">
                <div>
                  <img src={cardImge3} alt="" />
                  <div className="btnconatiner2">
                    <div>
                      <a href="#0">
                        <div>
                          <FaPlay />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card-Container">
                <div>
                  <img src={cardImge4} alt="" />
                  <div className="btnconatiner2">
                    <div>
                      <a href="#0">
                        <div>
                          <FaPlay />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
