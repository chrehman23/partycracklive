import React from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Spinner } from "react-bootstrap"

import Slider from "react-slick";

import { AiOutlineHome, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// card imges`
import cardImge1 from "../../../assets/imgs/img4.jpg";
import cardImge2 from "../../../assets/imgs/img3.jpg";
import cardImge3 from "../../../assets/imgs/img5.jpg";
import cardImge4 from "../../../assets/imgs/img7.jpg";

 var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <AiOutlineLeft />,
    nextArrow: <AiOutlineRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

class VendorSubscription extends React.Component {
    state = {
        plans: [],
        selectedPlan: null,
        addListing: false,
        loading: false
    }


    componentDidMount() {
        let token = localStorage.getItem("token")
        let id = localStorage.getItem("vendor_id")
        axios.get(`${process.env.REACT_APP_API}/api/auth/subscriptions`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data.data)
            if (res.data.Error === false) {
                this.setState({
                    plans: res.data.data
                })
            }
            this.setState({
                loading: true
            })
        })

    }
    getStarted = (data) => {
        localStorage.setItem("selectedPlan",JSON.stringify(data))
        this.props.history.push("/addlisting")
    }

    render() { 
        console.log(this.state.plans)
        return (
            <>
    <div className={this.props.SideBar ? "content-body" : "content-body extended"}>
        {this.state.loading ? 
            <div className="section-body mb-5">
            <div className="container-fluid">
                <div className="row hide-plans mt-5 mb-5">
                    {this.state.plans.map((data, i) => {
                        return (
                            <div className="col-md-4 col-12">
                                <div className="payment shadow h-100">
                                    <h5>{data.Name}</h5>
                                    <h6 >{data.Currency} {data.Price}</h6>
                                    {data.Options.map((option)=>{
                                        return(
                                            <p className='text-center'>{option}
                                                </p> 
                                        )
                                    })}
                                    <div className='planbtns'>
                                    <button className="payment-btn " onClick={() => this.getStarted(data)}>Get Started</button>
                                    </div>  
                                </div>
                            </div>
                        )
                    })}
                    <NotificationContainer />
                        </div>
            <div className="row d-none plansCarasole">
        <div className="col-12">
          <Slider className='slick-sliderContainer' {...settings}>
               {this.state.plans.map((data, i) => {
                        return (
                            <div className="">
                                <div className="payment shadow">
                                    <h5>{data.Name}</h5>
                                    <h6 >{data.Currency} {data.Price}</h6>
                                    {data.Options.map((option)=>{
                                        return(
                                            <p className='text-center'>{option}
                                                </p> 
                                        )
                                    })}    
                                    <div className='planbtns'>
                                    <button className="payment-btn" onClick={() => this.getStarted(data)}>Get Started</button>
                                    </div>                 
                                </div>
                            </div>
                        )
                    })}
          </Slider>
        </div>
      </div>
                                            </div>
                                        </div>
                                        // *******************
                                        
                                        // *******************
                                        : 
                                        <div className="spinner">
                                        <Spinner animation="border" variant="danger" />
                                            </div>
                              
                            }
    
                            </div>

                
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    

            </>
        )
    }
}

export default withRouter(VendorSubscription)
