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

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: null,
            otpErr:false,
            errors: {
                code: '',
            }
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
        event.preventDefault();
        this.setState({
            otpErr:false
        })

        let id =localStorage.getItem('vendor_id')
        let data = {
            otp: this.state.code,
            id:id
        }
        if (validateForm(this.state.errors)) {
            let _this = this
             axios.post(`${process.env.REACT_APP_API}/api/auth/otpverification`, data).then(res => {
                if (res.data.Error ==false) {
                    let checkin=[]
                    localStorage.setItem('token',res.data.token)
                    localStorage.setItem('name',res.data.data.name)
                                             let loginData=JSON.parse(localStorage.getItem("checkin"))
                        if(loginData && loginData.length){
                            let data= JSON.parse(localStorage.getItem("checkin"))
                            var index = data.findIndex(x => x.uni==res.data.data._id); 
                            index === -1 ? data.push({uni:res.data.data._id,isTime:true}) : console.log("object already exists")
                                localStorage.setItem("checkin",JSON.stringify(data)) 

                        }else{
                            checkin.push({uni:res.data.data._id,isTime:true})
                            localStorage.setItem('checkin',JSON.stringify(checkin))
                        } 
                    this.props.history.push('/vendor-dashboard')

                } else {
                    this.setState({
                        otpErr:true
                    })

                }

            }).catch(e => {
                console.log(e)
            }

            )
        }else{

        }
    }
   resend=()=>{
    let data={
        id:localStorage.getItem('vendor_id')
    }
       axios.post(`${process.env.REACT_APP_API}/api/auth/resendotp`,data).then(res=>{
           if(res.data.message=="success"){
            NotificationManager.success('OTP has sent to your Email ', '', 1000);
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
                                            <p style={{ textAlign: "center" }}>Please validate your email address to proceed. An OTP has been sent over email. Please enter the OTP</p>
                                            {this.state.otpErr? <p style={{ textAlign: "center",color:"red",marginTop:"20px" }}>OTP is Invalid</p>:""}
                                            <div className="d-flex justify-content-center py-3">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input type="text" value={this.state.code} name='code'
                                                            onChange={this.handleChange} className="form-control"
                                                            id="" 
                                                            placeholder="OTP CODE" noValidate />
                                                    {errors.code.length > 0 &&
                                                            <span className='error'>{errors.code}</span>}
                                                    </div>

                                                    <button type="submit" className="submit w-100 mt-2">Continue</button>
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

export default withRouter(Auth)
