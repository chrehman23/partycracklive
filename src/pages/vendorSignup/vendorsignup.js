import React from 'react';
import './vendorsignup.css'
import Form from '../../Form';
import Footer from "../../Components/footer/footer"
import Header from "../../Components/topHeader/indexCitys"

class vendorsignup extends React.Component {


    componentDidMount() {
        let token=localStorage.getItem("token")
        if(token){
         this.props.history.push("/vendor-dashboard")
        }

    }
 render(){
    return (
      <>
        <Header />
        <div className="banner d-md-block d-none">
          <div className="container-pic h-100 d-flex justify-content-center align-items-center">
            <div className="area">
              <h1 className="sign">Sign Up</h1>
              <ul className="bread-crumb">
                <li className="signa">Home SignUp</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid container-lg">
          <div className="row">
            <div className="col-12">
              <div className="row form-row-wrapper my-5">
                <div className="col-12 col-md-6">
                  <Form />
                </div>
                <div className="col-12 col-md-6 px-0">
                  <div className="imageWrapper d-flex align-items-center justify-content-center h-100">
                    <div className="button-wrap">
                      <a className="btn btn-lg">Welcome to Partycrack</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );}
}
export default vendorsignup;
