import React from "react"
let userwishlist =()=>{
    return(
        <>
        <div className="sub-banner" style="background-image: url(assets/img/img-4.jpg);">
    <div className="container">
      <div className="breadcrumb-area">
        <h1>My Account</h1>
        <ul className="breadcrumbs">
          <li><a href="index.php">Home</a></li>
          <li className="active">My Account</li>
        </ul>
      </div>
    </div>
  </div>
  {/* <!-- Sub Banner end --> */}

  <div className="section pt-80 pb-80">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="dashboard_menu">
            <div className="vendor-user-profile">
              <div className="vendor-profile-img">
                <img src="assets/img/vendors/contact-info.jpg" alt="" className="rounded-circle"/>
              </div>
              <h3 className="vendor-profile-name">John Doe</h3>
            </div>
            <ul className="nav nav-tabs flex-column" role="tablist">
              <li className="nav-item">
                <a className="nav-link" href="user_account.php"><i className="fas fa-th-large"></i>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_edit_profile.php"><i className="fal fa-pencil"></i>Edit Profile</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="user_change_password.php"><i className="fal fa-key"></i>Change Password</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="user_wishlist.php"><i className="far fa-heart"></i>Wishlist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_signin.php"><i className="fal fa-sign-out-alt"></i>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="dash-form mb-0">
            <div method="GET">
              <h4 className="bg-grea-3">Wishlist</h4>
              <div className="search-contents-sidebar custom-partycrack-box-wrapper">
                <div className="row pad-20">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="partycrack-box">
                      <div className="partycrack-thumbnail" style="height: 137px;">
                        <a href="#0" className="partycrack-img">
                          <img src="assets/img/vendors/water-165219_640.jpg" alt="partycrack"/>
                        </a>
                        <a className="favourites" href="#"><i className="far fa-heart"></i></a>
                      </div>
                      <div className="text-vendor">
                        <div className="text-top">
                          <div className="vc_main d-flex justify-content-between align-items-center">
                            <div className="heading-part">
                              <a href="venues_details.php" className="ventor_title">Calista Resort</a>
                              <a href="#0" className="location-wrap"><i className="flaticon-pin"></i>123 Kathal St. Tampa
                                City</a>
                            </div>
                            <div className="pb_review">
                              <span
                                className="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                                <i className="fa fa-star margin-r-5"></i>4.8
                              </span>
                              <small>19 reviews</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between ">


                          </div>
                        </div>
                        <div className="text-foot d-flex justify-content-between align-items-center">
                          <span className="strike "><i class="far fa-dollar-sign"></i> 1,000 Per Plate</span>
                          <a href="#0" className="whatsapp-contact d-flex justify-content-center align-items-center"><i
                              className="fab fa-whatsapp"></i> Contact</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="partycrack-box">
                      <div className="partycrack-thumbnail" style="height: 137px;">
                        <a href="#0" class="partycrack-img">
                          <img src="assets/img/vendors/water-165219_640.jpg" alt="partycrack"/>
                        </a>
                        <a className="favourites" href="#"><i className="far fa-heart"></i></a>
                      </div>
                      <div className="text-vendor">
                        <div className="text-top">
                          <div className="vc_main d-flex justify-content-between align-items-center">
                            <div className="heading-part">
                              <a href="venues_details.php" className="ventor_title">Calista Resort</a>
                              <a href="#0" className="location-wrap"><i className="flaticon-pin"></i>123 Kathal St. Tampa
                                City</a>
                            </div>
                            <div className="pb_review">
                              <span
                                className="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                                <i className="fa fa-star margin-r-5"></i>4.8
                              </span>
                              <small>19 reviews</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between ">


                          </div>
                        </div>
                        <div className="text-foot d-flex justify-content-between align-items-center">
                          <span className="strike "><i class="far fa-dollar-sign"></i> 1,000 Per Plate</span>
                          <a href="#0" className="whatsapp-contact d-flex justify-content-center align-items-center"><i
                              className="fab fa-whatsapp"></i> Contact</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div class="partycrack-box">
                      <div class="partycrack-thumbnail" style="height: 137px;">
                        <a href="#0" class="partycrack-img">
                          <img src="assets/img/vendors/water-165219_640.jpg" alt="partycrack"/>
                        </a>
                        <a class="favourites" href="#"><i class="far fa-heart"></i></a>
                      </div>
                      <div class="text-vendor">
                        <div class="text-top">
                          <div class="vc_main d-flex justify-content-between align-items-center">
                            <div class="heading-part">
                              <a href="venues_details.php" class="ventor_title">Calista Resort</a>
                              <a href="#0" class="location-wrap"><i class="flaticon-pin"></i>123 Kathal St. Tampa
                                City</a>
                            </div>
                            <div className="pb_review">
                              <span
                                className="StarRating center rating-5 regular d-flex justify-content-center align-items-center">
                                <i className="fa fa-star margin-r-5"></i>4.8
                              </span>
                              <small>19 reviews</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between ">


                          </div>
                        </div>
                        <div className="text-foot d-flex justify-content-between align-items-center">
                          <span className="strike "><i class="far fa-dollar-sign"></i> 1,000 Per Plate</span>
                          <a href="#0" className="whatsapp-contact d-flex justify-content-center align-items-center"><i
                              class="fab fa-whatsapp"></i> Contact</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
        </>
    )
}
export default userwishlist