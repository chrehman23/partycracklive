import React from 'react';
import '../vendorSignup/vendorsignup.css'
import Footer from "../../Components/footer/footer"
import Header from "../../Components/topHeader/index"
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class MobileOtp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: null,
            otpErr:false,
            errors: {
                code: '',
            },
            termsErr:false,
            terms:false
        };

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

    handleSubmit =  (event) => {
        console.log(this.state)
        event.preventDefault();
/*         this.setState({
            otpErr:false,
            termsErr:false
        })

        let id =localStorage.getItem('vendor_id')
        let data = {
            otp: this.state.code,
            id:id
        }
        if(this.state.terms==false){
           this.setState({
               termsErr:true
           })
        }
        else if (validateForm(this.state.errors)) {
            let _this = this
            let id = localStorage.getItem("vendor_id")
            let Listid= localStorage.getItem('listId')
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
                console.log(res.data)
                if (res.data.url) {
                  window.location.href = res.data.url
                }
                else {
                  console.log("error")
                }
              })
        }else{

        } */
    }
   resend=()=>{
    let data={
        id:localStorage.getItem('vendor_id')
    }
       axios.post(`${process.env.REACT_APP_API}/api/auth/resendotp`,data).then(res=>{
           if(res.data.message=="success"){
            NotificationManager.success('OTP has sent to your Email ', '', 800);
           }
       })
   }

    render() {
     
        let { errors } = this.state
        return (
            <>
                <Header />
                <div className="banner">

                    <div className="container-pic">
                        <div className="area">
                            <h1 className="sign">OTP</h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-lg">
                    <div className="row">
                        <div className="col-12">
                            <div className="row form-row-wrapper my-5">
                                <div className="col-12 col-md-6">
                                    <div className='wrapper '>
                                        <div className='form-wrapper py-5'>
                                            <h3 style={{ textAlign: "center" }} className="fo">Grow Up Your Business With
                                                Partycrack</h3>
                                            <p style={{ textAlign: "center" }}>Your mobile number needs to be validated to proceed. An OTP has been sent on your mobile.</p>
                                            <p style={{ textAlign: "center" }}>Enter OTP To Verify Mobile Number</p>
                                            {this.state.otpErr? <p style={{ textAlign: "center",color:"red",marginTop:"20px" }}>OTP is Invalid</p>:""}
                                            {this.state.termsErr ? <p style={{ textAlign: "center", color: "red" }}>Please check Terms and Conditions and Privacy Policy</p> : ""}
                                            <div className="d-flex justify-content-center py-3">
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
                                        }} className="custom-control-input" id="facility5" />
                                    <label className="custom-control-label" htmlFor="facility5">
                                        I agree to <Link target="_blank" to="/privacyandpolicy">privacy policy </Link>and <Link target="_blank" to="/termsandconditions">terms & conditions</Link>.
                                    </label>
                                </div>

                                                    <button type="button" onClick={this.handleSubmit} className="submit w-100 mt-2">Continue</button>
                                                     <button type="button" onClick={this.resend} className="submit w-100 mt-2">Resend</button>
 
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 px-0">
                                    <div
                                        className="imageWrapper d-flex align-items-center justify-content-center h-100">
                                        <div className="button-wrap">
                                            <a className="btn btn-lg">Welcome to Partycrack</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NotificationContainer />

                </div>
                <Footer />
            </>
        )
    }
}

export default withRouter(MobileOtp)