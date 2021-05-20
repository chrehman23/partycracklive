import React from "react";

import cardImge1 from "../../assets/imgs/img9.png";
import backLogo from "../../assets/imgs/black-logo.png";
import slashImge from "../../assets/imgs/title-img2.png";

import Imge1 from "../../assets/img/Vendor-Categories/Planning&Decor-250x120.png";
import Imge2 from "../../assets/img/Vendor-Categories/Fashion-250x120.png";
import Imge3 from "../../assets/img/Vendor-Categories/Invites&gifts-250x120.png";
import Imge4 from "../../assets/img/Vendor-Categories/Entertainers-250x120.png";
import Imge5 from "../../assets/img/Vendor-Categories/Services-250x120.png";


export default function PartyVendor() {

  return (
    <div
      className="container-fluid mt-5 pb-4"
      style={{ background: "#f9f9f8" }}
    >
      <div className="container-md container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="vanueSearches text-center mt-5">
              <h1>Vendor Categories</h1>
              <img src={backLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="row weddingcatagorList">
          <div className="col-md-6 weddingCatagerWrapper">
            <div className="row weddingCatagerContainer">
              <div className="col-7 ">
                <div className="des">
                  <div>
                    <h4>Planning and Décor</h4>
                    <p>Wedding Planners,Decorators</p>
                  </div>
                </div>
              </div>
              <div className="col-5 px-0">
                <div className="imgeContainer">
                  <img src={Imge1} alt="service images" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 weddingCatagerWrapper">
            <div className="row weddingCatagerContainer">
              <div className="col-7 ">
                <div className="des">
                  <div>
                    <h4>Fashion</h4>
                    <p>Bridesmaid Dresses</p>
                  </div>
                </div>
              </div>
              <div className="col-5 px-0">
                <div className="imgeContainer">
                  <img src={Imge2} alt="service images" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 weddingCatagerWrapper">
            <div className="row weddingCatagerContainer">
              <div className="col-7 ">
                <div className="des">
                  <div>
                    <h4>Invites & Gifts</h4>
                    <p>Bomboniere/Favors</p>
                  </div>
                </div>
              </div>
              <div className="col-5 px-0">
                <div className="imgeContainer">
                  <img src={Imge3} alt="service images" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 weddingCatagerWrapper">
            <div className="row weddingCatagerContainer">
              <div className="col-7 ">
                <div className="des">
                  <div>
                    <h4>Entertainers</h4>
                    <p>Face Painter</p>
                  </div>
                </div>
              </div>
              <div className="col-5 px-0">
                <div className="imgeContainer">
                  <img src={Imge4} alt="service images" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 weddingCatagerWrapper">
            <div className="row weddingCatagerContainer">
              <div className="col-7 ">
                <div className="des">
                  <div>
                    <h4>Services</h4>
                    <p>Party Supplies</p>
                  </div>
                </div>
              </div>
              <div className="col-5 px-0">
                <div className="imgeContainer">
                  <img src={Imge5} alt="service images" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <a className="whybtn text-center" href="#0">
              View all categories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
