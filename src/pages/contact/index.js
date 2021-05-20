import React from "react";
import TopHeader from "../../Components/topHeader";
import Footer from "../../Components/footer/footer";
import bgimge from '../../assets/img/contact-info.jpg';
import { AiFillPhone, AiOutlineMail, } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { GiCandlestickPhone } from "react-icons/gi";

import ContactFrom from './ContactFrom'

class About extends React.Component {
  render() {
    return (
      <>
        <TopHeader />
        <div className="banner d-md-block d-none">
          <div className="container-pic h-100 d-flex justify-content-center align-items-center">
            <div className="area">
              <h1 className="sign">Contact Us</h1>
              <ul className="bread-crumb">
                <li className="signa">Home > contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="container mt-3">
          <div className="row py-4 ">
            <div className="col-12 text-center">
              <h1 className="font-w400">Contact Us</h1>
            </div>
          </div>
          <div>
            <div className="row mt-md-4">
              <div className="col-md-7">
                <ContactFrom />
              </div>
              <div className="col-md-5">
                <div
                  class="contact-info"
                  style={{ background: `url('${bgimge}')` }}
                >
                  <div class="media">
                    <div>
                      <AiFillPhone />
                    </div>
                    <div class="media-body">
                      <h5>Phone:</h5>
                      <p>
                        <a href="tel:+0477 85X6 552">+0477 85X6 552</a>
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <div>
                      <AiOutlineMail />
                    </div>
                    <div class="media-body">
                      <h5>Email:</h5>
                      <p>
                        <a href="mailto:support@partycrack.com.au">
                          support@partycrack.com.au
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="media">
                    <div>
                      <BiWorld />
                    </div>
                    <div class="media-body">
                      <h5>Web:</h5>
                      <p>
                        <a target="_blank" href="https://partycrack.com">
                          partycrack.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="media mb-0">
                    <div>
                      <GiCandlestickPhone />
                    </div>
                    <div class="media-body">
                      <h5>Whatsapp:</h5>
                      <p>
                        <a href="tel:+0477 85X6 552">+0477 85X6 552</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </>
    );
  }
}

export default About;
