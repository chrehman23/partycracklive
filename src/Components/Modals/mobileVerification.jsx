import React from 'react';
import Footer from "../../Components/footer/footer"
import Header from "../../Components/topHeader/index"
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AddListing from "../../Components/venderDashboard/addNewListing/index"
import {Button,Modal} from "react-bootstrap"



;
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class MobileVeriication extends React.Component {
    state = {
        code: null,
        otpErr:false,
        errors: {
            code: '',
        },
        termsErr:false,
        terms:false,
        listingId:"",
        addList:false,
        payment:false
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'code':
                errors.code =
                    value.length <6
                        ? 'Code must be 6 Characters long'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

varifyCode=async()=>{
    let data={
        Mobile_Number: this.props.mobileNumber,
        OTP: this.state.code
    }
   await axios.post(`${process.env.REACT_APP_API}/api/auth/mobileotpverification`, data).then(res => {
        if (res.data.Error==false) {
        this.addListing()
        }
        else {
         this.setState({
             otpErr:true
         })
        }
      })
}
addListing=async()=>{
    let token = localStorage.getItem("token")
    let that = this;
    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // that.setState({ filesProgress: percentCompleted });
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
   await axios.post(`${process.env.REACT_APP_API}/api/auth/addlisting`, this.props.formData, Config).then(res => {
        if (res.data.success) {      
            this.props.paymentModalShow(res.data.listing._id)                      
         // this.paymentMethod(res.data.listing._id)
        }
        else {
          console.log("error")
        }
      }) 
}

    handleSubmit =  (event) => {
        event.preventDefault();
        this.setState({
            otpErr:false,
            termsErr:false
        })

        let id =localStorage.getItem('vendor_id')
        if(this.state.terms==false){
           this.setState({
               termsErr:true
           })
        }
        else if (validateForm(this.state.errors)){
             this.varifyCode();
        }else{

        } 
    }
    paymentMethod=(Listid)=>{
        let id = localStorage.getItem("vendor_id")
        let Name = localStorage.getItem('packagename')
        let Price = localStorage.getItem('packageprice')
        let data = {
            vendor_id: id,
            listing_id: Listid,
            payment_type: "Paypal",
            package: {
              name: Name,
              price: Price
            },
            paypal: {
              token: "864as6d846",
              payId: "asdasdsadsad"
            }
      
          }
         axios.put(`${process.env.REACT_APP_API}/api/auth/getPaypal`, data).then(res => {
            if (res.data.url) {
              window.location.href = res.data.url
            }
            else {
              console.log("error")
            }
          })
    }
   resend=()=>{
    let data={
        Mobile_Number:this.props.mobileNumber
    }
       axios.post(`${process.env.REACT_APP_API}/api/auth/resendotpmobile`,data).then(res=>{
           if(res.data.Error==false){
            NotificationManager.success('OTP has sent to your mobile number ', '', 800);
           }
       })
   }


    render() {
        let { errors } = this.state
        return (
            <>
                <Modal style={{ marginTop: "100px" }} show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>            
                                            <p style={{ textAlign: "center" }}>Your mobile number needs to be validated to proceed. An OTP has been sent on your mobile.</p>
                                            <p style={{ textAlign: "center" }}>Enter OTP To Verify Mobile Number</p>
                                            {this.state.otpErr? <p style={{ textAlign: "center",color:"red",marginTop:"20px" }}>OTP is Invalid</p>:""}
                                            {this.state.termsErr ? <p style={{ textAlign: "center", color: "red" }}>Please accept privacy policy and terms and conditions</p> : ""}
                                                      <form>
                                                    <div className="form-group">
                                                        <input type="text" value={this.state.code} name='code'
                                                            onChange={this.handleChange} className="form-control"
                                                            id="" 
                                                            placeholder="OTP CODE" noValidate />
                                                    {errors.code.length > 0 &&
                                                            <span className='error'>{errors.code}</span>}
                                                    </div>
                                                    <div style={{margin:"20px 0px"}} className="custom-control custom-checkbox">
                                    <input type="checkbox" value={this.state.terms}
                                        onChange={(e) => {
                                            this.setState({ terms: !this.state.terms })
                                        }} className="custom-control-input" id="pc1" />
                                    <label className="custom-control-label" htmlFor="pc1">
                                        I agree to <Link target="_blank" to="/privacyandpolicy">privacy policy </Link>and <Link target="_blank" to="/termsandconditions">terms & conditions</Link>.
                                    </label>
                                </div>

                                                    <button type="button" onClick={this.handleSubmit} className="submit w-100 mt-2">Continue</button>
                                                     <button type="button" onClick={this.resend} className="submit w-100 mt-2">Resend</button>
 
                                                </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                       </Button>
                    </Modal.Footer>
                </Modal>


            </>
        )
    }
}

export default withRouter(MobileVeriication)
