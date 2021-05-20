import React from "react";
import TopHeader from "../../Components/topHeader";
import Footer from "../../Components/footer/footer";
import { AiOutlineSearch, AiFillHeart  } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import PartyCatagry from "../Home/PartyVendor";

import sideImge from "../../assets/img/img-4.jpg";
import aboutImge1 from "../../assets/img/icons/arrow.png";
import aboutIme2 from "../../assets/img/icons/arrow.png";
import slider1 from "../../assets/img/vendors/water-165219_640.jpg";
import { FaWhatsapp, FaStar } from "react-icons/fa";
import { FiPhone, FiHeart, FiShare2 } from "react-icons/fi";

let list = [1,1,1,1,1,1,1,1,,1,1,1,]
class Vendors_list extends React.Component {


  render() {
    return (
      <>
        <TopHeader />
        <div className="banner d-md-block d-none">
          <div className="container-pic h-100 d-flex justify-content-center align-items-center">
            <div className="area">
              <h1 className="sign">Search Vendors</h1>
              <ul className="bread-crumb">
                <li className="signa">Home > Vendors</li>
              </ul>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        {/* ****************** */}
        <div className="container-fluid">
          <div className="row py-md-3">
            <div className="col-md-6">
              <h4>Wedding Photographers in UK</h4>
              <p>Showing 1801 results as per your search criteria</p>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12">
                  <div className="border modalSearchContainer">
                    <div>
                      <FiSearch />
                    </div>
                    <div>
                      <input placeholder="Search vendors..." type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {list.map(() => {
              return (
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
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
                        <AiFillHeart />
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
                          <FaWhatsapp /> Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ****************** */}

        <Footer />
      </>
    );
  }
}

export default Vendors_list;
