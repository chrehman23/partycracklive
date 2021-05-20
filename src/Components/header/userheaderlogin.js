import React from 'react';
import { Link } from 'react-router-dom';
let userheaderlogin = ()=>{
    return(
    <>
    <header className="main-header">
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <ul className="social-list clearfix text-left">
              <li><a href="#" className="facebook-bg"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="twitter-bg"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="google-bg"><i className="fab fa-google-plus"></i></a></li>
              <li><a href="#" className="linkedin-bg"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="col-6 text-right">
            <Link className="bescom_vendor text-white" to="/vendor-signup">Become a Vendor</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fal fa-bars"></span>
          </button>
          <a className="navbar-brand logo" href="index.php">
            <p className="font-24 mb-0">partycrack</p>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto d-none d-lg-flex">
              <li className="nav-item active">
                <a className="nav-link" href="#" id="">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about_us.php" id="">About</a>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#0" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Venues</a>
                <div className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                  <div className="megamenu-area">
                    <div className="row sobuz">
                      <div className="col-lg-6">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">By Type</h6>
                          <a className="dropdown-item" href="venues.php">Banquet Halls</a>
                          <a className="dropdown-item" href="#0">Lawns / Farmhouses</a>
                          <a className="dropdown-item" href="#0">Resorts</a>
                          <a className="dropdown-item" href="#0">Small Function Halls</a>
                          <a className="dropdown-item" href="#0">Destination Wedding</a>
                          <a className="dropdown-item" href="#0">Kalyan Mandapam</a>
                          <a className="dropdown-item" href="#0">4 Star & Above Hotels</a>
                          <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Venues By Type</a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">By City</h6>
                          <a className="dropdown-item" href="#0">Mumbai</a>
                          <a className="dropdown-item" href="#0">Bangalore</a>
                          <a className="dropdown-item" href="#0">Pune</a>
                          <a className="dropdown-item" href="#0">Kolkata</a>
                          <a className="dropdown-item" href="#0">Hyderabad</a>
                          <a className="dropdown-item" href="#0">Delhi NCR</a>
                          <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Venues By Type</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">Vendors</a>
                <div className="dropdown-menu megamenu" aria-labelledby="dropdown01">
                  <div className="megamenu-area">
                    <div className="row sobuz">
                      <div className="col-lg-6">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">Photographers</h6>
                          <a className="dropdown-item" href="#0">Photographers</a>
                          <a class="dropdown-item" href="#0">Cinema/Video</a>
                          <a class="dropdown-item" href="#0">Pre Wedding Shoot</a>
                          <h6 className="megamenu-title">Makeup</h6>
                          <a className="dropdown-item" href="#0">Bridal Makeup</a>
                          <a className="dropdown-item" href="#0">Family Makeup</a>
                          <a className="dropdown-item" href="#0">Pre Wedding Shoot</a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="megamenu-section">
                          <h6 className="megamenu-title">Bridal Wear</h6>
                          <a className="dropdown-item" href="#0">Bridal Lehengas</a>
                          <a className="dropdown-item" href="#0">Kanjeevaram / Silk Sarees</a>
                          <a className="dropdown-item" href="#0">Cocktail Gowns</a>
                          <a className="dropdown-item" href="#0">Trousseau Sarees</a>
                          <a className="dropdown-item" href="#0">Bridal Lehenga on Rent</a>
                          <a className="dropdown-item" href="#0">Virtual Shopping Service</a>
                          <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Bridal Wear</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.php" id="">Contact Us </a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto d-none d-lg-flex">
              <li className="nav-item login-nav dropdown">
                <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Account Name
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="user_account.php">My Account</a>
                  <a className="dropdown-item" href="user_edit_profile.php">Edit Account</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="user_signin.php">Logout</a>
                </div>
              </li>
            </ul>

            {/* <!-- Mobile menu --> */}
            <ul className="navbar-nav ml-auto d-lg-none mobile_menu">
              <li className="nav-item login-nav">
                <a className="nav-link" href="user_signin.php"><i class="fal fa-user"></i> Login / Register</a>
              </li>
              <li>
                <hr/>
              </li>
              <li className="nav-item">
                <h6 className="megamenu-title border-0 px-3 pb-0">All partycrack</h6>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/town-hall.svg" alt=""/> Venues</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/photographer.svg" alt=""/> Photographers</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/cosmetics.svg" alt=""/> Makeup</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/dress.svg" alt=""/> Bridal Wear</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/groom.svg" alt=""/> Groom Wear</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i className="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/henna-painted-hand.svg" alt=""/> Mehndi</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i class="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/stars.svg" alt=""/> Planning & Decor</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i className="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/dish.svg" alt=""/> Food</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i className="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false"><img src="assets/img/icons/wedding-invitation.svg" alt=""/> Invites & Gifts</a>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><i className="far fa-plus"></i> View all Menu</a>
                </div>
              </li>
            </ul>
            {/* <!-- Mobile menu --> */}

          </div>
          <ul className="d-flex ml-auto d-lg-none">
            <li className="select_cities mr-3">
              <a className="text-theme" href="#" data-toggle="modal" data-target="#citymodal">All Cities <i
                  className="far fa-angle-down"></i></a>
            </li>
            <li className="login-mobile">
              <a className="text-theme" href="user_signin.php"><i class="fas fa-user-plus"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
    </>
     )
    }
    export default userheaderlogin
