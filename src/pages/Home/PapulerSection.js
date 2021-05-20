import React from "react";
import Slider from "react-slick";

import { AiOutlineHome, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

import backLogo from "../../assets/imgs/black-logo.png";
// card imges`
import cardImge1 from "../../assets/img/Popular-Party-Crack-Searches/DJ-268x250.png";
import cardImge2 from "../../assets/img/Popular-Party-Crack-Searches/CateringServices-268x250.png";
import cardImge3 from "../../assets/img/Popular-Party-Crack-Searches/Cake-Cupcakes-268x250.png";
import cardImge4 from "../../assets/img/Popular-Party-Crack-Searches/Photography-268x250.png";

export default function PapulerSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
    responsive: [
      {
        breakpoint: 1200,
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
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-md container-fluid">
      <div className="row">
        <div className="col-12">
          <div class="vanueSearches text-center mt-5">
            <h1>Popular partycrack Searches</h1>
            <img src={backLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Slider className="slick-sliderContainer" {...settings}>
            <div>
              <div className="card-Container bg-white shadow">
                <div>
                  <img src={cardImge1} alt="" />
                </div>
                <div class="content">
                  <h3>
                    {" "}
                    <a href="#0">DJs</a>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="card-Container bg-white shadow">
                <div>
                  <img src={cardImge2} alt="" />
                </div>
                <div class="content">
                  <h3>
                    {" "}
                    <a href="#0">Catering Services</a>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="card-Container bg-white shadow">
                <div>
                  <img src={cardImge3} alt="" />
                </div>
                <div class="content">
                  <h3>
                    <a href="#0">Cake/CupCakes</a>
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="card-Container bg-white shadow">
                <div>
                  <img src={cardImge4} alt="" />
                </div>
                <div class="content">
                  <h3>
                    <a href="#0">Photographers</a>
                  </h3>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
