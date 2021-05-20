import React from 'react'
import {NavLink} from 'react-router-dom'
let useraccount = ()=>{
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
              <div class="vendor-profile-img">
                <img src="assets/img/vendors/contact-info.jpg" alt="" className="rounded-circle"/>
              </div>
              <h3 className="vendor-profile-name">John Doe</h3>
            </div>
            <ul className="nav nav-tabs flex-column" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" href="user_account.php"><i className="fas fa-th-large"></i>Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_edit_profile.php"><i className="fal fa-pencil"></i>Edit Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_change_password.php"><i class="fal fa-key"></i>Change Password</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_wishlist.php"><i class="far fa-heart"></i>Wishlist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_signin.php"><i class="fal fa-sign-out-alt"></i>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="dashboard_content">
            <div className="card">
              <div className="card-header">
                <h3>Welcome to PartyCrack</h3>
              </div>
              <div className="card-body">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6">
                    <a href="#0" className="icon_box icon_box_style4 box_shadow1">
                      <div className="icon">
                        <i className="fal fa-user-circle"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>My Profile</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a href="#0" className="icon_box icon_box_style4 box_shadow1">
                      <div class="icon">
                        <i class="far fa-heart"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>My Wishlist</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-sm-6">
                    <a href="#0" className="icon_box icon_box_style4 box_shadow1">
                      <div className="icon">
                        <i className="far fa-pencil-alt"></i>
                      </div>
                      <div className="icon_box_content">
                        <h5>Edit Profile</h5>
                      </div>
                    </a>
                  </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
       </>
    )
}
export default useraccount;