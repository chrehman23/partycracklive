import React from 'react'
// import {NavLink} from 'react-router-dom'
let Home = () => {
    return (
        <>
            <div id="main-wrapper">

                {/* <!-- Banner start --> */}
                <div className
                         ="banner" id="banner">
                    <div id="bannerCarousole" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item banner-max-height active item-bg">
                                <img className="d-block w-100" src="assets/img/banner/img-1.jpg"/>
                                <div className="carousel-caption banner-slider-inner h-100"></div>
                            </div>
                            <div className="carousel-item banner-max-height item-bg">
                                <img className="d-block w-100" src="assets/img/banner/img-2.jpg"/>
                                <div className="carousel-caption banner-slider-inner h-100"></div>
                            </div>
                            <div className="carousel-caption d-flex h-100 banner-slider-inner-2">
                                <div className="carousel-content container">
                                    <div className="text-center">
                                        <div className="clearfix">
                                            <h3 className="">Find & Book your perfect <br/>Venues And Vendors</h3>
                                            <p>Discover the biggest trove of farm houses, banquets, Photographers &
                                                more!</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="inline-search-area isa-4 clearfix">
                                            <div className="row">
                                                <div className="col-lg-4 search-col">
                                                    <div className="select_pop">
                                                        <a className="select_pick" href="#0" data-toggle="modal"
                                                           data-target="#partycrackmodal">Select vendor type</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 search-col">
                                                    <div className="select_pop">
                                                        <a className="select_pick" href="#" data-toggle="modal"
                                                           data-target="#citymodal">Select city</a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 search-col">
                                                    <button className="btn button-theme btn-search btn-block">
                                                        <i className="fa fa-search"></i><strong>Search</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-search-area isa-3 clearfix">
                                            <div className="row">
                                                <div className="col-8 search-col">
                                                    <div className="select_pop">
                                                        <a className="select_pick" href="#0" data-toggle="modal"
                                                           data-target="#partycrackmodal_mobile">Select vendor type</a>
                                                    </div>
                                                </div>
                                                <div className="col-4 search-col">
                                                    <button className="btn button-theme btn-search btn-block">
                                                        <i className="fa fa-search"></i><strong>Search</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#bannerCarousole" role="button" data-slide="prev">
                          <span className="slider-mover-left" aria-hidden="true">
                            <i className="fa fa-angle-left"></i>
                          </span>
                        </a>
                        <a className="carousel-control-next" href="#bannerCarousole" role="button" data-slide="next">
                          <span class="slider-mover-right" aria-hidden="true">
                            <i class="fa fa-angle-right"></i>
                          </span>
                        </a>
                    </div>
                </div>
                {/* <!-- Banner end --> */}

                {/* <!-- partycrack strat --> */}
                <div className="partycrack section-pt">
                    <div className="container">
                        {/* <!-- Main title --/> */}
                        <div className="main-title text-center">
                            <h1>Popular Venue Searches</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img src="assets/img/black-logo.png" alt=""/>
                        </div>
                        <div className="popular_Venue_slider owl-carousel owl-theme slide-v1">
                            <div className="item">
                                <div className="vendor-listing-wrap">
                                    <div className="vendor-img">
                                        <div className="overlay-box">
                                            <a href="#0" class="btn btn-theme">View Details</a>
                                        </div>
                                        <div className="vendor-icon"><i class="fal fa-warehouse-alt"></i></div>
                                        <a href="#0"><img src="assets/img/vendors/walkway-347319_640.jpg" alt=""/></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="#0">4 Star & Above Hotels</a></h3>
                                        <p className="location"><i class="fal fa-map-marker-alt"></i> Armidale | Ballina
                                            | Balranald | More...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="vendor-listing-wrap">
                                    <div className="vendor-img">
                                        <div className="overlay-box">
                                            <a href="#0" class="btn btn-theme">View Details</a>
                                        </div>
                                        <div className="vendor-icon"><i class="fal fa-warehouse-alt"></i></div>
                                        <a href="#0"><img src="assets/img/vendors/hall-3851014_640.jpg" alt=""/></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="#0">Banquet Halls</a></h3>
                                        <p className="location"><i class="fal fa-map-marker-alt"></i> Armidale | Ballina
                                            | Balranald | More...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="vendor-listing-wrap">
                                    <div className="vendor-img">
                                        <div className="overlay-box">
                                            <a href="#0" class="btn btn-theme">View Details</a>
                                        </div>
                                        <div className="vendor-icon"><i class="fal fa-warehouse-alt"></i></div>
                                        <a href="#0"><img src="assets/img/vendors/water-165219_640.jpg" alt=""/></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="#0">Lawns / Farmhouses</a></h3>
                                        <p className="location"><i class="fal fa-map-marker-alt"></i> Armidale | Ballina
                                            | Balranald | More...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="vendor-listing-wrap">
                                    <div className="vendor-img">
                                        <div className="overlay-box">
                                            <a href="#0" class="btn btn-theme">View Details</a>
                                        </div>
                                        <div className="vendor-icon"><i class="fal fa-warehouse-alt"></i></div>
                                        <a href="#0"><img src="assets/img/vendors/tree-3127803_640.jpg" alt=""/></a>
                                    </div>
                                    <div className="content">
                                        <h3><a href="#0">Country / Golf Club</a></h3>
                                        <p class="location"><i class="fal fa-map-marker-alt"></i> Armidale | Ballina |
                                            Balranald | More...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- partycrack end --> */}

                {/* <!-- Services start --> */}
                <div className="services services-2 content-area mt-60"
                     style="background-image: url('assets/img/img-4.jpg');">
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor</p>
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
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="service-info-2">
                                            <div className="number">3</div>
                                            <div className="icon">
                                                <i className="flaticon-trust"></i>
                                            </div>
                                            <div class="detail">
                                                <h3>
                                                    Lorem ipsum
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="service-info-2">
                                            <div className="number">4</div>
                                            <div className="icon">
                                                <i className="flaticon-trust"></i>
                                            </div>
                                            <div class="detail">
                                                <h3>
                                                    Lorem ipsum
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Services end --> */}

                {/* <!-- Featured  start --> */}
                <div className="popular-searches section-ptb">
                    <div className="container">
                        {/* <!-- Main title --> */}
                        <div className="main-title">
                            <h1>Popular partycrack Searches</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img src="assets/img/black-logo.png" alt=""/>
                        </div>
                        <div className="popular_partycrack_slider owl-carousel owl-theme slide-v1">
                            <div className="item">
                                <div className="partycrack-box-3">
                                    <div className="partycrack-thumbnail">
                                        <a href="#0" class="partycrack-img">
                                            <img className="d-block w-100" src="assets/img/popular/popular-2.png"
                                                 alt=""/>
                                        </a>
                                    </div>
                                    <div className="details">
                                        <div className="top">
                                            <h1 className="title">
                                                <a href="#0">Bridal Wear</a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="partycrack-box-3">
                                    <div class="partycrack-thumbnail">
                                        <a href="#0" className="partycrack-img">
                                            <img class="d-block w-100" src="assets/img/popular/popular-1.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="details">
                                        <div className="top">
                                            <h1 className="title">
                                                <a href="#0">Bridal Makeup</a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="partycrack-box-3">
                                    <div className="partycrack-thumbnail">
                                        <a href="#0" class="partycrack-img">
                                            <img class="d-block w-100" src="assets/img/popular/popular-4.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="details">
                                        <div className="top">
                                            <h1 className="title">
                                                <a href="#0">Photographers</a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="partycrack-box-3">
                                    <div class="partycrack-thumbnail">
                                        <a href="#0" class="partycrack-img">
                                            <img class="d-block w-100" src="assets/img/popular/popular-3.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="details">
                                        <div className="top">
                                            <h1 className="title">
                                                <a href="#0">Catering Services</a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="partycrack-box-3">
                                    <div className="partycrack-thumbnail">
                                        <a href="#0" class="partycrack-img">
                                            <img className="d-block w-100" src="assets/img/popular/popular-5.png"
                                                 alt=""/>
                                        </a>
                                    </div>
                                    <div className="details">
                                        <div className="top">
                                            <h1 className="title">
                                                <a href="#0">Mehendi Artist</a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Featured  end --> */}

                {/* <!-- partycrack strat --> */}
                <div className="partycrack section-ptb bg-grea-3">
                    <div className="container">
                        {/* <!-- Main title --> */}
                        <div className="main-title text-center">
                            <h1>Vendor partycrack</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img src="assets/img/black-logo.png" alt=""/>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-sm-6 mb-30">
                                <div className="weddy-cont">
                                    <div className="weddy-comn weddy-img">
                                        <a href="#"><img src="assets/img/popular/popular-8.jpg"
                                                         alt="service images"/></a>
                                    </div>
                                    <div className="weddy-comn weddy-text">
                                        <a href="#0">Venues</a>
                                        <img src="assets/img/title-img2.png" alt="title two image"/>
                                        <p>Lorem ipsum dolor sit amet, conse ctetuer adip solit iscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6 mb-30">
                                <div className="weddy-cont">
                                    <div className="weddy-comn weddy-img">
                                        <img src="assets/img/popular/popular-4.png" alt="service images"/>
                                    </div>
                                    <div className="weddy-comn weddy-text">
                                        <a href="#0">Photographers</a>
                                        <img src="assets/img/title-img2.png" alt="title two image"/>
                                        <p>Lorem ipsum dolor sit amet, conse ctetuer adip solit iscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6 mb-30">
                                <div className="weddy-cont">
                                    <div className="weddy-comn weddy-img">
                                        <img src="assets/img/popular/popular-1.png" alt="service images"/>
                                    </div>
                                    <div class="weddy-comn weddy-text">
                                        <a href="#0">Makeup</a>
                                        <img src="assets/img/title-img2.png" alt="title two image"/>
                                        <p>Lorem ipsum dolor sit amet, conse ctetuer adip solit iscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6 mb-30">
                                <div className="weddy-cont">
                                    <div className="weddy-comn weddy-img">
                                        <img src="assets/img/popular/popular-2.png" alt="service images"/>
                                    </div>
                                    <div className="weddy-comn weddy-text">
                                        <a href="#0">Bridal Wear</a>
                                        <img src="assets/img/title-img2.png" alt="title two image"/>
                                        <p>Lorem ipsum dolor sit amet, conse ctetuer adip solit iscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6 mb-30">
                                <div className="weddy-cont">
                                    <div className="weddy-comn weddy-img">
                                        <img src="assets/img/popular/popular-6.png" alt="service images"/>
                                    </div>
                                    <div className="weddy-comn weddy-text">
                                        <a href="#0">Bouquets &amp; Style</a>
                                        <img src="assets/img/title-img2.png" alt="title two image"/>
                                        <p>Lorem ipsum dolor sit amet, conse ctetuer adip solit iscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-sm-6 mb-30">
                                <div className="weddy-cont">
                                    <div className="weddy-comn weddy-img">
                                        <img src="assets/img/popular/popular-7.png" alt="service images"/>
                                    </div>
                                    <div className="weddy-comn weddy-text">
                                        <a href="#0">Groom Wear</a>
                                        <img src="assets/img/title-img2.png" alt="title two image"/>
                                        <p>Lorem ipsum dolor sit amet, conse ctetuer adip solit iscing elit. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="text-center mt-2">
                                    <a href="#0" class="btn important-btn btn-theme btn-md">View all partycrack</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- partycrack end --> */}

                {/* <!-- Featured  start --> */}
                <div class="video-sec section-ptb">
                    <div className="container">
                        {/* <!-- Main title --> */}
                        <div className="main-title">
                            <h1>Our Videos</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <img src="assets/img/black-logo.png" alt=""/>
                        </div>
                        <div className="popular_video_slider owl-carousel owl-theme slide-v1">
                            <div className="item">
                                <div className="category">
                                    <div className="category_bg_box cat-4-bg"
                                         style="background-image: url('assets/img/vendors/water-165219_640.jpg');">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Video Title</a>
                                                </h3>
                                            </div>
                                            <div className="video-click">
                                                <a href="#0" class="video-btn popup-youtube">
                                                    <i className="fas fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="category">
                                    <div className="category_bg_box cat-4-bg"
                                         style="background-image: url('assets/img/vendors/walkway-347319_640.jpg');">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Video Title</a>
                                                </h3>
                                            </div>
                                            <div class="video-click">
                                                <a href="#0" class="video-btn popup-youtube">
                                                    <i class="fas fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div className="category">
                                    <div className="category_bg_box cat-4-bg"
                                         style="background-image: url('assets/img/vendors/hall-3851014_640.jpg');">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Video Title</a>
                                                </h3>
                                            </div>
                                            <div className="video-click">
                                                <a href="#0" class="video-btn popup-youtube">
                                                    <i className="fas fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div className="category">
                                    <div className="category_bg_box cat-4-bg"
                                         style="background-image: url('assets/img/vendors/tree-3127803_640.jpg');">
                                        <div className="category-overlay">
                                            <div className="category-content">
                                                <h3 className="category-title">
                                                    <a href="#">Video Title</a>
                                                </h3>
                                            </div>
                                            <div className="video-click">
                                                <a href="#0" class="video-btn popup-youtube">
                                                    <i className="fas fa-play"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Featured  end --> */}

            </div>
        </>
    )
}
export default Home;