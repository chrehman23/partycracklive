import React from 'react';
import axios from 'axios'
import { withRouter, Link } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ListEdit from "../editListing/index"
import { Modal, Button, Spinner } from "react-bootstrap";

class myListing extends React.Component {
    state = {
        listing: [],
        totalItem: "",
        token: "",
        edit: false,
        status: "",
        show: false,
        listData: null,
        loading: false

    }

    componentWillMount() {
        let token = localStorage.getItem("token")

        if (token) {
            this.getListing()
        } else {
            this.props.history.push("/")
        }
    }

    handleClose = () => { this.setState({ show: false }) };
    handleShow = (data) => { this.setState({ show: true, listData: data }) };

    getListing = () => {
        let id = localStorage.getItem('vendor_id')
        let token = localStorage.getItem("token")
        axios.get(`${process.env.REACT_APP_API}/api/auth/alllistings/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.data.Error == false) {
                this.setState({
                    listing: res.data.data,
                    token: token
                })
                this.setState({
                    loading: true
                })
            }
        })
    }

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
    changeStatus = async (data) => {
        let { _id } = data

        let body = {
            status: "pause"
        }
        await axios.post(`${process.env.REACT_APP_API}/api/auth/editlisting/${_id}`, body, {
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        }
        ).then((res) => {
            if (res.data.success) {
                NotificationManager.success('Update successfuly', '', 800);
                this.getListing(this.state.token)
            }
        })
    }


    render() {
        const { listing } = this.state
        return (
            <>
                    <div className={this.props.SideBar ? "content-body" : "content-body extended"}>
                     {this.state.loading ?
                     <>

                        <div className="container-fluid">
                            <div className="col-lg-12">
                                <div className="dashboard-page-header">
                                    <h3 className="dashboard-page-title">My Listing</h3>
                                    {/*                                     <p className="d-block mb-0">Lists present multiple line items vertically as a single
                                    continuous element.</p> */}
                                </div>
                            </div>
                            {listing.length==0 ?
                            <center>
                            <button className="payment-btn" onClick={()=>{this.props.history.push("/packages")}}>Add your first listing</button>
                            </center>
                            :
                            <>
                                    {listing.map((data, i) => {
                                        return (
                                            <div className="col-lg-12">
                                                <div className="dashboard-list-block">
                                                    <div className="row">
                                                        <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 col-12">
                                                            <div className="dashboard-list-img"><a href="#">
                                                                <img src={`${process.env.REACT_APP_API}/${data.Profile_Pic}`} alt="" className="img-fluid" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-5 col-md-6 col-sm-12 col-12 ">
                                                            <div className="dashboard-list-content">
                                                                <h3 className="mb0"><a href="#"
                                                                    className="title">{data.Name}</a>
                                                                </h3>
                                                                <p>{data.Address.Address}</p>
                                                                <p style={{lineHeight:"0",margin: "0px",fontSize: "12px",fontWeight: "500"}}>{data.updatedAt.slice(0,10)}</p>
                                                                <p style={{lineHeight:"0px",marginTop: "20px",marginBottom: "-13px"}}>{data.updatedAt.slice(11,19)}</p>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                                            <div className="dashboard-list-btn">
                                                                <label className="mr10" style={{fontWeight:"600",fontSize:"14px"}}>{data.Status}</label>
                                                                <Link to={`/editlisting/${data._id}`} className="btn btn-outline-violate btn-xs mr10">Edit</Link>
                                                                <a href="#" onClick={() => {
                                                                    this.handleShow(data)
                                                                }} className="btn btn-outline-pink btn-xs ">Delete</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    </>
                                     }
                                 </div>
                                 </>                              
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

export default withRouter(myListing);