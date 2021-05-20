import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Modal from 'react-bootstrap/Modal'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

// imges
import {AiOutlineDown} from 'react-icons/ai'
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import imge1 from "../../assets/imgs/img1.jpg";
import imge2 from "../../assets/imgs/img2.jpg";

class TopSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, venderModel:false };
  }

 


  render() {
    return (
      <>
        <div className="topHeaderCarasole">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={imge2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={imge1} alt="Second slide" />
            </Carousel.Item>
          </Carousel>
          <div className="carasoleCenterContainer">
            <div>
              <h3>Find & Book your perfect Venues And Vendors</h3>
            </div>
            <p>
              Discover the biggest trove of farm houses, banquets, Photographers
              & more!
            </p>

            <div className="topSliderOptions">
              <div onClick={() => this.setState({ venderModel: true })}>
                <span>Select vendor type</span>
                <span>
                  <AiOutlineDown />
                </span>
              </div>
              <div onClick={() => this.setState({ show: true })}>
                <span>Select city</span>
                <span>
                  <AiOutlineDown />
                </span>
              </div>
              <div>
                <span>
                  <FaSearch />
                </span>
                <span>
                  <strong>Search</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          size="xl"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header
            closeButton
            style={{ background: "#ff4068", color: "white" }}
          >
            <Modal.Title id="example-custom-modal-styling-title">
              Select city
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <div className="border modalSearchContainer">
                  <div>
                    <FiSearch />
                  </div>
                  <div>
                    <input placeholder="Search city..." type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="HeaderDropDownContainer"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Top Cities</p>
                  <NavDropdown.Divider />
                  <div className="cityItems">
                    <NavDropdown.Item href="#action/3.1">
                      Sydney
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Melbourne
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Brisbane
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Perth
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Adelaide
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Canberra
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Hobart
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Darwin
                    </NavDropdown.Item>
                  </div>
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Popular Cities</p>
                  <NavDropdown.Divider />
                  <div className="cityItems">
                    <NavDropdown.Item href="#action/3.2">
                      Albany
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.3">
                      Albury
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Ballarat
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Bathurst
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Bendigo
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Blue Mountains
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Bunbury
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Bundaberg
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Sunshine Coast
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Tamworth
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Toowoomba
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Townsville
                    </NavDropdown.Item>
                  </div>
                </div>
              </div>
              <div>
                <div className="dropDownSections pt-0 pt-md-5">
                  <div className="cityItems">
                    <NavDropdown.Item href="#action/3.2">
                      Cairns
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.3">
                      Central Coast
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Coffs Harbour
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Dubbo
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Gawler
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Geelong
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Geraldton
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Gladstone
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Gold Coast
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Hervey Bay
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Kalgoorlie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Wagga Wagga
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Warrnambool
                    </NavDropdown.Item>
                  </div>
                </div>
              </div>
              <div>
                <div className="dropDownSections pt-0 pt-md-5">
                  <div className="cityItems">
                  <NavDropdown.Item href="#action/3.1">
                    Launceston
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Lismore
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Wollongong
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mackay</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Maitland
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Melton</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Mildura
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Newcastle
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nowra</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Orange</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Port Macquarie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Rockhampton
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Shepparton
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sunbury
                  </NavDropdown.Item>
                </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.venderModel}
          onHide={() => this.setState({ venderModel: false })}
          size="xl"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header
            closeButton
            style={{ background: "#ff4068", color: "white" }}
          >
            <Modal.Title id="example-custom-modal-styling-title">
              Select vendor type
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <div className="border modalSearchContainer">
                  <div>
                    <FiSearch />
                  </div>
                  <div>
                    <input placeholder="Search vendor..." type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="HeaderDropDownContainer"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Invites & Gifts</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    {" "}
                    Bomboniere/Favors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Gifts</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Invitation Cards
                  </NavDropdown.Item>
                </div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Fashion</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Bridesmaid Dresses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Dress Designers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Beauty Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Hair & Makeup
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Jewellery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Wedding Dresses
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    {" "}
                    Character Wear
                  </NavDropdown.Item>
                </div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Ceremony</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Celebrants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Priests
                  </NavDropdown.Item>
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Music and Dance</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">DJs</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Choreographer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Wedding Entertainers/Music Bands
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Orchestra
                  </NavDropdown.Item>
                </div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Food</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Catering Services
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Cake/CupCakes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Bartenders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Barista
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Deserts
                  </NavDropdown.Item>
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Services</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Security
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Transport & Cars
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Party Furniture
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Party Supplies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Cleaners
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    BabySitter
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Party helper
                  </NavDropdown.Item>
                </div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Entertainers</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Face Painters
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Swing/Games Provider
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Magicians
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Special Characters
                  </NavDropdown.Item>
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Photographers</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Photographers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Cinema/Video
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Pre Wedding Shoot
                  </NavDropdown.Item>
                </div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Planning and Décor</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    {" "}
                    Wedding Planners
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Event Planners
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Decorators
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Small Function Decors
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    Florist
                  </NavDropdown.Item>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default TopSlider;
