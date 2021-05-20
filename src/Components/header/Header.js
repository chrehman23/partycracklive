import React from 'react';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
// Icons
import {RiUser3Line,} from 'react-icons/ri';
import {SiFacebook} from 'react-icons/si';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaGooglePlus, FaLinkedin} from 'react-icons/fa';

import img1 from "../../assets/imgs/img1.jpg";
import img2 from "../../assets/imgs/img2.jpg";
import img3 from "../../assets/imgs/img3.jpg";
import img4 from "../../assets/imgs/img4.jpg";
import img5 from "../../assets/imgs/img5.jpg";
import img6 from "../../assets/imgs/img6.jpg";
import img8 from "../../assets/imgs/img8.png";
import img9 from "../../assets/imgs/img9.png";
import img10 from "../../assets/imgs/img10.png";
import img11 from "../../assets/imgs/img11.png";
import img12 from "../../assets/imgs/img12.png";
import img13 from "../../assets/imgs/img13.png";
import img14 from "../../assets/imgs/img14.png";
import img15 from "../../assets/imgs/img15.jpg";

import './header.css'
import { Link } from 'react-router-dom';

let Header = () => {
    return (
        <>
            {/* <!-- Main header start --> */}


            {/* ************************************ */}
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className='col-12'>
                            <div className='TopBar'>
                                <div className="">
                                    <ul className="social-list clearfix text-left">
                                        <li><a href="#" className="facebook-bg"><SiFacebook/><i
                                            className="fab fa-facebook"></i></a></li>
                                        <li><a href="#" className="twitter-bg"><AiOutlineTwitter/><i
                                            className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" className="google-bg"><FaGooglePlus/><i
                                            className="fab fa-google-plus"></i></a></li>
                                        <li><a href="#" className="linkedin-bg"><FaLinkedin/><i
                                            className="fab fa-linkedin"></i></a></li>
                                    </ul>
                                </div>
                                <div className="">
                                    <Link className="bescom_vendor" to="/vendor-signup">Become a Vendor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <Navbar className='navigationBar' expand="lg">
                    <Navbar.Brand className='NavbarBrandTitle' href="#home">Partycrack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <NavDropdown className='HeaderDropDownContainer' title="Venues" id="basic-nav-dropdown">
                                <div>
                                    <div className='dropDownSections'>
                                        <p className='dropDownHeading'>By Type</p>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.1">Banquet haalls

                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">lawn/Farmhouses</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Resorts</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Small Function Halls</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Destination Wedding</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">kalyan Mandapam</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">4 star & above Hotels</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">+ View all venue by type</NavDropdown.Item>
                                    </div>

                                </div>
                                <div>
                                    <div className='dropDownSections'>
                                        <p className='dropDownHeading'>By City</p>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.1">Mumbai</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Banglore</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Pune</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Kolokata</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Hyderabad</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Delhi</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">+ View all venue by type</NavDropdown.Item>
                                    </div>
                                </div>
                            </NavDropdown>
                            <NavDropdown className='HeaderDropDownContainer' title="Vendors" id="basic-nav-dropdown">
                                <div>
                                    <div className='dropDownSections'>
                                        <p className='dropDownHeading'>Photographers</p>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.1">PhotoGraphers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Cinema/Video</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Pre Wedding Shot</NavDropdown.Item>

                                    </div>
                                    <div className='dropDownSections'>
                                        <p className='dropDownHeading'>Makeup</p>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.1">Bridal Makeup</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Family Makeup</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Pre Wedding Shot</NavDropdown.Item>

                                    </div>
                                </div>
                                <div>
                                    <div className='dropDownSections'>
                                        <p className='dropDownHeading'>Bridal Wear</p>
                                        <NavDropdown.Divider/>
                                        <NavDropdown.Item href="#action/3.1">Bridal Lehengas</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Kanjeevaram / Silk
                                            Sarees</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Cocktail Gowns</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Trousseau Sarees</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Bridal Lehenga on Rent</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Virtual Shopping Service</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">+ View all Bridal Wear
                                        </NavDropdown.Item>
                                    </div>
                                    <div className='dropDownSections'>


                                    </div>
                                </div>
                            </NavDropdown>
                            <Nav.Link href="#link">Contact Us</Nav.Link>


                        </Nav>
                        <a href='#' className='loadingRegiterbtn'> <RiUser3Line/> Login / Register</a>

                    </Navbar.Collapse>
                </Navbar>
            </div>

            {/* ********************************** */}
            <div className="container">
                <div className="row pt-1 pb-1">
                    <div className="col-lg-12">

                    </div>
                </div>
            </div>
            <section>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..."/>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className="search-sec">
                <div className="container">
                    <form action="#" method="post" novalidate="novalidate">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt"
                                               placeholder="Enter Pickup City"/>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt"
                                               placeholder="Enter Drop City"/>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <select className="form-control search-slt" id="exampleFormControlSelect1">
                                            <option>Select Vehicle</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                            <option>Example one</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <button type="button" className="btn btn-danger wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <div className="main">
                <h1>Popular Venue Searches</h1>
                <p>Loreum ispum dolor sit amet</p>
                <img className="img" src={img6}></img>
            </div>

            <Container>
                <Row>
                    <Col md={3} md={4}>
                        <Image className="star" src={img4} rounded/><br/>
                        <h1> 4 star and above</h1>
                    </Col>
                    <Col md={12} md={4}>
                        <Image className="bq" src={img3} rounded/><br/>
                        <h1>Banquet Halls</h1>
                    </Col>
                    <Col md={12} md={4}>
                        <Image className="fa" src={img5} rounded/><br/>
                        <h1>lawns & Farm</h1>
                    </Col>

                </Row>
            </Container>

            <div className="services services-2 content-area mt-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 align-self-center">
                            <div className="main-title main-title-3">
                                <h1>Why Choose us</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                                <a href="#0" class="btn important-btn btn-theme btn-md">Contact us</a>
                            </div>
                        </div>
                        <div className="col-lg-7 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="service-info-2">
                                        <div className="number">1</div>
                                        <div className="icon">
                                            <i className="flaticon-trust"></i>
                                        </div>
                                        <div className="detail">
                                            <h3>
                                                Lorem ipsum
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service-info-2">
                                        <div className="number">2</div>
                                        <div className="icon">
                                            <i className="flaticon-trust"></i>
                                        </div>
                                        <div className="detail">
                                            <h3>
                                                Lorem ipsum
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service-info-2">
                                        <div className="number">3</div>
                                        <div className="icon">
                                            <i className="flaticon-trust"></i>
                                        </div>
                                        <div className="detail">
                                            <h3>
                                                Lorem ipsum
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="service-info-2">
                                        <div className="number">4</div>
                                        <div className="icon">
                                            <i class="flaticon-trust"></i>
                                        </div>
                                        <div className="detail">
                                            <h3>
                                                Lorem ipsum
                                            </h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main">
                <h1>Popular Partycrack Searches</h1>
                <p>Loreum ispum dolor sit amet</p>
                <img className="img" src={img6}></img>
            </div>


            <Container>
                <Row>
                    <Col md={12} md={2}>
                        <Image className="we" src={img8} rounded/><br/>
                        <h1> Bridal Wear</h1>
                    </Col>
                    <Col md={12} md={2}>
                        <Image className="mk" src={img9} rounded/> <br/>
                        <h1>Bridal Makeup</h1>
                    </Col>
                    <Col md={12} md={2}>
                        <Image className="ph" src={img11} rounded/><br/>
                        <h1>Photo<br/>Graphers</h1>
                    </Col>
                    <Col md={12} md={2}>
                        <Image className="cs" src={img10} rounded/><br/>
                        <h1>Catering Services</h1>
                    </Col>
                    <Col md={12} md={2}>
                        <Image className="me" src={img12} rounded/> <br/>
                        <h1> Mehndi</h1>
                    </Col>


                </Row>
            </Container>

            <div className="main">
                <h1>Vendor Partycrack</h1>
                <p>Loreum ispum dolor sit amet</p>
                <img className="img" src={img6}></img>

            </div>
            <Container>
                <Row>
                    <Col>
                        <img className="venue" src={img15}/>
                        <h4>Venues</h4><br/><img src={img6}/><br/>loreum ispum
                    </Col>
                    <Col>
                        <img className="venue" src={img11}/>

                        <h4>PhotoGraphers</h4> <br/><img src={img6}/><br/>loreum ispum
                    </Col>
                    <Col>
                        <img className="venue" src={img8}/>
                        <h4>Makeup</h4> <br/><img src={img6}/><br/>loreum ispum
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <img className="venue" src={img9}/>

                        <h4>Bridal Wear</h4> <br/><img src={img6}/><br/>loreum ispum
                    </Col>
                    <Col>
                        <img className="venue" src={img13}/>


                        <h4>Bouquets</h4> <br/><img src={img6}/><br/>loreum ispum
                    </Col>
                    <Col>
                        <img className="venue" src={img14}/>


                        <h4>Groom Wear</h4> <br/><img src={img6}/><br/>loreum ispum
                    </Col>
                </Row>
            </Container>
            <div className="text-center">
                <button type="button" className="btn btn-primary">View All Partycrack</button>
            </div>


            <div className="main">
                <h1>Our Videos</h1>
                <p>Loreum ispum dolor sit amet</p>
                <img className="img" src={img6}></img>
            </div>

            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>Partycrack</h6>
                            <p class="text-justify">loreum <i>ispum </i> loreum ipsum.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>UsefulLinks</h6>
                            <ul class="footer-links">
                                <li>home</li>
                                <li>about us</li>
                                <li>venues</li>
                                <li>vendor</li>
                                <li>contact us</li>

                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6> Links</h6>
                            <ul class="footer-links">
                                <li>home</li>
                                <li>About Us</li>
                                <li>venues</li>
                                <li>vendor</li>
                                <li>contact us</li>
                            </ul>
                        </div>
                    </div>

                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by
                                <a href="#">Partycrack</a>.
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ************************************ */}


        </>
    )
}

export default Header