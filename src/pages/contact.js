import React from 'react'

let contact = () => {
    return (
        <>
            <div className="sub-banner" style="background-image: url(assets/img/img-4.jpg);">
                <div className="container">
                    <div name="breadcrumb-area">
                        <h1>Contact Us</h1>
                        <ul className="breadcrumbs">
                            <li><a href="index.php">Home</a></li>
                            <li className="active">contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Sub Banner end --> */}
            {/* <!-- Contact 2 start --> */}
            <div className="contact-2 content-area-5">
                <div className="container">
                    {/* <!-- Main title --> */}
                    <div className="main-title text-center">
                        <h1>Contact Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <form action="#" method="GET" enctype="multipart/form-data">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group name">
                                            <input type="text" name="name" className="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group email">
                                            <input type="email" name="email" className="form-control"
                                                   placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group subject">
                                            <input type="text" name="subject" className="form-control"
                                                   placeholder="Subject"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div className="form-group number">
                                            <input type="text" name="phone" className="form-control"
                                                   placeholder="Number"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group message">
                                            <textarea className="form-control" name="message"
                                                      placeholder="Write message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="send-btn text-center">
                                            <button type="submit" className="btn btn-md button-theme">Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-info"
                                     style="background-image: url('assets/img/contact-info.jpg');">
                                    <div className="media">
                                        <i className="flaticon-phone"></i>
                                        <div className="media-body">
                                            <h5>Phone:</h5>
                                            <p><a href="tel:0477-0477-8556-552">+91 999 999 9999</a></p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <i className="flaticon-mail"></i>
                                        <div className="media-body">
                                            <h5>Email:</h5>
                                            <p><a href="#">info@partycrack.com</a></p>
                                        </div>
                                    </div>
                                    <div className="media">
                                        <i className="flaticon-internet"></i>
                                        <div className="media-body">
                                            <h5>Web:</h5>
                                            <p><a href="#">info@partycrack.com</a></p>
                                        </div>
                                    </div>
                                    <div className="media mb-0">
                                        <i className="flaticon-fax"></i>
                                        <div className="media-body">
                                            <h5>Whatsapp:</h5>
                                            <p><a href="#">+91 999 999 9999</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* <!-- Contact 2 end --> */}

        </>
    )
}
export default contact;