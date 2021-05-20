import React from 'react';
import BackGroundImge from "../../assets/imgs/footer.jpg";
import {HiLocationMarker} from 'react-icons/hi'
import {AiFillInstagram} from 'react-icons/ai'
import {BsEnvelope} from 'react-icons/bs'
import {FaPhoneAlt,FaFacebook,FaGooglePlus,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {BiWorld} from 'react-icons/bi';
import {Link} from 'react-router-dom'

let footer = () => {
    return (
        <>
<footer className="footer"
      style={{ backgroundImage: `url(${BackGroundImge})` }}>
  <div className="container footer-inner">
    <div className="row">
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="footer-item clearfix">
          <p className="text-white font-24">partycrack</p> 
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div className="footer-item">
          <h4>Useful Links</h4>
          <ul className="links">
            <li>
              <Link exat to='/'>Home</Link>
            </li>
            <li>
               <Link exat to='/about_us'>About Us</Link>
            </li>
            <li>
              <a href="#0">Venues</a>
            </li>
            <li>
              <a href="#0">Vendors</a>
            </li>
            <li>
               <Link exat to='/contact_us'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
        <div className="footer-item">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li>
              <HiLocationMarker/>  Melbourne, Australia
            </li>
            <li>
              <BsEnvelope/><a href="mailto:support@partycrack.com.au">support@partycrack.com.au</a>
            </li>
            <li>
              <FaPhoneAlt/><a href="tel:+55-417-634-7071">+0477 85X6 552</a>
            </li>
            <li>
              <BiWorld/><a href="https://www.partycrack.com">partycrack.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="sub-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <p className="copy">© 2021 <a href="#">partycrack.com</a></p>
        </div>
        <div className="col-lg-4 col-md-12">
          <ul className="social-list clearfix">
            <li><a href="https://www.facebook.com/PartyCrack-101491208588361" target='_blank' className="facebook-bg"><FaFacebook/></a></li>
            <li><a href="https://www.instagram.com/partycrack2021/" className="twitter-bg" target='_blank'><AiFillInstagram/></a></li>
            <li><a href="#" className="google-bg" target='_blank'><FaGooglePlus/></a></li>
            <li><a href="https://www.linkedin.com/in/partycrack" className="linkedin-bg" target='_blank'><FaLinkedin/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>


        </>
    )
}
export default footer;