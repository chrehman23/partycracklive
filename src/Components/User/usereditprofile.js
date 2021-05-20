import React from 'react'
import {NavLink} from 'react-router-dom'
let usereditprofile = ()=>{
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
                <a className="nav-link active" href="user_edit_profile.php"><i className="fal fa-pencil"></i>Edit Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_change_password.php"><i className="fal fa-key"></i>Change Password</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="user_wishlist.php"><i className="far fa-heart"></i>Wishlist</a>
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
              <h4 className="bg-grea-3">Edit Profile</h4>
              <div className="search-contents-sidebar">
                <div className="row pad-20">
                  <div className="col-12">
                    <div className="form-group">
                      <div className="picture-container">
                        <div className="picture">
                          <img src="assets/img/vendors/contact-info.jpg" className="picture-src" id="wizardPicturePreview" title=""/>
                          <input type="file" id="wizard-picture" className=""/>
                        </div>
                        <h6 className="">Choose Picture</h6>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="input-text" name="your name" placeholder="First Name" value="John"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="input-text" name="your name" placeholder="Last Name" value="Doe"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="input-text" name="your name" placeholder="Email" value="johndoe@gmail.com"/>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input type="text" className="input-text" name="your name" placeholder="First Name" value="9797979797"/>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <a href="#" className="btn btn-md button-theme">Update</a>
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
export default usereditprofile;