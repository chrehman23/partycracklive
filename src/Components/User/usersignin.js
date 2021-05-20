import React from 'react'
let usersignin =()=>{
    return(
    <>
     {/* <!-- Sub banner start --> */}
  <div class="sub-banner" style="background-image: url(assets/img/img-4.jpg);">
    <div class="container">
      <div class="breadcrumb-area">
        <h1>Sign In</h1>
        <ul class="breadcrumbs">
          <li><a href="index.php">Home</a></li>
          <li class="active">Sign in</li>
        </ul>
      </div>
    </div>
  </div>
  {/* <!-- Sub Banner end --> */}
  {/* <!-- Contact section start --> */}
  <div class="from-main section-ptb-big">
    <div class="container">
      <div class="row login-box">
        <div class="col-lg-6">
          <div class="form-section login_form">
            <h3 class="text-center mb-40">Sign In</h3>
            <div class="clearfix"></div>
            <form  class="d-inline-block w-100 mb-4">
              <div class="row">
                <div class="col-md-10 offset-md-1">
                  <div class="form-group icon_input">
                    <i class="fal fa-user-edit"></i>
                    <input type="text" name="text" class="input-text" placeholder="Enter Email / Mobile"/>
                  </div>
                  <div class="form-group icon_input">
                    <i class="fal fa-unlock"></i>
                    <input type="text" name="text" class="input-text" placeholder="Password" value=""/>
                  </div>
                  <a href="user_complete_profile.php" class="btn btn-theme btn-md w-100">Sign In</a>
                </div>
              </div>
            </form>
            <div class="divider divider-center my-2"><span>OR</span></div>
            <div class="social-list text-center pt-4">
              <a href="#" class="facebook-bg">
                <i class="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" class="google-bg">
                <i class="fab fa-google"></i> Google
              </a>
            </div>
            <div class="other_login">
              <p>
                <span class="mr-3">Don't Have an Account? <a href="user_signup.php">Sign up now</a></span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pr-0">
          <div class=" bg-color-15 align-self-center pad-0 none-992 bg-img"  style="background-image: url(assets/img/img-4.jpg);">
            <div class="info clearfix">
              <h3 class="mb-0">Welcome to partycrack</h3>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
    )
    }
export default usersignin