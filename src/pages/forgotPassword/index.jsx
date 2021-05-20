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

class ForgotPassword extends React.Component {

       state = {
            email: null,
            specField:"",
            resErr:true,
            ApiRes:"",
            errors: {
                email: '',
            },
            submitbtn:false

    }
    isEmail=(val)=> {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEmail.test(val)){
          return true
        }else{
            return false
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        

        switch (name) {
            case 'email':
                errors.email =
                      this.isEmail(value)
                        ? ''
                        : 'Email must be valid!';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value,ApiRes:"" });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let {email}=this.state

        this.setState({
            specField: false,
            userExistErr:false,
            errMsg:""
           })

        let data = {
            email: this.state.email,
        }

      if(!email){
       this.setState({
        specField: true,
       })
      }          
      else{
        if (validateForm(this.state.errors)) {
            let _this = this
             await axios.post(`${process.env.REACT_APP_API}/api/auth/forgotpassword`, data).then(res => {
                if (res.data.Error ==false) {
                    this.setState({
                        resErr:true,
                        ApiRes:res.data.msg
                    })
                }
            }).catch(e => {
                console.log(e)
            } 

            )
            this.setState({
                submitbtn:true
            })
        }          
      }
    }

    render() {
        let { errors,specField,resErr,ApiRes } = this.state
        return (
            <>
                <Header />
                <div className="banner">

                    <div className="container-pic">
                        <div className="area">
                            <h1 className="sign">Forgot Password</h1>
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
                                            <p style={{ textAlign: "center" }}>Enter Email to reset your password</p>
                                            {specField ? <p style={{ textAlign: "center", color: "red" }}>Please Enter  Requuired* Field</p> : ""}
                                             {resErr ? <p style={{ textAlign: "center", color: "red" }}>{ApiRes}</p> : ""}
                                            <div className="d-flex justify-content-center py-3">
                                                <form onSubmit={this.handleSubmit}>
                                                    <div className="form-group">
                                                        <input type="email" value={this.state.email} name='email'
                                                            onChange={this.handleChange} className="form-control"
                                                            id="exampleInputEmail1" aria-describedby="emailHelp"
                                                            placeholder="Email" noValidate />
                                                             {errors.email.length > 0 && 
                                                                        <span className='error'>{errors.email}</span>} 
                                                    </div>
                                                    <p style={{
                                                        marginTop:"15px",
                                                        fontSize: "17px",
                                                        fontWeight: "500",
                                                        textAlign: "center",
                                                        color: "#535353"
                                                    }}>Register as a Service Provider? <Link to="/vendor-signup" style={{
                                                        fontSize: "17px",
                                                        fontWeight: "500",
                                                        color: "#ff4068"
                                                    }}>Sign Up</Link></p>
                                                    <button disabled={this.state.submitbtn} type="submit" className="submit w-100">Submit</button>
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

export default withRouter(ForgotPassword)
