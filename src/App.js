import 'font-awesome/css/font-awesome.min.css';
import React from "react";
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Vendorsignup from "./pages/vendorSignup/vendorsignup";
import Vendorsignin from "./pages/vendonSignin/index";
import VendorDashboard from "./pages/vendorDashboard/Dashboard";
import Auth from "./pages/auth/index";
import MobileOtp from "./pages/MobileOtp/index";
import ForgotPassword from "./pages/forgotPassword/index"
import ResetPassword from "./pages/resetPassword/index"
import Terms from "./pages/Terms/index"
import Privacy from "./pages/privacy/index"
import Venues_details from "./pages/venues_details/";
import MyListing from "./pages/vendorDashboard/MyListings"
import EditListing from "./pages/vendorDashboard/EditListing"
import Packages from "./pages/vendorDashboard/VendorSubscription"
import AddListing from "./pages/vendorDashboard/AddListing"
import Profile from "./pages/vendorDashboard/Profile";
import About from "./pages/about/";
import Contact from "./pages/contact/";
import Vendors_list from "./pages/Vendors_list/";
import PageNotFound from "./pages/PageNotFound";







import './defaults.css';
import './assets/css/style.css';
import './index.css';

// import Form from "./Form"

class App extends React.Component {

  render(){
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about_us" component={About} />
            <Route exact path="/contact_us" component={Contact} />
            <Route path="/vendors_list" component={Vendors_list} />
            <Route path="/venues_details" component={Venues_details} />
            <Route path="/vendor-signup" component={Vendorsignup} />
            <Route path="/vendor-signin" component={Vendorsignin} />
            <Route path="/vendor-dashboard" component={VendorDashboard} />
            <Route path="/mylisting" component={MyListing} />
            <Route path="/editlisting/:id" component={EditListing} />
            <Route path="/packages" component={Packages} />
            <Route path="/addlisting" component={AddListing} />
            <Route path="/myprofile" component={Profile} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/reset-password/:id" component={ResetPassword} />
            <Route path="/auth" component={Auth} />
            <Route path="/mobile-verification" component={MobileOtp} />
            <Route path="/termsandconditions" component={Terms} />
            <Route path="/privacyandpolicy" component={Privacy} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </>
    );}
}

export default App;


