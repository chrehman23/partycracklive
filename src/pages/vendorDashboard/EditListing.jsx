import React from 'react';
import "../../App.css"
import {withRouter} from 'react-router-dom';
import Header from "../../Components/venderDashboard/vendorHeader/header"
import Footer from "../../Components/venderDashboard/vendorFooter/footer"
import EditListing from '../../Components/venderDashboard/editListing';


class Editlisting extends React.Component {

    state = {
        comp: "dashboard",
        sideBar: false
    }

    sideDashboard = (name) => {
        if (name === 'logout') {
            localStorage.removeItem('token')
            localStorage.removeItem('vendor_id')
            this.props.history.push('/vendor-signin');
        } else {
            this.setState({
                comp: name
            })
        }

    }

    
    ChangeSidebar = (data) => {
        this.setState({
            sideBar: data

        })

    }

      componentDidMount() {
        let token=localStorage.getItem("token")
        if(!token){
         this.props.history.push("/vendor-signin")
        }
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

        resize() {
        var x = window.innerWidth;
        if (x < 767) {
             this.setState({
            sideBar: false
        })
        } else {
             this.setState({
            sideBar: true

        })
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize.bind(this));
    }

    render() {
        let {comp} = this.state
        return (
            <>
                <div id="main-wrapper" className="vendor-dashboard">
                  
                    <Header ChangeSidebar={(data) => this.ChangeSidebar(data)}
                       sideBarStatus={this.state.sideBar}
                        sideDashboard="editlistings"/>
                     <EditListing SideBar={this.state.sideBar} sideDashboard={(name) => this.sideDashboard(name)}  /> 

                    {/* <Footer/> */}

                </div>


            </>
        );
    }
}

export default withRouter(Editlisting);