import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import { Spinner } from "react-bootstrap"





class VendorProfile extends React.Component {
    state = {
        tabShow: "profile",
        userName: "",
        email: "",
        mobileNumber: "",
        address: "",
        let: "",
        lng: "",
        loading: false,
        mobileErr:false
    }


    componentDidMount() {
        let token = localStorage.getItem("token")
        let id = localStorage.getItem("vendor_id")
        axios.get(`${process.env.REACT_APP_API}/api/auth/vendorprofile/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data.data)
            if (res.data.Error === false) {
                this.setState({
                    userName: res.data.data.name,
                    email: res.data.data.email,
                    mobileNumber: res.data.data.mobile_number,
                })
            }
            this.setState({
                loading: true
            })
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let vendor_id = localStorage.getItem("vendor_id")
        //    const {email,userName,mobileNumber,address}=this.state
        this.setState({
            mobileErr:false
        })
        let address = {
            Address: this.state.address,
            Lat: this.state.lat,
            Lng: this.state.lng
        }
        const newdata = {
            id: vendor_id,
            email: this.state.email,
            name: this.state.userName,
            mobile_number: this.state.mobileNumber,
        }
        if((this.state.mobileNumber.length<10) ||(!this.state.mobileNumber)){
            this.setState({
                mobileErr:true
            })
        }
else{
        let token = localStorage.getItem("token")
        let id = localStorage.getItem("vendor_id")

        axios.post(`${process.env.REACT_APP_API}/api/auth/edit-vendorprofile`, newdata, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {


            if (res.data.Error == false) {
                this.setState({ tabShow: "profile" })
            }
        })
    }

    }
    phoneInput = (e) => {
        const ch = String.fromCharCode(e.which)
        if (!(/[0-9]/.test(ch))) {
            e.preventDefault();
        }
        else if (this.state.mobileNumber.length >= 11) {
            e.preventDefault()
        }
    }

    render() {
        let { vendor } = this.state
        console.log(this.state)
        return (
            <>
                <div className={this.props.SideBar ? "content-body" : "content-body extended"}>
                    <div className="section-body">
                        <div className="container-fluid">
                            <ul className="nav nav-tabs mb-3" id="pills-tab" role="tablist">
                                <li className={this.state.tabShow === "profile" ? "nav-item active" : "nav-item "}><a onClick={() => { this.setState({ tabShow: "profile" }) }} className={this.state.tabShow === "profile" ? "nav-link active" : "nav-link"} id="" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a></li>
                                <li className={this.state.tabShow === "editProfile" ? "nav-item active" : "nav-item "}><a onClick={() => { this.setState({ tabShow: "editProfile" }) }} className={this.state.tabShow === "editProfile" ? "nav-link active" : "nav-link"} data-toggle="tab" href="#addnew"><i className="fa fa-edit" /> Edit Profile</a></li>
                            </ul>
                            <div className="tab-content">
                                {
                                    this.state.tabShow === "profile" ?
                                        <>
                                            {this.state.loading ?
                                                <div className="tab-pane fade active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                    <div className="row clearfix">
                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="card">

                                                                <div className="card-body">
                                                                    <div className="prplist">
                                                                    <div className="prplistitem">
                                                                            <div>Name</div>
                                                                            <div>{this.state.userName}</div>
                                                                        </div>
                                                                        <div className="prplistitem">
                                                                            <div>Email address</div>
                                                                            <div>{this.state.email}</div>
                                                                        </div>
                                                                        <div className="prplistitem">
                                                                            <div>Mobile Number</div>
                                                                            <div>{this.state.mobileNumber}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                                              
                                        :
                                        <div className="spinner">
                                        <Spinner animation="border" variant="danger" />
                                         </div>
                                }
                                </>
                                        :
                                        <div className="tab-pane fade active show" id="addnew" role="tabpanel" aria-labelledby="pills-profile-tab">
                                    <div className="card">
                                        {/* <div class="card-header">
            <h3 class="card-title">Edit Personal Details</h3>
          </div> */}
                                        <form onSubmit={this.onSubmit}>
                                            <div className="card-body">

                                                <div className="row clearfix">
                                                <div className="col-lg-6 col-md-12">
                                                            <div className="form-group">
                                                                <label className="form-label">Name</label> 
                                                                <input type="text" value={this.state.userName} name="userName" onChange={(e)=>{this.setState({userName:e.target.value})}} className="form-control" placeholder="Enter User Name" />
                                                            </div>
                                                        </div> 
                                                    {/*<div className="col-lg-6 col-md-12">
                                                            <div className="form-group">
                                                                <label className="form-label">Last Name</label> <input type="text" className="form-control" placeholder="Enter First Name" />
                                                            </div>
                                                        </div> */}
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-label">Email</label>
                                                            <input disabled={true} type="email" value={this.state.email} name="email" onChange={(e) => { this.setState({ email: e.target.value }) }} className="form-control" placeholder="Enter Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12">
                                                        <div className="form-group">
                                                            <label className="form-label">Mobile Number</label>
                                                            <input type="text" value={this.state.mobileNumber} onFocus={() => this.setState({ mobileNumber: `04` })} onKeyDown={(e) => { if (this.state.mobileNumber.length == 2) if (e.which == 8) { e.preventDefault() } }}
                                                                onKeyPress={this.phoneInput} onChange={(e) => { this.setState({ mobileNumber: e.target.value }) }} name="mobileNumber"
                                                                maxLength="10" className="form-control" id="exampleInputEmail1"
                                                                autocomplete="off" placeholder="Mobile Number" noValidate />
                                                                
                                                                    {this.state.mobileErr ?
                                                                    <span style={{ color: "red" }}>Mobile Number must be 10 digits long</span>
                                                                         :
                                                                         ""
                                                                   }
                                                        </div>
                                                    </div>
                                                    {/*                                                         <div className="col-lg-6 col-md-12">
                                                            <div className="form-group">
                                                                <label className="form-label">Image</label>
                                                                <div className="input-group">
                                                                    <div className="custom-file">
                                                                        <input type="file" className="custom-file-input form-control" />
                                                                        <label className="custom-file-label">Choose file</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                </div>
                                            </div>
                                            <div className="card-footer text-right">
                                                <button type="submit" className="btn btn-primary btn-default">Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default withRouter(VendorProfile);