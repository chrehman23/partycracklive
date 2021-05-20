import React from 'react';
import axios from 'axios'
import { withRouter,Link } from 'react-router-dom';
import listedimg from "../../../assets/imgs/coffee-table.png"
import favouriteimg from "../../../assets/imgs/favourite.png"
import ListEdit from "../editListing/index"
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Modal, Button,Spinner } from "react-bootstrap";


class vendorDashboard extends React.Component {
    state = {
        listing: [],
        totalItem: "",
        edit: false,
        listId: "",
        status: "",
        show: false,
        listData: null,
        loading:false,
        welcome:false,
        vendorName:""
    }


    handleClose = () => { this.setState({ show: false }) };
    handleShow = (data) => { this.setState({ show: true, listData: data }) };

    deleteItem = async () => {
        let { _id } = this.state.listData
        await axios.post(`${process.env.REACT_APP_API}/api/auth/deletelisting`,
            { id: _id },
            {
                headers: {
                    Authorization: `Bearer ${this.state.token}`
                }
            }).then((res) => {
                if (res.data.success) {
                    NotificationManager.success('Delete successfuly', '', 800);
                    this.getListing()
                    this.handleClose()
                }
            })
    }

    componentDidMount() {
        let token = localStorage.getItem("token")
        if (token) {
            this.getListing()
        } else {
            this.props.history.push("/")
        }

        let loginData=JSON.parse(localStorage.getItem("checkin"))
      if(loginData && loginData.length){
        let data=loginData.filter((data)=>{
            if(data.isTime==true){
                return data
            }
        })
        console.log(data)
        if(data.length>0){
            this.setState({
                welcome:true
            })
        }
        var newData = loginData.map(el => {
            if((el.uni==localStorage.getItem("vendor_id") && el.isTime == true))
               return Object.assign({}, el, {isTime:false})
            return el
        });
        localStorage.setItem("checkin",JSON.stringify(newData))
      }

    }

    getListing = () => {
        let token = localStorage.getItem("token");
        let name=localStorage.getItem("name");

        axios.get(`${process.env.REACT_APP_API}/api/auth/showlisting`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.data.success) {
                this.setState({
                    listing: res.data.listing,
                    totalItem: res.data.count,
                    vendorName:name
                })
            }
            this.setState({
                loading:true
            })
        })
    }

    render() {
        let { listing } = this.state

        return (
            <>
                    <div className={this.props.SideBar ? "content-body" : "content-body extended"}>
                       {this.state.loading ?
                        <div className="container-fluid">
                            <div className="dashboard-page-header">
                       {this.state.welcome?<h3 style={{color:"#dd3b45"}} >Welcome</h3> : ""}

                                <h3 className="dashboard-page-title">Hi, {this.state.vendorName.toUpperCase()}.</h3>
                            </div>
                            <div className="row dasboardlist">
                                <div className="col-12 col-xl-4 col-md-6">
                                    <div className="widget-stat card bg-danger">
                                        <a href="#0">
                                            <div className="card-body p-4">
                                                <div className="media">
                                                    <span className="mr-3">
                                                        <img src={listedimg} alt="image" />
                                                    </span>
                                                    <div className="media-body text-white">
                                                        <p className="mb-1">Total Listed Item</p>
                                                        <h3 className="text-white">{this.state.totalItem}</h3>
{/*                                                         <div className="progress mb-2 bg-primary">
                                                            <div className="progress-bar progress-animated bg-light"
                                                                style={{ width: '50%' }} />
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/*                  <div className="col-12 col-xl-4 col-md-6">
                     <div className="widget-stat card bg-primary">
                         <a href="#">
                             <div className="card-body  p-4">
                                 <div className="media">
                                     <span className="mr-3">
                                         <img src={favouriteimg} alt="image"/>
                                     </span>
                                     <div className="media-body text-white">
                                         <p className="mb-1">Your Reviews</p>
                                         <h3 className="text-white">200</h3>
                                         <div className="progress mb-2 bg-secondary">
                                             <div className="progress-bar progress-animated bg-light"
                                                  style={{width: '80%'}}/>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </a>
                     </div>
                 </div> */}
                                <div className="col-12 col-lg-12 mt-3 mt-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title mb-2">Your Listings</h4>
                                        </div>
                                        {
                                            this.state.totalItem==0 ?
                                            <button className="payment-btn" onClick={()=>{this.props.history.push("/packages")}}>Add your first listing</button>
                                            :
                                            <>
                                        <div className="card-body">
                                                {listing.map((data, i) => {
                                                    return (
                                                        <div className="col-lg-12">
                                                            <div className="dashboard-list-block">
                                                                <div className="row">
                                                                    <div
                                                                        className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                                                                        <div className="dashboard-list-img">
                                                                            <a href="#">
                                                                                <img
                                                                                    src={`${process.env.REACT_APP_API}/${data.Profile_Pic}`} alt=""
                                                                                    className="img-fluid" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xl-7 col-lg-5 col-md-6 col-sm-12 col-12 ">
                                                                        <div className="dashboard-list-content">
                                                                            <h3 className="">
                                                                                <a href="#"
                                                                                    className="title">{data.Name}</a>
                                                                            </h3>
                                                                            <p>{data.Address.Address}</p>
                                                                            <p style={{lineHeight:"0",margin: "0px",fontSize: "12px",fontWeight: "500"}}>{data.updatedAt.slice(0,10)}</p>
                                                                            <p style={{lineHeight:"0px",marginTop: "20px",marginBottom: "-13px"}}>{data.updatedAt.slice(11,19)}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                                                                        <div className="dashboard-list-btn">
                                                                            <Link to={`/editlisting/${data._id}`} className="btn btn-outline-violate btn-xs">Edit</Link>
                                                                            <a href="#" onClick={() => {
                                                                                this.handleShow(data)
                                                                            }}
                                                                                className="btn btn-outline-pink btn-xs">Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>

    
                        </div>
                        :
                        <div className="spinner">
                        <Spinner animation="border" variant="danger" />
                        </div>
                                            }

                                            
                        <Modal style={{ marginTop: "100px" }} show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete Confirmation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Are You Sure Want To Delete?</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancel
                                  </Button>
                                <Button variant="primary" onClick={this.deleteItem}>
                                    Delete
                                        </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                
                <NotificationContainer />

            </>
        );
    }
}

export default withRouter(vendorDashboard);