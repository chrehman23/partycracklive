import React from "react";

import {FaHandshake} from 'react-icons/fa'
import BackGroundImge from "../../assets/imgs/img16.jpg";
import {Link} from 'react-router-dom'
export default function WhyChose() {

  return (
    <div
      className="container-fluid homeImgeContainer"
      style={{ backgroundImage: `url(${BackGroundImge})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ">
            <div className="h-100 w-100">
              <div className="whyrightContainer h-100">
                <div>
                  <h1>Why Choose us</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  </p>
                  <Link to="/contact_us" class="whybtn">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="service-info-2">
                  <div class="number">1</div>
                  <div class="icon">
                    <FaHandshake />
                  </div>
                  <div class="detail">
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="service-info-2">
                  <div class="number">2</div>
                  <div class="icon">
                    <FaHandshake />
                  </div>
                  <div class="detail">
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="service-info-2">
                  <div class="number">3</div>
                  <div class="icon">
                    <FaHandshake />
                  </div>
                  <div class="detail">
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="service-info-2">
                  <div class="number">4</div>
                  <div class="icon">
                    <FaHandshake />
                  </div>
                  <div class="detail">
                    <h3>Lorem ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
