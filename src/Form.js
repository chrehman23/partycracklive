import React from 'react';
import './Form.css'
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
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

class Form extends React.Component {
    state = {
        UserName: "",
        PhoneNumber: '',
        email: "",
        password: "",
        confirm_password: "",
        errors: {
            PhoneNumber: '',
            email: '',
            password: ''
        },
        PhoneNumberErr:"",
        fieldsErr: false,
        specField: false,
        termsErr:false,
        pasErr: false,
        terms:false,
        PhoneErr:false
    };


    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
               
        switch (name) {
            case 'email':
                errors.email =
                this.isEmail(value)
                        ? ""
                        : 'Email must be valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
                case 'PhoneNumber':
                    this.state.PhoneNumberErr =
                        value.length < 10
                            ? 'Phone Number must be at least 10 digits long!'
                            : '';
                    break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
        this.setState({ [name]: value })
    }

   isEmail=(val)=> {
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regEmail.test(val)){
          return true
        }else{
            return false
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        let { password, email, PhoneNumber, confirm_password,terms,UserName } = this.state
        this.setState({
            fieldsErr: false,
            specField: false,
            pasErr: false,
            userErr:false,
            termsErr:false
        })
        let mobile_number=""
        if(this.state.PhoneNumber.length==10){
            mobile_number=PhoneNumber
        }
        let data = {
            name:UserName,
            mobile_number: mobile_number,
            email: email,
            password: password
        }

        if (!email && !password && !confirm_password && !UserName ) {
            this.setState({
                fieldsErr: true
            })
        }
        else if((this.state.PhoneNumber.length>2) && (this.state.PhoneNumber.length<10)){
            this.setState({
                PhoneErr: true
            })
        }
        else if (!email || !password || !confirm_password || !UserName) {
            this.setState({
                specField: true
            })
        }
        else if (password !== confirm_password) {
                this.setState({
                    pasErr: true
                })
        }
        else if(terms==false){
            this.setState({
                termsErr:true
            })
        }
        else {
            if (validateForm(this.state.errors)) {
                let _this = this
                    await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, data).then(res => {
                        if (res.data.message === 'success') {
                            if (res.data.token) {
                                localStorage.setItem('vendor_id', res.data.vendor.id)
                            }
                           this.props.history.push('/auth') 
                        } else {
                          /*   NotificationManager.info('User Alraedy exist', '', 2000); */
                          this.setState({
                              userErr:true
                          })  

                        }

                    })
            }
            else {
                NotificationManager.warning('Please Enter Valid Information', '', 2000);
            }

        }
    }
    phoneInput=(e)=>{
        const ch =String.fromCharCode(e.which)
      if(!(/[0-9]/.test(ch))){
        e.preventDefault();
      }
      else if(this.state.PhoneNumber.length>=11){
      e.preventDefault()
      }
      }

    render() {
        const { errors, fieldsErr, specField, pasErr,userErr,termsErr,PhoneErr } = this.state;
        return (
            <>
                <div className='wrapper '>
                    <div className='form-wrapper py-5'>
                        <h3 style={{ textAlign: "center" }} className="fo">Grow Up Your Business With Partycrack</h3>
                        <p style={{ textAlign: "center" }}>Sign up to acess Your Dashboard</p>
                        {fieldsErr ? <p style={{ textAlign: "center", color: "red" }}>Please Enter All Required* Fields</p> : ""}
                        {specField ? <p style={{ textAlign: "center", color: "red" }}>Please Fill Empty Field</p> : ""}
                        {pasErr ? <p style={{ textAlign: "center", color: "red" }}>Password does not match</p> : ""}
                        {userErr ? <p style={{ textAlign: "center", color: "red" }}>User Already Exist</p> : ""}
                        {termsErr ? <p style={{ textAlign: "center", color: "red" }}>Please accept privacy policy and terms and conditions</p> : ""}
                        {PhoneErr ? <p style={{ textAlign: "center", color: "red" }}>Phone Number must be at least 10 digits long!</p> : ""}




                        <div className="d-flex justify-content-center py-3">
                            <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                    <input type="text" value={this.state.UserName} name='UserName'
                                        onChange={this.handleChange} className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Name*" noValidate />
                                </div>
                                <div className="form-group">
                                    <input type="email" value={this.state.email} name='email'
                                        onChange={this.handleChange} className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" placeholder="Email*" noValidate />
                                    {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}
                                </div>
{/*                                 <div className="form-group">
                                    <PhoneInput
                                        country={'au'}
                                        value={this.state.PhoneNumber}
                                        onChange={phone => this.setState({ PhoneNumber:phone })}
                                        inputStyle={{ width: "100%" }}
                                    />
                                </div> */}

                               <div className="form-group">
                               <input type="text"  value={this.state.PhoneNumber} onFocus={()=>this.setState({PhoneNumber:`04`})} onKeyDown={(e)=>{if(this.state.PhoneNumber.length==2)if(e.which==8){e.preventDefault()}}}
                          placeholder="Mobile Number" onKeyPress={this.phoneInput} onChange={this.handleChange}  name='PhoneNumber'
                                 maxLength="10" className="form-control" id="exampleInputEmail1"
                                 aria-describedby="emailHelp" autocomplete="off" placeholder="Mobile Number" noValidate />
                                    {this.state.PhoneNumber.length > 0 &&
                                       <span className='error'>{this.state.PhoneNumberErr}</span>} 
                                </div> 
                                <div className="form-group">
                                    <input type="password" value={this.state.password} name='password'
                                        onChange={this.handleChange} className="form-control"
                                        id="exampleInputPassword1" placeholder="Password*" noValidate />
                                    {errors.password.length > 0 &&
                                        <span className='error'>{errors.password}</span>}
                                </div>
                                <div className="form-group">
                                    <input type="password" value={this.state.confirm_password} name='confirm_password'
                                        onChange={this.handleChange} className="form-control"
                                        id="exampleInputPassword1" placeholder="Confirm Password*" noValidate />
                                </div>

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" value={this.state.terms}
                                        onChange={(e) => {
                                            this.setState({ terms: !this.state.terms })
                                        }} className="custom-control-input" id="facility5" />
                                    <label className="custom-control-label" htmlFor="facility5">
                                        I agree to <Link target="_blank" to="/privacyandpolicy">privacy policy </Link>and <Link target="_blank" to="/termsandconditions">terms & conditions</Link>.
                                    </label>
                                </div>

                                <p style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    textAlign: "center",
                                    color: "#535353"
                                }}>Already have an business account? <Link to="/vendor-signin" style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "#ff4068"
                                }} className='d-block d-md-inline'>Sign in</Link></p>
                                <button type="submit" className="submit py-2 w-100">Continue</button>
                            </form>
                        </div>
                    </div>
                    <NotificationContainer />
                </div>

            </>
        );
    }
}

export default withRouter(Form);