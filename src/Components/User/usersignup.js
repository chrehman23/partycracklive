import React from "react"
let usersignup =()=>{
    return(
        <>
         <div className="sub-banner" style="background-image: url(assets/img/img-4.jpg);">
    <div className="container">
      <div className="breadcrumb-area">
        <h1>Sign Up</h1>
        <ul className="breadcrumbs">
          <li><a href="index.php">Home</a></li>
          <li className="active">Sign Up</li>
        </ul>
      </div>
    </div>
  </div>
  {/* <!-- Sub Banner end --> */}
  {/* <!-- Contact section start --> */}
  <div className="from-main section-ptb-big">
    <div className="container">
      <div className="row login-box">
        <div className="col-lg-6">
          <div className="form-section login_form">
            <h3 className="text-center mb-40">Sign Up</h3>
            <div className="clearfix"></div>
            <form  className="d-inline-block w-100 mb-4">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="form-group icon_input">
                    <i className="fal fa-user-edit"></i>
                    <input type="text" name="text" className="input-text" placeholder="Enter Email / Mobile"/>
                  </div>
                  <div className="form-group icon_input">
                    <i className="fal fa-unlock"></i>
                    <input type="text" name="text" className="input-text" placeholder="Password" value=""/>
                  </div>
                  <a href="user_complete_profile.php" className="btn btn-theme btn-md w-100">Sign up</a>
                </div>
              </div>
            </form>
            <div className="divider divider-center my-2"><span>OR</span></div>
            <div className="social-list text-center pt-4">
              <a href="#" className="facebook-bg">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="google-bg">
                <i className="fab fa-google"></i> Google
              </a>
            </div>
            <div className="other_login">
              <p>
                <span className="mr-3">Don't Have an Account? <a href="register.php">Sign up now</a></span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pr-0">
          <div className=" bg-color-15 align-self-center pad-0 none-992 bg-img"  style="background-image: url(assets/img/img-4.jpg);">
            <div className="info clearfix">
              <h3 className="mb-0">Welcome to partycrack</h3>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}
export default usersignup