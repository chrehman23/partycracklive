import React from 'react';
import {ImCross} from 'react-icons/im'

import { SiFacebook } from 'react-icons/si';
import { AiFillInstagram,AiOutlineMenu } from 'react-icons/ai';

 import { FaLinkedin,FaUserPlus,FaGooglePlus,FaRegUser } from 'react-icons/fa';
import {withRouter, Link} from 'react-router-dom';

class Header extends React.Component {
    state = {
        mySidebar: this.props.sideBarStatus,
    }

    openNav = () => {
        this.setState({
            mySidebar: !this.state.mySidebar,
        })

        this.props.ChangeSidebar(this.state.mySidebar)
        console.log("Open");
    }

    switchSideBar = () => {
         var x = window.innerWidth;
        if (x < 767) {
               this.setState({
            mySidebar: !this.state.mySidebar,
        })

        this.props.ChangeSidebar(this.state.mySidebar)
        console.log("Open");
        }
    
    }

    Logout = () =>{
        localStorage.removeItem('vendor_id')
        localStorage.removeItem('token')
        localStorage.removeItem("selectedPlan")
        localStorage.removeItem("name")
        this.props.history.push("/vendor-signin")
    }

    render() {
        return (
            <>
              <div className="top-header dashboard">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 pl-4">
              <ul className="social-list clearfix text-left py-2" style={{float:'none'}}>
                <li><a target="_blank" href="https://www.facebook.com/PartyCrack-101491208588361" className="facebook-bg"><SiFacebook/></a></li>
                <li><a target="_blank" href="https://www.instagram.com/partycrack2021/" className="twitter-bg"><AiFillInstagram/></a></li>
                <li><a href="#0" className="google-bg"><FaGooglePlus/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/partycrack" className="linkedin-bg"><FaLinkedin/></a></li>
              </ul>
            </div>
           
          </div>
        </div>
      </div>
      
                <div className={this.state.mySidebar ? "header extended" : "header"}>
                    <div className="nav-header header-logoContainer">
                        <Link to='/' className={this.state.mySidebar?"brand-logo":"brand-logo "}> Partycrack</Link>
                    </div>
                    <div className="header-content">
                        <nav className="navbars navbar-expand">
                            <div className="collapse navbar-collapse justify-content-between align-items-center">
                                <div className="nav-control">
                                    <div className="hamburger" onClick={this.openNav}>
                                        <span >
                                            <span className="line"/>
                                            <span className="line"/>
                                            <span className="line"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="header-left">
                                    <div className="dashboard_bar">Dashboard</div>
                                </div>
                                <ul className="navbar-nav header-right ml-auto">
                                    <li className="nav-item dropdown header-profile d-none">
                                        <a className="nav-link" role="button"
                                           data-toggle="dropdown">
                                            <div className="header-info">
                                               {/* <span>James Sullivan</span>*/}    
                                         </div>
                                            <img src="images/profile/12.png" width={20} alt=""/>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="profile.php" className="dropdown-item ai-icon">
                                                <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className
                                                     width={18} height={18} viewBox="0 0 24 24" fill="none"
                                                     stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                                     strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                    <circle cx={12} cy={7} r={4}/>
                                                </svg>
                                                <span className="ml-2">Profile </span>
                                            </a> <a href="settings.php" className="dropdown-item ai-icon"> <i
                                            className="la la-sliders mr-2 "/>Settings
                                        </a> <a href="" className="dropdown-item ai-icon">
                                            <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg"
                                                 className="text-danger" width={18} height={18} viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" strokeWidth={2}
                                                 strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                                <polyline points="16 17 21 12 16 7"/>
                                                <line x1={21} y1={12} x2={9} y2={12}/>
                                            </svg>
                                            <span style={{cursor:"pointer"}} onClick={this.Logout} className="ml-2">Logout </span>
                                        </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className={this.state.mySidebar ? "deznav sidebar extended" : "sidebar deznav"} style={{zIndex:"99999"}}>
                    <div className='CloseDashNav' onClick={this.openNav}>
                        <div><ImCross/></div>
                    </div>
                    <div className="deznav-scroll">
                        <ul className="metismenu" id="menu">
                            <li>
                                <Link to="/vendor-dashboard" aria-expanded="false">
                                    <i className="fa fa-server mr-2"/>
                                    <span
                                        className={this.state.mySidebar ? "nav-text" : "nav-text d-none"}>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/mylisting"  aria-expanded="false">
                                    <i className="fa fa-list mr-2"/>
                                    <span className={this.state.mySidebar ? "nav-text" : "nav-text d-none"}>My Listings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/packages" aria-expanded="false">
                                    <i className="fa fa-list  mr-2"/>
                                    <span className={this.state.mySidebar ? "nav-text" : "nav-text d-none"}>Add new Listing</span>
                                </Link>
                            </li>
{/*                             <li>
                                <a onClick={() => this.switchSideBar("review")} aria-expanded="false">
                                    <i className="fa fa-star mr-2"/>
                                    <span
                                        className={this.state.mySidebar ? "nav-text" : "nav-text d-none"}>Reviews</span>
                                </a>
                            </li> */}
                            <li>
                                <Link to="/myprofile" aria-expanded="false">
                                    <i className="fa fa-user mr-2"/>
                                    <span
                                        className={this.state.mySidebar ? "nav-text" : "nav-text d-none"}>My Profile</span>
                                </Link>
                            </li>
                            <li>
                                <a onClick={this.Logout} on aria-expanded="false">
                                    <i className="fa fa-sign-out mr-2"/>
                                    <span style={{cursor:"pointer"}} className={this.state.mySidebar ? "nav-text" : "nav-text d-none"}>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(Header);