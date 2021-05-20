import React from 'react';
import '../vendorSignup/vendorsignup.css'
import Footer from "../../Components/footer/footer"
import Header from "../../Components/topHeader/indexCitys"
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';



const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class vendorsignin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            errMsg:"",
            errors: {
                email: '',
                password: ''
            },
            specField: false,
            loginbtn:false
        };

    }
    isEmail=(val)=> {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEmail.test(val)){
          return true
        }else{
            return false
        }
    }
    componentDidMount() {
        let token=localStorage.getItem("token")
        if(token){
         this.props.history.push("/vendor-dashboard")
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
        console.log(this.state)
        let {email,password}=this.state
        event.preventDefault();
        this.setState({
            specField: false,
            userExistErr:false,
            errMsg:""
           })

        let data = {
            email: this.state.email,
            password: this.state.password
        }

      if(!email || !password){
       this.setState({
        specField: true,
       })
      }
      
      
      else{
        if (validateForm(this.state.errors)) {
            let _this = this
            this.setState({
                loginbtn:true
            })
            await axios.post(`${process.env.REACT_APP_API}/api/auth/login`, data).then(res => {
                if (res.data.status ==true) {
                    if (res.data.token) {
                        let checkin=[]
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('vendor_id', res.data.vendor.id)
                        localStorage.setItem('name', res.data.vendor.name)

                         let loginData=JSON.parse(localStorage.getItem("checkin"))
                        if(loginData && loginData.length){
                            let data= JSON.parse(localStorage.getItem("checkin"))
                            var index = data.findIndex(x => x.uni==res.data.vendor.id); 
                            index === -1 ? data.push({uni:res.data.vendor.id,isTime:true}) : console.log("object already exists")
                                localStorage.setItem("checkin",JSON.stringify(data)) 

                        }else{
                            checkin.push({uni:res.data.vendor.id,isTime:true})
                            localStorage.setItem('checkin',JSON.stringify(checkin))
                        }                        
                    }
                    NotificationManager.success('Login Successfully', '', 800);
                    setTimeout(function () { _this.props.history.push('/vendor-dashboard') }, 1000);

                } else if(res.data.status ==false){
                    localStorage.setItem('vendor_id', res.data.vendor.id)
                    NotificationManager.success('OTP has Sent to your Email', '', 1000);
                    setTimeout(function () { _this.props.history.push('/auth') }, 1100);
 
                }
                else if(res.data.Error==true){
                    this.setState({
                        userExistErr:true,
                        errMsg:res.data.msg
                    })
                }
                this.setState({
                    loginbtn:false
                })

            }).catch(e => {
                console.log(e)
            }

            )
        }

          
      }
    }

    render() {
        let { errors,specField,userExistErr } = this.state
        return (
            <>
                <Header />
                <div className="banner d-md-block d-none">

                    <div className="container-pic h-100 d-flex justify-content-center align-items-center">
                        <div className="area">
                             <h1 className="sign">Sign in</h1>
                            <ul className="bread-crumb">
                                <li className="signa">Home Signin</li>

                            </ul>
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
                                            <p style={{ textAlign: "center" }}>Sign in to acess Your Dashboard</p>
                                            {specField ? <p style={{ textAlign: "center", color: "red" }}>Please enter email and password</p> : ""}
                                            {userExistErr ? <p style={{ textAlign: "center", color: "red" }}>Invalid Email or Password</p> : ""}
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
                                                    <div className="form-group" style={{marginBottom:"10px"}}>
                                                        <input type="password" value={this.state.password}
                                                            name='password' onChange={this.handleChange}
                                                            className="form-control" id="exampleInputPassword1"
                                                            placeholder="Password" noValidate />
                                                        {errors.password.length > 0 &&
                                                            <span className='error'>{errors.password}</span>}
                                                    </div>
                                                    <Link to="/forgot-password" style={{color:"#ff4068",fontWeight:"500",fontSize:"13px",textDecoration:"none",marginLeft:"11px"}}>Forgot your password?</Link>
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
                                                    }} className='d-block d-md-inline'>Sign Up</Link></p>
                                                    <button disabled={this.state.loginbtn} type="submit" className="submit py-2 w-100">Sign in</button>
                                                    <div className="mt-4">
                                                        <p style={{
                                                            fontSize: "17px",
                                                            fontWeight: "500",
                                                            textAlign: "center",
                                                            color: "#535353"
                                                        }}>Are you a customer? <a className="customer-signin d-inline-block">Customer
                                                            Signin</a></p>
                                                    </div>
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

export default withRouter(vendorsignin)
