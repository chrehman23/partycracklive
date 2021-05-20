import React from 'react';




const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class ContactFrom extends React.Component{
 state={
   name:"",
   email:"",
   subject:"",
   phone:"",
   message:"",
   errors: {
    email: '',
    phone:"",
},
PhoneNumberErr:"",
fieldsErr:false,
specField: false,
PhoneErr:false

 }

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
phoneInput=(e)=>{
  const ch =String.fromCharCode(e.which)
if(!(/[0-9]/.test(ch))){
  e.preventDefault();
}
else if(this.state.phone.length>=11){
e.preventDefault()
}
}
  submitHandle=(e)=>{
    e.preventDefault();
    let { name, email,phone,subject,message} = this.state
    this.setState({
        fieldsErr: false,
        specField: false,
        PhoneErr:false
    })

    let data = {
        name:name,
        phone: phone,
        email: email,
        subject: subject,
        message:message
    }

    if (!email && !name && !phone && !subject && !message ) {
        this.setState({
            fieldsErr: true
        })
    }
    else if((this.state.phone.length>2) && (this.state.phone.length<10)){
        this.setState({
            PhoneErr: true
        })
    }
    else if (!email || !name || !phone || !subject || !message) {
        this.setState({
            specField: true
        })
    }

    else {
        if (validateForm(this.state.errors)) {
            let _this = this
        console.log("yes")
        }
        else {
        }

    }
  }
    
  render(){
    let {errors,fieldsErr,specField,PhoneErr}=this.state
      return(
        <form onSubmit={this.submitHandle}>
                                  {fieldsErr ? <p style={{ textAlign: "center", color: "red" }}>Please Enter All Required* Fields</p> : ""}
                        {specField ? <p style={{ textAlign: "center", color: "red" }}>Please Fill Empty Field</p> : ""}
                        {PhoneErr ? <p style={{ textAlign: "center", color: "red" }}>Phone Number must be at least 10 digits long!</p> : ""}
           <div class="row">
              <div class="col-md-6">
                <div class="form-group name">
                  <input value={this.state.name} onChange={this.handleChange} type="text" name="name" class="form-control" placeholder="Name*"/>
                  {this.state.name.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.name}</span>}
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group email">
                  <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" placeholder="Email*"/>
                  {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group subject">
                  <input value={this.state.subject} onChange={this.handleChange}  type="text" name="subject" class="form-control" placeholder="Subject*"/>
                  {this.state.subject.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.subject}</span>}
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group number">
                  <input value={this.state.phone} onKeyPress={this.phoneInput} onChange={this.handleChange}  type="text" name="phone" class="form-control" placeholder="Number*"/>
                  {this.state.phone.length > 0 &&
                                       <span className='error'>{this.state.PhoneNumberErr}</span>} 
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group message">
                  <textarea value={this.state.message} onChange={this.handleChange}  class="form-control" name="message" placeholder="Write message*" style={{marginTop:"0px",marginBottom:"0px",height: "200px"}}></textarea>
                  {this.state.message.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.message}</span>}
                </div>
              </div>
              <div class="col-md-12">
                <div class="send-btn text-center">
                  <button type="submit" class="whybtn">Send Message</button>
                </div>
              </div>
            </div>
            </form>
      )
}
}

export default ContactFrom 