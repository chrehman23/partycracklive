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

class ResetPassword extends React.Component {

       state = {
          password:"",
          confirmPassword:"",
          passwordMatch:false,
          errors: {
            password: ''
        },
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        let {password,confirmPassword}=this.state
            let {id} =this.props.match.params

        this.setState({
            specField: false,
            errMsg:""
           })

        let data = {
            id:id,
            password: this.state.password,
        }

      if(!password || !confirmPassword){
       this.setState({
        specField: true,
       })
    }
      else if(password !== confirmPassword){
           this.setState({
               passwordMatch:true
           })
       }

      
      
      
      else{
        if (validateForm(this.state.errors)) {
            let _this = this
            await axios.post(`${process.env.REACT_APP_API}/api/auth/resetpassword`, data).then(res => {
                if (res.data.Error ==false) {      
                     _this.props.history.push('/vendor-signin')            
                }else{

                }

            }).catch(e => {
                console.log(e)
            } 

            )
        }

          
      }
    }

    render() {
        let { errors,specField,passwordMatch } = this.state
        return (
            <>
                <Header />
                <div className="banner">

                    <div className="container-pic">
                        <div className="area">
                            <h1 className="sign">Reset Password</h1>
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
                                            <p style={{ textAlign: "center" }}>Enter password to reset your password</p>
                                            {specField ? <p style={{ textAlign: "center", color: "red" }}>Please Enter  Requuired* Field</p> : ""}
                                            {passwordMatch ? <p style={{ textAlign: "center", color: "red" }}>Password does not match</p> : ""}
                                            <div className="d-flex justify-content-center py-3">
                                                <form onSubmit={this.handleSubmit}>
                                                <div className="form-group" style={{marginBottom:"10px"}}>
                                                        <input type="password" value={this.state.password}
                                                            name='password' onChange={this.handleChange}
                                                            className="form-control" id="exampleInputPassword1"
                                                            placeholder="Password" noValidate />
                                                        {errors.password.length > 0 &&
                                                            <span className='error'>{errors.password}</span>}
                                                    </div>
                                                    <div className="form-group" style={{marginBottom:"10px"}}>
                                                        <input type="password" value={this.state.confirmPassword}
                                                            name='confirmPassword' onChange={this.handleChange}
                                                            className="form-control" id="exampleInputPassword2"
                                                            placeholder="Confirm Password" noValidate />
                                                    </div>
                                                    <p style={{
                                                        marginTop:"15px",
                                                        fontSize: "17px",
                                                        fontWeight: "500",
                                                        textAlign: "center",
                                                        color: "#535353"
                                                    }}>Register as a Service Provider? <Link to="/" style={{
                                                        fontSize: "17px",
                                                        fontWeight: "500",
                                                        color: "#ff4068"
                                                    }}>Sign Up</Link></p>
                                                    <button type="submit" className="submit w-100">Submit</button>
{/*                                                     <div className="mt-4">
                                                        <p style={{
                                                            fontSize: "17px",
                                                            fontWeight: "500",
                                                            textAlign: "center",
                                                            color: "#535353"
                                                        }}>Are you a customer? <a className="customer-signin">Customer
                                                            Signin</a></p>
                                                    </div> */}
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
                        <NotificationContainer />

                    </div>

                </div>
                <Footer />
            </>
        )
    }
}

export default withRouter(ResetPassword)
