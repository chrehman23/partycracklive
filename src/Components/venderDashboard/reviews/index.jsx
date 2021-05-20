import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';



 class Reviews extends React.Component {
   state={
     review:true,
     listing:[],
     totalItem:""
    }
    componentWillMount() {
      let token = localStorage.getItem("token")
      if (token) {
          axios.get(`${process.env.REACT_APP_API}/api/auth/showlisting`, {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }).then(res => {
              if (res.data.success) {
                  this.setState({
                      listing: res.data.listing,
                      totalItem:res.data.count
                  })
              }
          })
      }
      else {
          this.props.history.push("/")
      }

  }


  render() {
    return (
       <>
    <div className={this.props.SideBar ? "content-body" : "content-body extended"}>
        <div className="container-fluid">
          <div className="col-lg-12">
            <div className="dashboard-page-header">
              <h3 className="dashboard-page-title">My Listing</h3>
              <p className="d-block mb-0">Lists present multiple line items vertically as a single continuous element.</p>
            </div>
          </div>
          <div id="rating">
            {this.state.listing.map((data,i)=>{
              return(
            <div className="col-lg-12">
              <div className="accordion-wrap mb-20">
              <div className="dashboard-list-block mb-0">
                <div className="row">
                  <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="dashboard-list-img"><a href="#"><img src="images/water-165219_640.jpg" alt="" className="img-fluid" /></a></div>
                  </div>
                  <div className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12 ">
                    <div className="dashboard-list-content">
              <h3 className="mb0"><a href="#" className="title">{data.Name}</a></h3>
                      <p>{data.Address}</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="dashboard-list-btn" id="headingOne">
                      <button className="btn btn-outline-violate btn-xs mr10" key={i} onClick={()=>{this.setState({review:!this.state.review})}}  data-toggle="collapse" data-target="#collapseOne" aria-expanded={this.state.review?"true":"false"} aria-controls="collapseOne">
                        View Rating
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="collapseOne" className={this.state.review?"collapse":"collapse show"} aria-labelledby="headingOne" data-parent="#rating">
                <div className="accordion-body">
                  <div className="row rating-area mb-20">
                    <div className="col-lg-4 col-md-4">
                      <div className="average-rating mb-3 mb-lg-0">
                        <h1>4.8</h1>
                        <div className="ratings mb-0">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <h4>452 Review</h4>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                      <div className="rating-details mb-0">
                        <div className="rating-item">
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="rating-bar">
                            <div className="rating-width" data-width="75%" style={{width: '80%'}} />
                          </div>
                          <div className="rating-count">
                            <span>(80)</span>
                          </div>
                        </div>
                        <div className="rating-item">
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="rating-bar">
                            <div className="rating-width" data-width="25%" style={{width: '60%'}} />
                          </div>
                          <div className="rating-count">
                            <span>(60)</span>
                          </div>
                        </div>
                        <div className="rating-item">
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="rating-bar">
                            <div className="rating-width" data-width="8%" style={{width: '40%'}} />
                          </div>
                          <div className="rating-count">
                            <span>(40)</span>
                          </div>
                        </div>
                        <div className="rating-item">
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <div className="rating-bar">
                            <div className="rating-width" data-width={0} style={{width: '20%'}} />
                          </div>
                          <div className="rating-count">
                            <span>(20)</span>
                          </div>
                        </div>
                        <div className="rating-item mb-0">
                          <div className="ratings">
                            <i className="fa fa-star" />
                          </div>
                          <div className="rating-bar">
                            <div className="rating-width" data-width={0} style={{width: '0px'}} />
                          </div>
                          <div className="rating-count">
                            <span>(0)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row reviewssec">
                    <div className="col-xl-12">
                      <div className="table-responsive">
                        <table className="table table-striped table-responsive-sm">
                          <thead>
                            <tr>
                              <th style={{width: '160px'}}>Customer image</th>
                              <th className=" ">Customer name</th>
                              <th>Email</th>
                              <th>Stars Review</th>
                              <th>Date &amp; Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="media align-items-center">
                                  <img className="img-fluid rounded mr-3  " width={70} src="./images/profile/avatar-1.jpg" alt="DexignZone" />
                                </div>
                              </td>
                              <td>
                                <div className="media-body">
                                  <h4 className="text-black font-w600 mb-1 wspace-no">Glee Smiley
                                  </h4>
                                </div>
                              </td>
                              <td className=" ">info@abc.ocm</td>
                              <td>
                                <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-gray" />
                                </span>
                                <p className="mb-0  ">Karciz is one of the best vendors we've ever
                                  worked
                                  with.
                                  Thanks
                                  for your wonderful</p>
                              </td>
                              <td>
                                <span>Sunday, 24 July 2020 04:55 PM</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media align-items-center">
                                  <img className="img-fluid rounded mr-3  " width={70} src="./images/profile/avatar-2.jpg" alt="DexignZone" />
                                </div>
                              </td>
                              <td>
                                <div className="media-body">
                                  <h4 className="text-black font-w600 mb-1 wspace-no">Glee Smiley
                                  </h4>
                                </div>
                              </td>
                              <td className=" ">info@abc.ocm</td>
                              <td>
                                <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-gray" />
                                </span>
                                <p className="mb-0  ">Karciz is one of the best vendors we've ever
                                  worked
                                  with.
                                  Thanks
                                  for your wonderful</p>
                              </td>
                              <td>
                                <span>Sunday, 24 July 2020 04:55 PM</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media align-items-center">
                                  <img className="img-fluid rounded mr-3  " width={70} src="./images/profile/avatar-3.jpg" alt="DexignZone" />
                                </div>
                              </td>
                              <td>
                                <div className="media-body">
                                  <h4 className="text-black font-w600 mb-1 wspace-no">Glee Smiley
                                  </h4>
                                </div>
                              </td>
                              <td className=" ">info@abc.ocm</td>
                              <td>
                                <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-gray" />
                                </span>
                                <p className="mb-0  ">Karciz is one of the best vendors we've ever
                                  worked
                                  with.
                                  Thanks
                                  for your wonderful</p>
                              </td>
                              <td>
                                <span>Sunday, 24 July 2020 04:55 PM</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media align-items-center">
                                  <img className="img-fluid rounded mr-3  " width={70} src="./images/profile/avatar-4.jpg" alt="DexignZone" />
                                </div>
                              </td>
                              <td>
                                <div className="media-body">
                                  <h4 className="text-black font-w600 mb-1 wspace-no">Glee Smiley
                                  </h4>
                                </div>
                              </td>
                              <td className=" ">info@abc.ocm</td>
                              <td>
                                <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-gray" />
                                </span>
                                <p className="mb-0  ">Karciz is one of the best vendors we've ever
                                  worked
                                  with.
                                  Thanks
                                  for your wonderful</p>
                              </td>
                              <td>
                                <span>Sunday, 24 July 2020 04:55 PM</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="media align-items-center">
                                  <img className="img-fluid rounded mr-3  " width={70} src="./images/profile/avatar-5.jpg" alt="DexignZone" />
                                </div>
                              </td>
                              <td>
                                <div className="media-body">
                                  <h4 className="text-black font-w600 mb-1 wspace-no">Glee Smiley
                                  </h4>
                                </div>
                              </td>
                              <td className=" ">info@abc.ocm</td>
                              <td>
                                <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-orange" />
                                  <i className="fa fa-star fs-16 text-gray" />
                                </span>
                                <p className="mb-0  ">Karciz is one of the best vendors we've ever
                                  worked
                                  with.
                                  Thanks
                                  for your wonderful</p>
                              </td>
                              <td>
                                <span>Sunday, 24 July 2020 04:55 PM</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            )})}

          </div>
        </div>
      </div>
          </>
    );
  }
}
export default withRouter(Reviews);