import React from 'react';
import {Link} from 'react-router-dom'
import { RiUser3Line, } from 'react-icons/ri';
import { SiFacebook } from 'react-icons/si';
import { AiOutlineTwitter,AiOutlineMenu,AiFillInstagram } from 'react-icons/ai';
 import { FaLinkedin,FaUserPlus,FaGooglePlus,FaRegUser } from 'react-icons/fa';
 import { FiChevronDown,FiPlus } from 'react-icons/fi';
 import { ImCross } from 'react-icons/im';
import { Nav,Navbar,NavDropdown,Modal } from 'react-bootstrap';

// manue imges
import manuImge1 from '../../assets/img/icons/town-hall.svg'
import manuImge2 from '../../assets/img/icons/photographer.svg'
import manuImge3 from '../../assets/img/icons/cosmetics.svg'
import manuImge4 from '../../assets/img/icons/dress.svg'
import manuImge5 from '../../assets/img/icons/groom.svg'
import manuImge6 from '../../assets/img/icons/henna-painted-hand.svg'
import manuImge7 from '../../assets/img/icons/stars.svg'
import manuImge8 from '../../assets/img/icons/dish.svg'
import manuImge9 from '../../assets/img/icons/wedding-invitation.svg'


  class TopHeader extends React.Component {
      constructor(props) {
    super(props);
    this.state = { cityShow:false,show: false, scrolled: false,sideNav: false, activeManue :null };
  }

  handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  toggalNav=()=>{
    this.setState({sideNav:!this.state.sideNav})
  }
  toggalManues=(e)=>{
    if(e==this.state.activeManue){
       this.setState({activeManue: null})
    }else{
      this.setState({activeManue:e})
    }
    
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }


    render() {
    return (
        <>
 <header className="main-header">
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <ul className="social-list clearfix text-left py-2" style={{float:'none'}}>
                <li><a href="https://www.facebook.com/PartyCrack-101491208588361" target='_blank' className="facebook-bg"><SiFacebook/></a></li>
                <li><a href="https://www.instagram.com/partycrack2021/" target='_blank' className="twitter-bg"><AiFillInstagram/></a></li>
                <li><a href="#" className="google-bg"><FaGooglePlus/></a></li>
                <li><a href="https://www.linkedin.com/in/partycrack" target='_blank' className="linkedin-bg"><FaLinkedin/></a></li>
              </ul>
            </div>
            <div className="col-8 text-right">
              <Link className="bescom_vendor d-inlineBlock" to="/vendor-signup">Register as vendor</Link>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`sticky-header-fluid ${this.state.scrolled?"header-shrink":""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light px-0" >
            <button className="navbar-toggler mr-2 p-0 border-0 pink-color" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            onClick={this.toggalNav}
            aria-expanded="false" aria-label="Toggle navigation">
            <AiOutlineMenu/>
          </button>
            <Link exat to="/" className="navbar-brand logo">  <p className="font-24 mb-0 pink-color font-weight-bold">Partycrack</p></Link>
        
          <div className={`navbar-collapse collapse ${this.state.sideNav ? "menu-show  show" :""}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto d-none d-lg-flex">
              <li className="nav-item">
                 <Link exat to="/" className='nav-link'>Home</Link>
               </li>
              <li className="nav-item">
                  <Link exat to="/about_us" className='nav-link'>About</Link>
              </li>
              <li className="nav-item dropdown megamenu-li">
                <NavDropdown className='HeaderDropDownContainer vaderlistContaienr' title="Venues" id="basic-nav-dropdown">
    <div>
    <div className='dropDownSections'>
        <p className='dropDownHeading'>By Type</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Restaurant</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Banquet hall</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Pub/Bar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Play center</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Rooftop bar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Boat/Cruise</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Farmhouse</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Wineries</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Nightclubs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Ballrooms</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Wedding venues</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"> Motel/Hotel</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Conference/Meeting rooms</NavDropdown.Item>
          
        </div>

    </div>
   
      </NavDropdown>
</li>
             <li className="nav-item dropdown megamenu-li"> 
    <NavDropdown className='HeaderDropDownContainer vaderlistContaienr' title="Vendors" id="basic-nav-dropdown">
    <div>
    <div className='dropDownSections'>
        <p className='dropDownHeading'>Music and Dance</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">DJs</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Choreographer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Wedding Entertainers/Music Bands</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Orchestra</NavDropdown.Item>
        </div>
        <div className='dropDownSections'>
        <p className='dropDownHeading'>Food</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">Catering Services</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Cake/CupCakes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Bartenders</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Barista</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Deserts</NavDropdown.Item>
        </div>
        <div className='dropDownSections'>
        <p className='dropDownHeading'>Invites & Gifts</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1"> Bomboniere/Favors</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Gifts</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Invitation Cards</NavDropdown.Item>
     
</div>
        <div className='dropDownSections'>
        <p className='dropDownHeading'>Ceremony</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">Celebrants</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Priests</NavDropdown.Item>
       
</div>
        <div className='dropDownSections'>
        <p className='dropDownHeading'>Services</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">Security</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Transport & Cars</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Party Furniture</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Party Supplies</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Cleaners</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">BabySitter</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Party helper</NavDropdown.Item>
</div>
    </div>
    <div>
    <div className='dropDownSections'>
        <p className='dropDownHeading'>Photographers</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">Photographers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Cinema/Video</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Pre Wedding Shoot</NavDropdown.Item>
        </div>
        <div className='dropDownSections'>
        
         <p className='dropDownHeading'>Planning and Décor</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1"> Wedding Planners</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Event Planners</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Decorators</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Small Function Decors</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Florist</NavDropdown.Item>
        </div>
        <div className='dropDownSections'>
        
         <p className='dropDownHeading'>Fashion</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">Bridesmaid Dresses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Dress Designers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Beauty Services</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Hair & Makeup</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Jewellery</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Wedding Dresses</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1"> Character Wear</NavDropdown.Item>
       
</div>
        <div className='dropDownSections'>
        
         <p className='dropDownHeading'>Entertainers</p>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1">Face Painters</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Swing/Games Provider</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Magicians</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Special Characters</NavDropdown.Item>
</div>
    </div>
      </NavDropdown>
</li>
             <li className="nav-item">
                 <Link exat to="/contact_us" className='nav-link'>Contact Us</Link>
            
              </li>
            </ul>
            <ul className="navbar-nav ml-auto d-none d-lg-flex">
              <li className="nav-item login-nav">
                  <Link exat to="/login" className='nav-link'>Login / Register</Link>  
              </li>
            
            </ul>
            <ul className="navbar-nav ml-auto d-lg-none mobile_menu">
              <li className="nav-item login-nav position-relative">
                <Link  exat to="/login"  className="nav-link" href="#0"><FaRegUser/> Login / Register</Link>
                  <div className='closeNavContainer'  onClick={this.toggalNav}> <ImCross/></div>
              </li>
               
              <li>
                <hr/>
              </li>
              <li className="nav-item">
                <h6 className="megamenu-title border-0 px-3 pb-0">All Partycrack</h6>
              </li>
              <li className="nav-item dropdown megamenu-li"
               onClick={()=>this.toggalManues(22)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge2}alt=""/> Music and Dance</a>
                <div className={`dropdown-menu ${this.state.activeManue==22 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">DJs</a>
                  <a className="dropdown-item" href="#0">Choreographer</a>
                  <a className="dropdown-item" href="#0">Wedding Entertainers/Music Bands</a>
                  <a className="dropdown-item" href="#0">Orchestra</a>
                </div>
              </li>
               <li className="nav-item dropdown megamenu-li"  onClick={()=>this.toggalManues(8)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge8} alt=""/> Food</a>
                <div className={`dropdown-menu ${this.state.activeManue==8 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Catering Services</a>
                  <a className="dropdown-item" href="#0">Cake/CupCakes</a>
                  <a className="dropdown-item" href="#0">Bartenders</a>
                  <a className="dropdown-item" href="#0">Barista</a>
                  <a className="dropdown-item" href="#0">Deserts</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li"
               onClick={()=>this.toggalManues(2)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge2}alt=""/> Photographers</a>
                <div className={`dropdown-menu ${this.state.activeManue==2 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Photographers</a>
                  <a className="dropdown-item" href="#0">Cinema/Video</a>
                  <a className="dropdown-item" href="#0">Pre Wedding Shoot</a>
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li"
               onClick={()=>this.toggalManues(211)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge2}alt=""/> Planning and Décor</a>
                <div className={`dropdown-menu ${this.state.activeManue==211 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Wedding Planners</a>
                  <a className="dropdown-item" href="#0">Event Planners</a>
                  <a className="dropdown-item" href="#0">Decorators</a>
                  <a className="dropdown-item" href="#0">Small Function Decors</a>
                  <a className="dropdown-item" href="#0">Florist</a>
                  
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li"
               onClick={()=>this.toggalManues(2110)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge2}alt=""/> Fashion</a>
                <div className={`dropdown-menu ${this.state.activeManue==2110 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Bridesmaid Dresses</a>
                  <a className="dropdown-item" href="#0">Dress Designers</a>
                  <a className="dropdown-item" href="#0">Beauty Services</a>
                  <a className="dropdown-item" href="#0">Hair & Makeup</a>
                  <a className="dropdown-item" href="#0">Jewellery</a>
                  <a className="dropdown-item" href="#0">Wedding Dresses</a>
                  <a className="dropdown-item" href="#0">Character Wear</a>
                </div>
              </li>
               <li className="nav-item dropdown megamenu-li"  onClick={()=>this.toggalManues(9)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge9} alt=""/> Invites & Gifts</a>
                <div className={`dropdown-menu ${this.state.activeManue==9 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0"> Bomboniere/Favors</a>
                  <a className="dropdown-item" href="#0">Gifts</a>
                  <a className="dropdown-item" href="#0">Invitation Cards</a>            
                </div>
              </li>
               <li className="nav-item dropdown megamenu-li"  onClick={()=>this.toggalManues(90)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge9} alt=""/> Ceremony</a>
                <div className={`dropdown-menu ${this.state.activeManue==90 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Celebrants</a>           
                  <a className="dropdown-item" href="#0">Priests</a>           
                </div>
              </li>
               <li className="nav-item dropdown megamenu-li"  onClick={()=>this.toggalManues(900)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge9} alt=""/> Services</a>
                <div className={`dropdown-menu ${this.state.activeManue==900 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Security</a>          
                  <a className="dropdown-item" href="#0">Transport & Cars</a>          
                  <a className="dropdown-item" href="#0">Party Furniture</a>          
                  <a className="dropdown-item" href="#0">Party Supplies</a> 
                  <a className="dropdown-item" href="#0">Cleaners</a> 
                  <a className="dropdown-item" href="#0">BabySitter</a> 
                  <a className="dropdown-item" href="#0">Party helper</a> 
                  
                </div>
              </li>
              <li className="nav-item dropdown megamenu-li"  onClick={()=>this.toggalManues(3)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge3} alt=""/>Entertainers</a>
                <div className={`dropdown-menu ${this.state.activeManue==3 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0"> Face Painters</a>
                  <a className="dropdown-item" href="#0">Swing/Games Provider</a>
                  <a className="dropdown-item" href="#0">Magicians</a>
                  <a className="dropdown-item" href="#0">Special Characters</a>
                </div>
              </li>
              <li className="nav-item d-none dropdown megamenu-li" 
               onClick={()=>this.toggalManues(4)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge4} alt=""/> Bridal Wear</a>
                <div className={`dropdown-menu ${this.state.activeManue==4 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><FiPlus/> View all Menu</a>
                </div>
              </li>
              <li className="nav-item d-none dropdown megamenu-li"  onClick={()=>this.toggalManues(5)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge5} alt=""/> Groom Wear</a>
                <div className={`dropdown-menu ${this.state.activeManue==5 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><FiPlus/> View all Menu</a>
                </div>
              </li>
              <li className="nav-item d-none dropdown megamenu-li"  onClick={()=>this.toggalManues(6)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge6} alt=""/>Mehndi</a>
                <div className={`dropdown-menu ${this.state.activeManue==6 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0">Menu item</a>
                  <a className="dropdown-item" href="#0"><FiPlus/> View all Menu</a>
                </div>
              </li>
              <li className="nav-item d-none dropdown megamenu-li"  onClick={()=>this.toggalManues(7)}>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false"><img src={manuImge7} alt=""/> Planning & Decor</a>
                <div className={`dropdown-menu ${this.state.activeManue==7 ? "show" : ""}`} aria-labelledby="dropdown01">
                  <a className="dropdown-item" href="#0">Wedding Planners</a>
                  <a className="dropdown-item" href="#0">Event Planners</a>
                  <a className="dropdown-item" href="#0">Decorators</a>
                  <a className="dropdown-item" href="#0">Small Function Decors</a>
                  <a className="dropdown-item" href="#0">Florist</a>
                </div>
              </li>
             
             
            </ul>

          </div>
          <ul className="rightnavContainer d-flex ml-auto d-lg-none">
            {/* <li className="select_cities mr-3">
              <a onClick={() => this.setState({ cityShow: true })} className="text-theme" href="#" data-toggle="modal" data-target="#citymodal">All Cities 
             <FiChevronDown/></a>
              </li> */}
              {/* <li className="login-mobile">
                <a className="text-theme" href="user_signin"><FaUserPlus/></a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
     <Modal
          show={this.state.cityShow}
          onHide={() => this.setState({ cityShow: false })}
          size="xl"
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header
            closeButton
            style={{ background: "#ff4068", color: "white" }}
          >
            <Modal.Title id="example-custom-modal-styling-title">
              Select city
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
            <div
              className="HeaderDropDownContainer"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Top Cities</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">Sydney</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Melbourne
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Brisbane
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Perth</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Adelaide
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Canberra
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Hobart</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Darwin</NavDropdown.Item>
                 
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Popular Cities</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Albany</NavDropdown.Item>
                  
                  <NavDropdown.Item href="#action/3.3">Albury</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Ballarat
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Bathurst
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Bendigo
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Blue Mountains
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Bunbury
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Bundaberg
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sunshine Coast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Tamworth
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Toowoomba
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Townsville
                  </NavDropdown.Item>
                 
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Other Cities</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Cairns</NavDropdown.Item>
                  
                  <NavDropdown.Item href="#action/3.3">
                    Central Coast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Coffs Harbour
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Dubbo</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Gawler</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Geelong
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Geraldton
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Gladstone
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Gold Coast
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Hervey Bay
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Kalgoorlie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Wagga Wagga
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Warrnambool
                  </NavDropdown.Item>
                 
                </div>
              </div>
              <div>
                <div className="dropDownSections">
                  <p className="dropDownHeading">Other Cities</p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">
                    Launceston
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Lismore
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Wollongong
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mackay</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Maitland
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Melton</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Mildura
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Newcastle
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Nowra</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Orange</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Port Macquarie
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Rockhampton
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Shepparton
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Sunbury
                  </NavDropdown.Item>
                
                </div>
              </div>
            </div>
          </Modal.Body>
       </Modal>
     
        </>
  )
} 
} 
export default TopHeader ;
