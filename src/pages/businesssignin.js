import React from 'react'

let businesssignin = () => {
    return (
        <>
            <div className="sub-banner" style="background-image: url(assets/img/img-4.jpg);">
                <div className="container">
                    <div className="breadcrumb-area">
                        <h1>Sign In</h1>
                        <ul className="breadcrumbs">
                            <li><a href="index.php">Home</a></li>
                            <li className="active">Sign in</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Sub Banner end --> */}
            {/* <!-- Contact section start --> */}
            <div className="from-main section-ptb-big">
                <div className="container">
                    <div className="row login-box">
                        <div class="col-lg-6">
                            <div className="form-section login_form">
                                <div className="text-center mb-30">
                                    <h3 className="mb-0">Grow your Business with partycrack</h3>
                                    <p className="text-muted mt-2 mb-0">Sign In to access your Dashboard</p>
                                </div>
                                <div className="clearfix"></div>
                                <form className="d-inline-block w-100 mb-4">
                                    <div className="row">
                                        <div className="col-md-10 offset-md-1">
                                            <div className="form-group icon_input">
                                                <i className="fal fa-user-edit"></i>
                                                <input type="text" name="text" className="input-text"
                                                       placeholder="Enter Email / Mobile"/>
                                            </div>
                                            <div className="form-group icon_input">
                                                <i className="fal fa-unlock"></i>
                                                <input type="text" name="text" className="input-text"
                                                       placeholder="Password" value=""/>
                                            </div>
                                            <a href="vendor-dashboard" className="btn btn-theme btn-md w-100">Sign
                                                In</a>
                                        </div>
                                    </div>
                                </form>
                                <div className="other_register"><p>Register as a Service Provider? <a
                                    href="business_signup.php">Sign up</a></p></div>
                                <div className="other_login">
                                    <p>
                                        <span className="mr-3">Are you a customer?</span> <span><a
                                        href="user_signin.php" className="btn-md btn-theme">Customer sign in</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pr-0">
                            <div className=" bg-color-15 align-self-center pad-0 none-992 bg-img"
                                 style="background-image: url(assets/img/img-4.jpg);">
                                <div className="info clearfix">
                                    <h3 className="mb-0">Welcome to partycrack</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact section end --> */}
        </>
    )
}
export default businesssignin