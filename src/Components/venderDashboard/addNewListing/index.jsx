import React from 'react';
import axios from 'axios'
import { withRouter,Link } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';
import Select from 'react-select';
import VendorDashboard from "../dashboard/index"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PlacesAutocomplete from 'react-places-autocomplete';
import ReactTooltip from 'react-tooltip';
import MyListing from "../myListing/index"
import {Button,Modal,Spinner} from "react-bootstrap"
import MobileVerification from "../../Modals/mobileVerification"


import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import vendorDashboard from '../../../pages/vendorDashboard/Dashboard';
import myListing from '../myListing/index';

const IndustryOptions = [
  { value: 'Less than 3', label: 'Less than 3' },
  { value: 'Between 3 and 5', label: 'Between 3 and 5' },
  { value: 'More than 5', label: 'More than 5' }
];
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Priceoptions = [
  { value: 'Per Person', label: 'Per Person' },
  { value: 'Hire Fee', label: 'Hire Fee' },
  { value: 'Starting From', label: 'Starting From' },
  { value: 'Weekend Surcharge', label: 'Weekend Surcharge' },
  { value: 'Per hour', label: 'Per hour' },
  { value: 'Per day', label: 'Per day' },
  { value: 'Per event', label: 'Per event' },
]

let eventOptions = [
  { Option: 'Kids Birthday', Value: 'Kids Birthday' },
  { Option: 'Adult Birthday', Value: 'Adult Birthday' },
  { Option: 'Bucks Night', Value: 'Bucks Night' },
  { Option: 'Hens Night', Value: 'Hens Night' },
  { Option: 'Corporate function/event', Value: 'Corporate function/event' },
  { Option: 'Engagement', Value: 'Engagement' },
  { Option: 'Wedding', Value: 'Wedding' },
  { Option: 'Meeting', Value: 'Meeting' },
  { Option: 'Get together', Value: 'Get together' },
  { Option: 'Others', Value: 'Others' },

]
/* const searchOptions = {
  location: new google.maps.LatLng(-34, 151),
  radius: 2000,
  types: ['address']
} */
 
let coptions={
  type:['(regions)'],
  componentRestrictions:{country:"aus"}
}
class AddListing extends React.Component {

  state = {
    business_name: "",
    tagline: "",
    vendor_address: "",
    description: "",
    event_type: [],
    pricing_structure: [],
    contact_options: "Phone Number",
    file_choose: "",
    phone_number: "",
    mobile_number:"",
    category: "",
    subCategory: "",
    c_whatsapp: false,
    industury_experience: "",
    minimum_group: "",
    inclusions: "",
    exclusions: "",
    takeaway: false,
    foodtruck: false,
    paymentTerms: "",
    percentage_advance: "",
    cancellation_policy: "",
    halal_menu: false,
    kosher_menu: false,
    vegan_menu: false,
    vegetarian_menu: false,
    gluten_free_menu: false,
    facebook: "",
    twitter: "",
    website: "",
    instagram: "",
    google: "",
    sunday: { availability: false, from: "", to: "" },
    monday: { availability: false, from: "", to: "" },
    tuesday: { availability: false, from: "", to: "" },
    wednesday: { availability: false, from: "", to: "" },
    thursday: { availability: false, from: "", to: "" },
    friday: { availability: false, from: "", to: "" },
    saturday: { availability: false, from: "", to: "" },
    Photos: [],
    Profile_Pic: null,
    Menu: [],
    menuArray: [],
    cusisine: [],
    lat:"",
    lng:"",
    city:"",
    adminArea:"",
    /*  */

    photosArray: [],
    price_input: "",
    price_option: "",
    selectProfile: false,
    dashboard: false,
    services: true,
    errors: {},
    validForm: false,
    categories: null,
    musicSubCat: null,
    subCat: null,
    savedphotos: [],
    savedmenu: [],
    savedprofilepic: "",
    payment: true,
    listingId: "",
    show : false,
    formData:null,
    PymentModal:false,
    availabilityError:false,
    loading:false,
    proceedloader:false,
    selectedPlan:{},
    Profile_Pic_Index:"0",
    phoneCode:"02",
    saveFormbtn:false   
  }

   handleClose = () => {this.setState({show:false})}
   handleShow = () => {this.setState({show:true})}
  addPrice = (e) => {
    e.preventDefault();
    let item = this.state.pricing_structure
    const Option = this.state.price_option;
    const Value = this.state.price_input;
    if (Option.length > 0 && Value.length > 0) {
      item.push({ Option, Value })
      this.setState({ pricing_structure: item, price_input: "",price_option:"" })
    }
  }

  componentDidMount() {
    this.setState({
      loading:true
    })
    let id = localStorage.getItem("vendor_id")
    axios.get(`${process.env.REACT_APP_API}/api/auth/getcategories/${id}`).then(res => {
      if (res.data.Error == false) {
        if (res.data.data) {
          if (res.data.data.Photos) {
            this.setState({ savedphotos: res.data.data.Photos })
          }
          if (res.data.data.Menu) {
            this.setState({ savedmenu: res.data.data.Menu })
          }
          if (res.data.data.Profile_Pic) {
            this.setState({ savedprofilepic: res.data.data.Profile_Pic })
          }
        }
        let categoryOptions = []
        let subCategory = []
        let subCategory2 = []
        res.data.data1.map((data, i) => {
          categoryOptions.push({ value: data.Category, label: data.Category })
          subCategory.push(data.SubCategory)
        })
        subCategory[0].map((data, i) => {
          subCategory2.push({ value: data, label: data })
        })
        this.setState({
          categories: categoryOptions,
          musicSubCat: res.data.data1,
          subCat: subCategory2
        })
      }
    })
  }

  saveForm = (e) => {
    e.preventDefault()
    let selectedPlan=JSON.parse(localStorage.getItem("selectedPlan"))
    console.log(selectedPlan)
    let errors = {}
    let form=false
    let availabilitySelected=true;
    let availabilitySelected1=false
    let { business_name, tagline, vendor_address, phone_number, mobile_number, category, subCategory, description, industury_experience, pricing_structure, paymentTerms, event_type, err,sunday,monday,tuesday,wednesday,thursday,friday,saturday } = this.state
  if(sunday.availability){
    if(!sunday.from ) {
      errors.sundayfrom="Please Enter Time"
      availabilitySelected= false
    }
    if(!sunday.to){
      errors.sundayto="Please Enter Time"
        availabilitySelected= false
    }
  }
  if(monday.availability){
    if(!monday.from) {
      errors.mondayfrom="Please Enter Time"
      availabilitySelected= false

    } if(!monday.to){
      errors.mondayto="Please Enter Time"
      availabilitySelected= false

    }
  }
  if(tuesday.availability){
    if(!tuesday.from){
      errors.tuesdayfrom="Please Enter Time"
      availabilitySelected= false
    } 
    if(!tuesday.to){
      errors.tuesdayto="Please Enter Time"
      availabilitySelected= false

    }
  }
  if(wednesday.availability){
    if(!wednesday.from){
      errors.wednesdayfrom="Please Enter Time"
      availabilitySelected= false
    }  
    if(!wednesday.to){
      errors.wednesdayto="Please Enter Time"
      availabilitySelected= false

    }
  }
  if(thursday.availability){
    if(!thursday.from){
      errors.thursdayfrom="Please Enter Time"
      availabilitySelected= false
    } 
    if(!thursday.to){
      errors.thursdayto="Please Enter Time"
      availabilitySelected= false

    }
  }
  if(friday.availability){
    if(!friday.from){
      errors.fridayfrom="Please Enter Time"
      availabilitySelected= false
    }  
    if(!friday.to){
      errors.fridayto="Please Enter Time"
      availabilitySelected= false

    }
  }
  if(saturday.availability){
    if(!saturday.from) {
      errors.saturdayfrom="Please Enter Time"
      availabilitySelected= false
    }
    if(!saturday.to){
      errors.saturdayto="Please Enter Time"
      availabilitySelected= false

    }
  }

  if (availabilitySelected){
    form = true;
  }
  else {
    if (mobile_number && (mobile_number.length<10)) {
      errors.mobile_number = "Mobile Number must be 10 digits long"
    }
    this.setState({
      errors: errors
    })
  }
    let Availability = {
      Sunday: {
        Availability: this.state.sunday.availability,
        From: this.state.sunday.from,
        To: this.state.sunday.to
      },
      Monday: {
        Availability: this.state.monday.availability,
        From: this.state.monday.from,
        To: this.state.monday.to
      },
      Tuesday: {
        Availability: this.state.tuesday.availability,
        From: this.state.tuesday.from,
        To: this.state.tuesday.to
      },
      Wednesday: {
        Availability: this.state.wednesday.availability,
        From: this.state.wednesday.from,
        To: this.state.wednesday.to
      },
      Thursday: {
        Availability: this.state.thursday.availability,
        From: this.state.thursday.from,
        To: this.state.thursday.to
      },
      Friday: {
        Availability: this.state.friday.availability,
        From: this.state.friday.from,
        To: this.state.friday.to
      },
      Saturday: {
        Availability: this.state.saturday.availability,
        From: this.state.saturday.from,
        To: this.state.saturday.to
      }
    }
    let Service = {};
    if (this.state.services) {
      Service = {
        Value: true,
        Options: {
          Inclusions: this.state.inclusions,
          Exclusions: this.state.exclusions,
          Takeaway_Only: this.state.takeaway,
          Food_Vehicle: this.state.foodtruck
        }
      }
    }

    let Catering = {
      Halal_Menu: this.state.halal_menu,
      Kosher_Menu: this.state.kosher_menu,
      Vegan_Menu: this.state.vegan_menu,
      Vegetarian_Menu: this.state.vegetarian_menu,
      Gluten_Free_Menu: this.state.gluten_free_menu
    }

    let Social_Media_Links = {
      facebook: this.state.facebook,
      website: this.state.website,
      instagram: this.state.instagram,
      google: this.state.google,
      twitter: this.state.twitter
    }
    let Payment_Terms = null
    if (this.state.paymentTerms === "Full Advance") {
      Payment_Terms = {
        Option: this.state.paymentTerms,
        Percentage: 100
      }
    }
    else if (this.state.paymentTerms === "No Advance") {
      Payment_Terms = {
        Option: this.state.paymentTerms,
        Percentage: 0
      }
    }
    else if (this.state.paymentTerms === "Advance") {
      Payment_Terms = {
        Option: this.state.paymentTerms,
        Percentage: this.state.percentage_advance
      }

    }

    let EventType = []
    this.state.event_type.map((data, i) => {
      EventType.push(data.Value)
    })

    let cusisine = []
    this.state.cusisine.map((data, i) => {
      cusisine.push(data.value)
    })
    let address={
      Address:this.state.vendor_address,
      Lat:this.state.lat,
      Lng:this.state.lng,
      City:this.state.city,
      State:this.state.adminArea
    }
    let packagePlan={
      name:selectedPlan.Name,
      price:selectedPlan.Price
    }
    let phoneNumber="";
    if(this.state.phone_number.length>0){
       phoneNumber=`${this.state.phoneCode}${this.state.phone_number}`
    }
    let formData = new FormData();
    formData.append("vendor_id", localStorage.getItem("vendor_id"));
    formData.append("Name", this.state.business_name);
    formData.append("Tagline", this.state.tagline);
    formData.append("Address", JSON.stringify(address));
    formData.append("Phone_Number",phoneNumber );
    formData.append("Mobile_Number", this.state.mobile_number);
    formData.append("Accept_Whatsapp", this.state.c_whatsapp);
    formData.append("Availability", JSON.stringify(Availability));

    formData.append("Category", this.state.category);
    formData.append("Sub_Category", this.state.subCategory);
    for (const file of this.state.Photos) {
      formData.append("Photos", file);
    }

    if (this.state.Profile_Pic) {
      formData.append("Profile_Pic", this.state.Profile_Pic);
    }
    else {
      formData.append("Profile_Pic", this.state.Photos[0])
    }
    formData.append("Description", this.state.description);
    formData.append("Industry_Experience", this.state.industury_experience);
    formData.append("Service", JSON.stringify(Service));
    formData.append("Catering", JSON.stringify(Catering));
    formData.append("Cusisine", cusisine);
    formData.append("Price", JSON.stringify(this.state.pricing_structure));
    formData.append("Payment_Terms", JSON.stringify(Payment_Terms));
    formData.append("Cancellation_Policy", this.state.cancellation_policy);
    formData.append("Minimum_Group_Size", this.state.minimum_group);
    formData.append("Event_Types", EventType);
    formData.append("Saved_Photos", JSON.stringify(this.state.savedphotos));
    formData.append("Saved_Menu", JSON.stringify(this.state.savedmenu));
/*     formData.append("Saved_Profile_Pic", this.state.savedprofilepic);
 */    formData.append("Saved_Profile_Pic", this.state.savedphotos[0]);

    for (const file of this.state.Menu) {
      formData.append("Menu", file);
    }
    
    formData.append("Social_Media_Links", JSON.stringify(Social_Media_Links));
    formData.append("package", JSON.stringify(packagePlan));
    formData.append("Profile_Pic_Index", this.state.Profile_Pic_Index);

    formData.append("Status", "Draft");


    let token = localStorage.getItem("token")
    let that = this;
    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // that.setState({ filesProgress: percentCompleted });
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    if(form==true){
      this.setState({
        saveFormbtn:true,
        loading:false
      })
      axios.post(`${process.env.REACT_APP_API}/api/auth/savelisting`, formData, Config).then(res => {
        if (res.data.success) {
          this.props.history.push("/mylisting") 
          NotificationManager.success('Listing Save Successfully', '', 700);
        }
        else {
          console.log("error")
        }
        this.setState({
          loading:true
        })
      })

    }
  }

  submitForm = (e) => {
    e.preventDefault()
    let selectedPlan=JSON.parse(localStorage.getItem("selectedPlan"))
    this.setState({
      selectedPlan
    })
    let errors = {}
    let form = false
    let availabilitySelected=true;
    let availabilitySelected1=false
    let { business_name, tagline, vendor_address, phone_number, mobile_number, category, subCategory, description, industury_experience, pricing_structure, paymentTerms, event_type, err,sunday,monday,tuesday,wednesday,thursday,friday,saturday } = this.state
  
    if((sunday.availability) || (monday.availability) || (tuesday.availability ) || (wednesday.availability) || (thursday.availability   ) || (friday.availability ) || (saturday.availability)){
        availabilitySelected1=true
        this.setState({
        availabilityError:true
      })
    }
    if(sunday.availability){
      if(!sunday.from ) {
        errors.sundayfrom="Please Enter Time"
        availabilitySelected= false
      }
      if(!sunday.to){
        errors.sundayto="Please Enter Time"
          availabilitySelected= false
      }
    }
    if(monday.availability){
      if(!monday.from) {
        errors.mondayfrom="Please Enter Time"
        availabilitySelected= false

      } if(!monday.to){
        errors.mondayto="Please Enter Time"
        availabilitySelected= false

      }
    }
    if(tuesday.availability){
      if(!tuesday.from){
        errors.tuesdayfrom="Please Enter Time"
        availabilitySelected= false
      } 
      if(!tuesday.to){
        errors.tuesdayto="Please Enter Time"
        availabilitySelected= false

      }
    }
    if(wednesday.availability){
      if(!wednesday.from){
        errors.wednesdayfrom="Please Enter Time"
        availabilitySelected= false
      }  
      if(!wednesday.to){
        errors.wednesdayto="Please Enter Time"
        availabilitySelected= false

      }
    }
    if(thursday.availability){
      if(!thursday.from){
        errors.thursdayfrom="Please Enter Time"
        availabilitySelected= false
      } 
      if(!thursday.to){
        errors.thursdayto="Please Enter Time"
        availabilitySelected= false

      }
    }
    if(friday.availability){
      if(!friday.from){
        errors.fridayfrom="Please Enter Time"
        availabilitySelected= false
      }  
      if(!friday.to){
        errors.fridayto="Please Enter Time"
        availabilitySelected= false

      }
    }
    if(saturday.availability){
      if(!saturday.from) {
        errors.saturdayfrom="Please Enter Time"
        availabilitySelected= false
      }
      if(!saturday.to){
        errors.saturdayto="Please Enter Time"
        availabilitySelected= false

      }
    }
 
    if (business_name && vendor_address && (mobile_number.length==10) && category && subCategory && description && industury_experience && paymentTerms && event_type.length > 0 && this.state.pricing_structure.length > 0 && (this.state.Photos.length>0 || this.state.savedphotos.length>0 ) && availabilitySelected && availabilitySelected1 ) {
      form = true;
    }
    else {
      if (!business_name) {
        errors.business_name = "Please Enter Name"
      }
      if (!vendor_address) {
        errors.vendor_address = "Please Enter Address"
      }
      if (!mobile_number || (mobile_number.length<10)) {
        errors.mobile_number = "Mobile Number must be 10 digits long"
      }
      if (!category) {
        errors.category = "Please Select Category "
      }
      if (!subCategory) {
        errors.subCategory = "Please Select Sub category "
      }
      if (!description) {
        errors.description = "Please Enter Description "
      }
      if (!industury_experience) {
        errors.industury_experience = "Please Select Industury Experience "
      }
      if (this.state.cusisine.length == 0) {
        errors.cusisine = "Please Select Cuisine "
      }
      if (pricing_structure.length == 0) {
        errors.pricing_structure = "Please Enter Price"
      }
      if (!paymentTerms) {
        errors.paymentTerms = "Please Select Payment Terms "
      }
      if (event_type.length == 0) {
        errors.event_type = "Please Select Event Type "
      }
      if (!this.state.percentage_advance) {
        errors.percentage_advance = "Please Enter Advance Percentage"
      }
      if (this.state.pricing_structure.length == 0) {
        errors.price_option = "Please add Pricing"
      }
      if (this.state.Photos.length==0) {
        errors.photos = "Please select atleast one image"
      }
      if(availabilitySelected1==false){
        errors.availability = "Please select availbality day and time"
        this.setState({
          availabilityError:false
        })
      }
      NotificationManager.warning('Please Enter All Required Fields', '', 800);
      this.setState({
        errors: errors
      })
    }

    let Availability = {
      Sunday: {
        Availability: this.state.sunday.availability,
        From: this.state.sunday.from,
        To: this.state.sunday.to
      },
      Monday: {
        Availability: this.state.monday.availability,
        From: this.state.monday.from,
        To: this.state.monday.to
      },
      Tuesday: {
        Availability: this.state.tuesday.availability,
        From: this.state.tuesday.from,
        To: this.state.tuesday.to
      },
      Wednesday: {
        Availability: this.state.wednesday.availability,
        From: this.state.wednesday.from,
        To: this.state.wednesday.to
      },
      Thursday: {
        Availability: this.state.thursday.availability,
        From: this.state.thursday.from,
        To: this.state.thursday.to
      },
      Friday: {
        Availability: this.state.friday.availability,
        From: this.state.friday.from,
        To: this.state.friday.to
      },
      Saturday: {
        Availability: this.state.saturday.availability,
        From: this.state.saturday.from,
        To: this.state.saturday.to
      }
    }
    let Service = {};
    if (this.state.services) {
      Service = {
        Value: true,
        Options: {
          Inclusions: this.state.inclusions,
          Exclusions: this.state.exclusions,
          Takeaway_Only: this.state.takeaway,
          Food_Vehicle: this.state.foodtruck
        }
      }
    }

    let Catering = {
      Halal_Menu: this.state.halal_menu,
      Kosher_Menu: this.state.kosher_menu,
      Vegan_Menu: this.state.vegan_menu,
      Vegetarian_Menu: this.state.vegetarian_menu,
      Gluten_Free_Menu: this.state.gluten_free_menu
    }

    let Social_Media_Links = {
      facebook: this.state.facebook,
      website: this.state.website,
      instagram: this.state.instagram,
      google: this.state.google,
      twitter: this.state.twitter
    }
    let Payment_Terms
    if (this.state.paymentTerms === "Full Advance") {
      Payment_Terms = {
        Option: this.state.paymentTerms,
        Percentage: 100
      }
    }
    else if (this.state.paymentTerms === "No Advance") {
      Payment_Terms = {
        Option: this.state.paymentTerms,
        Percentage: 0
      }
    }
    else if (this.state.paymentTerms === "Advance") {
      Payment_Terms = {
        Option: this.state.paymentTerms,
        Percentage: this.state.percentage_advance
      }

    }

    let EventType = []
    this.state.event_type.map((data, i) => {
      EventType.push(data.Value)
    })

    let cusisine = []
    this.state.cusisine.map((data, i) => {
      cusisine.push(data.value)
    })
    let address={
      Address:this.state.vendor_address,
      Lat:this.state.lat,
      Lng:this.state.lng,
      City:this.state.city,
      State:this.state.adminArea
    }
    let packagePlan={
      name:selectedPlan.Name,
      price:selectedPlan.Price
    }
    let phoneNumber="";
    if(this.state.phone_number.length>0){
       phoneNumber=`${this.state.phoneCode}${this.state.phone_number}`
    }
    let formData = new FormData();
    formData.append("vendor_id", localStorage.getItem("vendor_id"));
    formData.append("Name", this.state.business_name);
    formData.append("Tagline", this.state.tagline);
    formData.append("Address", JSON.stringify(address));
    formData.append("Phone_Number", phoneNumber);
    formData.append("Mobile_Number", this.state.mobile_number);
    formData.append("Accept_Whatsapp", this.state.c_whatsapp);
    formData.append("Availability", JSON.stringify(Availability));
    formData.append("Category", this.state.category);
    formData.append("Sub_Category", this.state.subCategory);
    for (const file of this.state.Photos) {
      formData.append("Photos", file);
    }
    if (this.state.Profile_Pic) {
      formData.append("Profile_Pic", this.state.Profile_Pic);
    }
    else {
      formData.append("Profile_Pic", this.state.Photos[0])
    }
    formData.append("Description", this.state.description);
    formData.append("Industry_Experience", this.state.industury_experience);
    formData.append("Service", JSON.stringify(Service));
    formData.append("Catering", JSON.stringify(Catering));
    formData.append("Cusisine", cusisine);
    formData.append("Price", JSON.stringify(this.state.pricing_structure));
    formData.append("Payment_Terms", JSON.stringify(Payment_Terms));
    formData.append("Cancellation_Policy", this.state.cancellation_policy);
    formData.append("Minimum_Group_Size", this.state.minimum_group);
    formData.append("Event_Types", EventType);
    formData.append("Saved_Photos", JSON.stringify(this.state.savedphotos));
    formData.append("Saved_Menu", JSON.stringify(this.state.savedmenu));
    formData.append("Saved_Profile_Pic", this.state.savedprofilepic);
    for (const file of this.state.Menu) {
      formData.append("Menu", file);
    }
    formData.append("Social_Media_Links", JSON.stringify(Social_Media_Links));
    formData.append("package", JSON.stringify(packagePlan));
    formData.append("Profile_Pic_Index", this.state.Profile_Pic_Index);



    let token = localStorage.getItem("token")
    let that = this;
    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // that.setState({ filesProgress: percentCompleted });
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    if (form == true) {
      this.setState({
        formData:formData,
        loading:false
      })
      this.OtpVeriy();
    }
  }
OtpVeriy = async () => {
    let data={
      Mobile_Number:this.state.mobile_number,
      vendor_id:localStorage.getItem("vendor_id"),
    }

    await axios.post(`${process.env.REACT_APP_API}/api/auth/checkMobile`, data).then(res => {
      console.log(res.data)
   if (res.data.Error==false) {
        if(res.data.msg== "Mobile is already verified."){
          this.addListing()
      }else{
        this.handleShow(); 
      }
      }

      else {
        console.log("error")
      } 
      this.setState({
        loading:true
      })
    }) 
  }
  addListing=()=>{
    let token = localStorage.getItem("token")
    let that = this;
    const Config = {
      onUploadProgress: function (progressEvent) {
        let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        // that.setState({ filesProgress: percentCompleted });
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    axios.post(`${process.env.REACT_APP_API}/api/auth/addlisting`, this.state.formData, Config).then(res => {
        if (res.data.success) {   
          this.paymentModalShow(res.data.listing._id);                         
         // this.paymentMethod(res.data.listing._id)
        }
        else {
          console.log("error")
        }
      }) 
}
  paymentMethod=(Listid)=>{
    let id = localStorage.getItem("vendor_id")
    let selectedPlan=JSON.parse(localStorage.getItem("selectedPlan"))
    let Name = selectedPlan.Name
    let Price = selectedPlan.Price
    let data = {
        vendor_id: id,
        listing_id: Listid,
        payment_type: "Paypal",
        package: {
          name: Name,
          price: Price
        },
        paypal: {
          token: "864as6d846",
          payId: "asdasdsadsad"
        }
      }
      this.setState({
        proceedloader:true
      })
     axios.put(`${process.env.REACT_APP_API}/api/auth/getPaypal`, data).then(res => {
        console.log(res.data)
        if (res.data.url) {
          window.open(res.data.url)
          this.props.history.push("/mylisting")
        }
        else {
          console.log("error")
        }
        this.setState({
          proceedloader:true
        })
      })
}
  removePrice = (id) => {
    let arr = this.state.pricing_structure.filter((data, i) => {
      if (id !== i) {
        return data
      }
    })
    this.setState({
      pricing_structure: arr
    })
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({ [name]: value })
  }

  handleChangeAddress = vendor_address => {
    this.setState({ vendor_address });
  };

  handleSelectAddress = (address, placeId) => {
    let _this=this
    this.setState({vendor_address:address})
    geocodeByAddress(address)
      .then(results =>{ 
        this.setState({ lat : results[0].geometry.location.lat()})
           this.setState({ lng : results[0].geometry.location.lng()})
        results[0].address_components.forEach(function(address){
          address.types.forEach(function(type) { 
            if(type ==='locality')
            _this.setState({ city : address.long_name})
            if(type === "administrative_area_level_1")
            _this.setState({adminArea:address.long_name})
          })
          
          })        
        
        })
      .catch(error => console.error('Error', error));
  };

  selectProfile = (index) => {

    let photo = this.state.Photos.filter((data, i) => {
      if (i == index) {
        return data
      }
    })

    this.setState({
      Profile_Pic: photo[0],
      Profile_Pic_Index:index
    })


  }
  PhotoSelectedHandler = (e) => {
    this.setState({ Photos: [...this.state.Photos, ...e.target.files] })
    const photosArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
    this.setState({
      photosArray: [...this.state.photosArray, ...photosArray]
    })
    setTimeout(()=>{e.target.value=null},800) 
  }
  removeImage = (index) => {
    let arr = this.state.Photos.filter((data, i) => {
      return i !== index
    })
    let arr2 = this.state.photosArray.filter((data, i) => {
      return index !== i
    })
    console.log("index", index)
    console.log(arr)
    this.setState({
      Photos: arr,
      photosArray: arr2
    })
  }
  MenuFileHandler = (e) => {
    console.log("Menu", e.target.files)
    this.setState({ Menu: [...this.state.Menu, ...e.target.files] })
    const photosArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
    this.setState({
      menuArray: [...this.state.menuArray, ...photosArray]
    })
  }

  removeMenuImage = (index) => {
    let arr = this.state.Menu.filter((data, i) => {
      return i !== index
    })
    let arr2 = this.state.menuArray.filter((data, i) => {
      return index !== i
    })
    console.log("index", index)
    this.setState({
      Menu: arr,
      menuArray: arr2
    })
  }
  handleCategory = (cat) => {
    let arr = []
    this.setState({
      subCategory: ""
    })
    this.state.musicSubCat.map((data, i) => {
      if (cat.value == data.Category) {
        arr = data.SubCategory
      }
    })
    let subCat = []
    arr.map((data, i) => {
      subCat.push({ value: data, label: data })
    })
    this.setState({
      subCat: subCat,
      category: cat.value
    })
  }
  handleCkEditorDescription = (event, editor) => {
    const data = editor.getData();
    this.setState({
      description: data
    })
  }
  handleCkEditorCancellation = (event, editor) => {
    const data = editor.getData();
    this.setState({
      cancellation_policy: data
    })
  }
  phoneInput=(e)=>{
    const ch =String.fromCharCode(e.which)
  if(!(/[0-9]/.test(ch))){
    e.preventDefault();
  }
  else if(this.state.mobile_number.length>=11){
  e.preventDefault()
  }
  }
  mobileInput=(e)=>{
    const ch =String.fromCharCode(e.which)
  if(!(/[0-9]/.test(ch))){
    e.preventDefault();
  }
  }
  paymentModalClose=()=>{
    this.setState({
      PymentModal:false,
      loading:true
    })
  }
  paymentModalShow=(id)=>{
    this.setState({
      PymentModal:true,
      listingId:id,
      show:false,
      loading:true

    })
  }
  render() {
 
    return (
      <>
            <div className={this.props.SideBar ? "content-body" : "content-body extended"}>
            {
              this.state.loading ?
              <div className="container-fluid">
                <div className="col-lg-12">
                  <div className="dashboard-page-header">
                    <h3 className="dashboard-page-title">Add New Listing</h3>
{/*                     <p className="d-block mb-0">Lists present multiple line items vertically as a single continuous element.</p>
 */}                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card">
                    <div className>
                      <form >
                        <div className="venue-form-info card-body">
                          <div className="row">
                            <div className="col-md-6 col-12">
                              <div className="form-group">
                                <label className="control-label mb-0" htmlFor="title1">Business Name<label className="red">*</label></label>
                                <input id="title" name="business_name"
                                  value={this.state.business_name}
                                  onChange={this.handleChange} type="text"
                                  placeholder="Business Name" className="form-control " />
                                {this.state.business_name.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.business_name}</span>}
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="form-group">
                                <label className="control-label" htmlFor="title2">Tagline(Optional)<i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Tagline"> </i></label>
                                <input id="title" name="tagline" value={this.state.tagline}
                                  onChange={this.handleChange} type="text"
                                  placeholder="Enter Tageline" className="form-control " />
                              </div>
                            </div>
                            <div className="col-sm-12 col-12">
                              <div className="form-group">
                                <label className="control-label" htmlFor="address">Address<label className="red">*</label></label>
                                <PlacesAutocomplete
                                  value={this.state.vendor_address}
                                  onChange={this.handleChangeAddress}
                                  onSelect={this.handleSelectAddress}
                                  searchOptions={coptions}
                                 //  searchOptions={searchOptions}
                              >
                                  {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                    <div>
                                      <input
                                        {...getInputProps({
                                          placeholder: 'Enter Address',
                                          className: 'location-search-input form-control',
                                        })}
                                      />
                                      <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {suggestions.map(suggestion => {
                                          console.log("data ",suggestion)
                                          const className = suggestion.active
                                            ? 'suggestion-item--active'
                                            : 'suggestion-item';
                                          // inline style for demonstration purpose
                                          const style = suggestion.active
                                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                          return (
                                            <div
                                              {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                              })}
                                            >
                                              <span>{suggestion.description}</span>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </PlacesAutocomplete>
                                {this.state.vendor_address.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.vendor_address}</span>}
                              </div>
                            </div>

                            <div className="col-md-6 col-12">
                              <div className="form-group">
                                <label className="control-label mb-0" htmlFor="title">Mobile Number<label className="red">*</label></label>
                                                    
                                <input type="text"  value={this.state.mobile_number} onFocus={()=>this.setState({mobile_number:`04`})} onKeyDown={(e)=>{if(this.state.mobile_number.length==2)if(e.which==8){e.preventDefault()}}}
                          placeholder="Mobile Number" onKeyPress={this.phoneInput} onChange={this.handleChange}  name='mobile_number'
                                 maxLength="10" className="form-control" id="exampleInputEmail1"
                                 aria-describedby="emailHelp" autocomplete="off" placeholder="Mobile Number" noValidate />

                                {this.state.mobile_number.length == 10 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.mobile_number}</span>}
                              </div>
                            </div>

                            <div className="col-md-6 col-12">
                              <div className="form-group numberDropdownContainer">
                                 <select onChange={(e)=>{this.setState({phoneCode:e.target.value})}} className='customSelect sel'>
                                              <option value="02">02</option>
                                              <option value="03">03</option>
                                              <option value="07">07</option>
                                              <option value="08">08</option>
                                            </select>
                                <label className="control-label" htmlFor="title">Phone Number(Optional)</label>
                                <input id="title" name="phone_number"
                                  value={this.state.phone_number}
                                  onChange={this.handleChange} type="text"
                                  onKeyPress={this.mobileInput}
                                  placeholder="Enter Phone Number"
                                  maxLength="8"
                                  className="form-control " />
                              </div>
                            </div>

                            <div className="col-md-6 col-12" style={{ margin: "20px 0px" }}>
                              <div className="custom-control custom-checkbox">
                                <input type="checkbox" value={this.state.c_whatsapp}
                                  checked={this.state.c_whatsapp}
                                  onChange={(e) => {
                                    this.setState({ c_whatsapp: !this.state.c_whatsapp })
                                  }} className="custom-control-input" id="facility6" />
                                <label className="custom-control-label" htmlFor="facility6">Accept communication over WhatsApp<i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Check this box to let customers know that you are available <br> over Whatsapp for quick conversation and quotes"> </i> </label>
                                {this.state.c_whatsapp.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.c_whatsapp}</span>}
                              </div>
                            </div>

                             
                                <div className="col-12">
                                  <h3>Service Details</h3>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="form-group">
                                    <label className="control-label" htmlFor="cat">Category<label style={{ color: "red" }}>*</label><i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Category"> </i></label>
                                    <Select className="customSelect" value={{ label: this.state.category }} onChange={(data) => { this.handleCategory(data) }} classNamePrefix="customSelectOpt" options={this.state.categories} />
                                    {this.state.category.length > 0 ?
                                      ""
                                      :
                                      <span style={{ color: "red" }}>{this.state.errors.category}</span>}

                                  </div>
                                </div>

                                <div className="col-md-6 col-12">
                                  <div className="form-group">
                                    <label className="control-label" htmlFor="sub">Sub Category <label style={{ color: "red" }}>*</label><i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Sub Category"> </i></label>
                                    <Select className="customSelect" value={{ label: this.state.subCategory }} onChange={(data) => { this.setState({ subCategory: data.value }) }} classNamePrefix="customSelectOpt" options={this.state.subCat} />
                                    {this.state.subCategory.length > 0 ?
                                      ""
                                      :
                                      <span style={{ color: "red" }}>{this.state.errors.subCategory}</span>}
                                  </div>
                                </div>
                                <div className="col-md-6 col-12">
                                  <div className="form-group customSelectWrap">
                                    <label className="control-label" htmlFor="experince">Industry Experience (In years)<label style={{ color: "red" }}>*</label></label>
                                    <Select className="customSelect" value={{ label: this.state.industury_experience }} onChange={(data) => { this.setState({ industury_experience: data.value }) }} classNamePrefix="customSelectOpt" options={IndustryOptions} />
                                    {this.state.industury_experience.length > 0 ?
                                      ""
                                      :
                                      <span style={{ color: "red" }}>{this.state.errors.industury_experience}</span>}
                                  </div>
                                </div>

                           
                                <div className="col-12">
                                  <h3>Photos<label style={{ color: "red" }}>*</label></h3>
                                  {(this.state.Photos.length>0 || this.state.savedphotos.length>0) ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.photos}</span>}
                                </div>
                                <div className="col-12">
                                  <div className="form-group">
                                    <label className="control-label">Browse Image</label>
                                    <input onChange={this.PhotoSelectedHandler}
                                      name="Photo"
                                      className="btn btn-primary btn-block" type="file"
                                      multiple />
                                  </div>
                                </div>

                                {
                                  this.state.photosArray && this.state.photosArray.map((photo, i) => {
                                    return (
                                      <div className="col-sm-6 col-md-4 ">
                                        <div className="gallery-upload-img">
                                          <img src={photo} alt="" className="img-fluid" />
                                          <span className="delete-gallery-img">
                                            <a href="#">
                                              <i onClick={() => this.removeImage(i)} className="fa  fa-times-circle" />
                                            </a>
                                          </span>
                                          <div
                                            className="custom-control custom-checkbox mb-1">
                                            <input value={i}
                                              id={i}
                                              checked={this.state.selectProfile == i}
                                              onChange={(e) => {
                                                this.selectProfile(i)
                                                this.setState({
                                                  selectProfile: e.target.value
                                                })
                                              }} className="custom-control-input"
                                              type="radio" name="selectProfile"

                                            />
                                            <label className="custom-control-label"
                                              htmlFor={i}>Select as Profile Image</label>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })

                                }

                                  
                             
                                <div className="col-sm-12 col-12">
                                  <div className="form-group">
                                    <label className="control-label"
                                      htmlFor="title">Description<label style={{ color: "red" }}>*</label><i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Description"> </i></label>
                                    {/*                                     <textarea name="description" value={this.state.description}
                                      onChange={this.handleChange} className="form-control"
                                      placeholder="Enter Description" rows={5}
                                      defaultValue={""} /> */}
                                    <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={this.state.description}
                                      onInit={(editor) => { }}
                                      onChange={this.handleCkEditorDescription}
                                    />
                                    {this.state.description.length > 0 ?
                                      ""
                                      :
                                      <span style={{ color: "red" }}>{this.state.errors.description}</span>}
                                  </div>
                                </div>
                                <div className="col-12 mt-3">                                  
                                  <h3>Services</h3>
                                </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label"
                                          htmlFor="city">Inclusions<i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Inclusions"> </i></label>
                                        <input id="location" name="inclusions"
                                          onChange={this.handleChange}
                                          value={this.state.inclusions} type="text"
                                          placeholder="Inclusions" className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-group">
                                        <label className="control-label"
                                          htmlFor="city">Exclusions<i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Exclusions"> </i></label>
                                        <input id="location" name="exclusions"
                                          onChange={this.handleChange}
                                          value={this.state.exclusions} type="text"
                                          placeholder="Exclusions" className="form-control" />
                                      </div>
                                    </div>
                                    {
                                      this.state.category == 'Food' ?
                                        <>
                                          <div className="col-md-6">
                                            <div className="custom-control custom-checkbox">
                                              <input type="checkbox" value={this.state.takeaway}
                                                checked={this.state.takeaway}
                                                onChange={(e) => {
                                                  this.setState({ takeaway: !this.state.takeaway })
                                                }} className="custom-control-input" id="facility5" />
                                              <label className="custom-control-label" htmlFor="facility5">Takeaway
                                              only
                                                      </label>
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="custom-control custom-checkbox">
                                              <input type="checkbox" value={this.state.foodtruck}
                                                checked={this.state.foodtruck}
                                                onChange={(e) => {
                                                  this.setState({ foodtruck: !this.state.foodtruck })
                                                }} className="custom-control-input" id="f6" />
                                              <label className="custom-control-label" htmlFor="f6">Food
                                                          Truck/Car/Van </label>
                                            </div>
                                          </div>
                                        </>
                                        :
                                        ""
                                    }

                            
                          
                          </div>
                          {this.state.category == "Food" ?
                            <>
                              <div className="row border-top mt-2 pt-2">
                                  <div className="col-12 mt-3">
                                    <h3>Catering</h3>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" value={this.state.vegan_menu}
                                        checked={this.state.vegan_menu}
                                        onChange={(e) => {
                                          this.setState({ vegan_menu: !this.state.vegan_menu})
                                        }} className="custom-control-input" id="fg7" />
                                      <label className="custom-control-label" htmlFor="fg7">Vegan menu
                                                      </label>
                                    </div>

                                  </div>
                                  <div className="col-md-4">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" value={this.state.gluten_free_menu}
                                        checked={this.state.gluten_free_menu}
                                        onChange={(e) => {
                                          this.setState({ gluten_free_menu: !this.state.gluten_free_menu })
                                        }} className="custom-control-input" id="fg9" />
                                      <label className="custom-control-label" htmlFor="fg9">Gluten Free menu </label>
                                    </div>
                                  </div>
                                  {this.state.subCategory == 'Catering Services' ?
                                    <>
                                      <div className="col-md-4">
                                        <div className="custom-control custom-checkbox">
                                          <input type="checkbox" value={this.state.halal_menu}
                                            checked={this.state.halal_menu}
                                            onChange={(e) => {
                                              this.setState({ halal_menu: !this.state.halal_menu })
                                            }} className="custom-control-input" id="fg5" />
                                          <label className="custom-control-label" htmlFor="fg5">Halal Menu
                                                      </label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="custom-control custom-checkbox">
                                          <input type="checkbox" value={this.state.vegetarian_menu}
                                            checked={this.state.vegetarian_menu}
                                            onChange={(e) => {
                                              this.setState({ vegetarian_menu: !this.state.vegetarian_menu })
                                            }} className="custom-control-input" id="fg8" />
                                          <label className="custom-control-label" htmlFor="fg8">Vegetarian
                                          menu</label>
                                        </div>
                                      </div>
                                      <div className="col-md-4">
                                        <div className="custom-control custom-checkbox">
                                          <input type="checkbox" value={this.state.kosher_menu}
                                            checked={this.state.kosher_menu}
                                            onChange={(e) => {
                                              this.setState({ kosher_menu: !this.state.kosher_menu })
                                            }} className="custom-control-input" id="fg6" />
                                          <label className="custom-control-label" htmlFor="fg6">Kosher
                                          menu
                                                      </label>
                                        </div>

                                      </div>
                                      <div className="col-md-6 col-12 mt-4">
                                        <div className="form-group">
                                          <label className="control-label" htmlFor="seat">Cuisine<label style={{ color: "red" }}>*</label></label>
                                          <Multiselect
                                            style={{ padding: "10px" }}
                                            options={options}
                                            selectedValues={this.state.cusisine}
                                            onSelect={(a) => { this.setState({ cusisine: a }) }}
                                            onRemove={(a)=>{this.setState({cusisine:a})}}
                                            displayValue="value"
                                          />
                                          {this.state.cusisine.length > 0 ?
                                            ""
                                            :
                                            <span style={{ color: "red" }}>{this.state.errors.cusisine}</span>}
                                        </div>
                                      </div>
                                      <div className="dashboard-venue-gallery card-body border-top">
                                        <div className="row">
                                          <div className="col-12">
                                            <h3>Images of Menu(Optional)</h3>
                                          </div>
                                          <div className=" col-12">
                                            <div className="form-group">
                                              <label className="control-label">Browse Image</label>
                                              <input onChange={this.MenuFileHandler}
                                                name="Menu"
                                                className="btn btn-primary btn-block" type="file"
                                                multiple />
                                            </div>
                                          </div>

                                          {
                                            this.state.menuArray && this.state.menuArray.map((photo, i) => {
                                              return (
                                                <div className="col-sm-6 col-md-4">
                                                  <div className="gallery-upload-img">
                                                    <img src={photo} alt="" className="img-fluid" />
                                                    <span className="delete-gallery-img">
                                                      <a href="#">
                                                        <i onClick={() => this.removeMenuImage(i)} className="fa  fa-times-circle" />
                                                      </a>
                                                    </span>
                                                  </div>
                                                </div>
                                              )
                                            })
                                          }
                                        </div>
                                      </div>
                                    </>
                                    :
                                    ""
                                  }
                                </div>
                            
                            </>
                            :
                            ""
                          }
                        </div>
                        <div className="aminities-form-info card-body border-top">
                          <div className="row">
                            <div className="col-12">
                              <h3>Pricing<i style={{ marginLeft: "10px", fontSize: "19px" }} className="fa fa-info-circle" data-tip="Pricing"> </i></h3>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                              <div className="form-group">
                                <label className="control-label" htmlFor="Category">Pricing Structure<label style={{ color: "red" }}>*</label></label>
                                <Select className="customSelect paymentTerms2" value={{ label: this.state.price_option }} onChange={(data) => { this.setState({ price_option: data.value }) }} classNamePrefix="customSelectOpt" options={Priceoptions} />
                                {this.state.pricing_structure.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.price_option}</span>}
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                              <div className="form-group">
                                <label className="control-label" htmlFor="title">Price<label className="red">*</label></label>
                                <input id="title" name="price_input"
                                  value={this.state.price_input}
                                  onChange={this.handleChange} type="text"
                                  placeholder="Enter Price" className="form-control " />
                              </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 " style={{ marginTop: "41px" }} >
                              <button className='addnewListIcon' onClick={this.addPrice} style={{ background: "#ff4068", color: "#fff", padding: "10px", border: "none", marginRight: "5px" }}>+</button>
                            </div>

                            {
                              this.state.pricing_structure &&
                              this.state.pricing_structure.map((data, i) => {
                                return (
                                  <>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="Category">Pricing Structure {data.price_option}<label style={{ color: "red" }}>*</label></label>
                                        <input id="title" name="price_option"
                                          value={data.Option}
                                          onChange={this.handleChange} type="text"
                                          disabled
                                          placeholder={data.Option} className="form-control " />
                                      </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                      <div className="form-group">
                                        <label className="control-label" htmlFor="title">Price<label className="red">*</label></label>
                                        <input id="title" name="price_input"
                                          value={data.Value}
                                          onChange={this.handleChange} type="text"
                                          disabled
                                          placeholder={data.Value} className="form-control " />
                                      </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 " style={{ marginTop: "41px" }} >
                                      <button className="addnewListIcon" onClick={() => this.removePrice(i)} style={{ background: "#ff4068", color: "#fff", padding: "10px", border: "none" }} >-</button>
                                    </div>
                                  </>
                                )
                              })
                            }

                            <div className="col-md-6 col-12">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city">Payment Terms<label style={{ color: "red" }}>*</label><i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Payment Terms"> </i></label>
                                <Select className="customSelect paymentTerms" value={{ label: this.state.paymentTerms }} onChange={(data) => { this.setState({ paymentTerms: data.value }) }} classNamePrefix="customSelectOpt" options={[{ value: "No Advance", label: "No Advance" }, { value: "Advance", label: "Advance" }, { value: "Full Advance", label: "Full Advance" }]} />
                                {this.state.paymentTerms.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.paymentTerms}</span>}

                              </div>
                            </div>
                            {this.state.paymentTerms == "Advance"
                              ?
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="control-label">Percentage of advance</label>
                                  <input name="percentage_advance" type="number"
                                    onChange={this.handleChange}
                                    value={this.state.percentage_advance}
                                    placeholder="Enter Percentage of Advance"
                                    className="form-control " />
                                  {this.state.percentage_advance.length > 0 ?
                                    ""
                                    :
                                    <span style={{ color: "red" }}>{this.state.errors.percentage_advance}</span>}
                                </div>
                              </div>
                              :
                              ""
                            }
                            <div className="col-md-12">
                              <div className="form-group">
                                <label className="control-label">Cancellation Policy (Optional)<i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Cancellation Policy"> </i></label>
                                <CKEditor
                                      editor={ClassicEditor}
                                      config={{ removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed'], }}
                                      data={this.state.cancellation_policy}
                                      onInit={(editor) => { }}
                                      onChange={this.handleCkEditorCancellation}
                                    />
                              </div>
                            </div>

                          </div>
                        </div>

                        <div className="aminities-form-info card-body border-top">
                          <div className="row">
                            <div className="col-12">
                              <h3>Event Details</h3>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city"> Minimum group size (Optional)<i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Minimal Group Size"> </i></label>
                                <input id="location" name="minimum_group"
                                  onChange={this.handleChange}
                                  value={this.state.minimum_group} type="text"
                                  placeholder=" Minimum group size"
                                  className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6 col-12" style={{ marginTop: "-8px" }}>
                              <div className="form-group">
                                <label className="control-label" htmlFor="evant">Types of event<label style={{ color: "red" }}>*</label><i style={{ marginLeft: "10px" }} className="fa fa-info-circle" data-tip="Types of Events"> </i></label>
                                <Multiselect
                                  style={{ padding: "10px" }}
                                  options={eventOptions}
                                  selectedValues={this.state.event_type}
                                  onSelect={(data) => { this.setState({ event_type: data }) }}
                                  onRemove={(data)=>{this.setState({event_type:data})}}
                                  displayValue="Option"
                                />
                                {this.state.event_type.length > 0 ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.event_type}</span>}

                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="aminities-form-info card-body border-top">
                          <div className="row">
                            <div className="col-12">
                              <h3>Social Media Links<i style={{ marginLeft: "10px", fontSize: "19px" }} className="fa fa-info-circle" data-tip="Social Media Links"> </i></h3>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city"> Facebook
                                                          Link</label>
                                <input id="location" name="facebook"
                                  onChange={this.handleChange} value={this.state.facebook}
                                  type="text" placeholder="Facebook Link"
                                  className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city"> Website
                                                          Link</label>
                                <input id="location" name="website" onChange={this.handleChange}
                                  value={this.state.website} type="text"
                                  placeholder="Webdite Link" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city"> Twitter
                                                          Link</label>
                                <input id="location" name="twitter" onChange={this.handleChange}
                                  value={this.state.twitter} type="text"
                                  placeholder="Twitter Link" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city"> Instagram
                                                          Link</label>
                                <input id="location" name="instagram"
                                  onChange={this.handleChange} value={this.state.instagram}
                                  type="text" placeholder="Instagram Link"
                                  className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="form-group">
                                <label className="control-label" htmlFor="city"> Google
                                                          Link</label>
                                <input id="location" name="google" onChange={this.handleChange}
                                  value={this.state.google} type="text"
                                  placeholder="Google Link" className="form-control" />
                              </div>
                            </div>

                          </div>
                        </div>
                        <div className="aminities-form-info availability-day card-body border-top">
                          <h3>Availability<label style={{ color: "red" }}>*</label><i style={{ marginLeft: "10px", fontSize: "19px" }} className="fa fa-info-circle" data-tip="Availability"> </i></h3>
                          {this.state.availabilityError ?
                                  ""
                                  :
                                  <span style={{ color: "red" }}>{this.state.errors.availability}</span>}
                          <div className="row">
                            <div className="col-12 heading mb-2">
                              <div className="row form-row align-items-center d-none d-md-flex">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="mb-0">Day</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div className="row form-row">
                                    <div
                                      className="offset-lg-3 col-lg-9 col-md-8 offset-md-4">
                                      <div className="row form-row">
                                        <div className="col-6">
                                          <h4 className="mb-0">From</h4>
                                        </div>
                                        <div className="col-6">
                                          <h4 className="mb-0">To</h4>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 data-wrap">
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Sunday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className=" col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.sunday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              sunday: {
                                                ...prevState.sunday,
                                                availability: !this.state.sunday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="sunday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="sunday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.sunday.availability}
                                              type="time"
                                              value={this.state.sunday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  sunday: {
                                                    ...prevState.sunday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                              {(this.state.sunday.from.length==0) && (this.state.sunday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.sundayfrom}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input
                                              disabled={!this.state.sunday.availability}
                                              type="time"
                                              value={this.state.sunday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  sunday: {
                                                    ...prevState.sunday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                              {(this.state.sunday.to.length ==0) && (this.state.sunday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.sundayto}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Monday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.monday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              monday: {
                                                ...prevState.monday,
                                                availability: !this.state.monday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="monday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="monday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.monday.availability}
                                              type="time"
                                              value={this.state.monday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  monday: {
                                                    ...prevState.monday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                             {(this.state.monday.from.length ==0) && (this.state.monday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.mondayfrom}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input
                                              disabled={!this.state.monday.availability}
                                              type="time"
                                              value={this.state.monday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  monday: {
                                                    ...prevState.monday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                       {(this.state.monday.to.length ==0) && (this.state.monday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.mondayto}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Tuesday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.tuesday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              tuesday: {
                                                ...prevState.tuesday,
                                                availability: !this.state.tuesday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="tuesday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="tuesday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.tuesday.availability}
                                              type="time"
                                              value={this.state.tuesday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  tuesday: {
                                                    ...prevState.tuesday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                          {(this.state.tuesday.from.length ==0) && (this.state.tuesday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.tuesdayfrom}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input
                                              disabled={!this.state.tuesday.availability}
                                              type="time"
                                              value={this.state.tuesday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  tuesday: {
                                                    ...prevState.tuesday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                          {(this.state.tuesday.to.length ==0) && (this.state.tuesday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.tuesdayto}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Wednesday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.wednesday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              wednesday: {
                                                ...prevState.wednesday,
                                                availability: !this.state.wednesday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="wednesday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="wednesday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.wednesday.availability}
                                              type="time"
                                              value={this.state.wednesday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  wednesday: {
                                                    ...prevState.wednesday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                              {(this.state.wednesday.from.length ==0) && (this.state.wednesday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.wednesdayfrom}</span>  
                                              :
                                              ""
                                            }
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input
                                              disabled={!this.state.wednesday.availability}
                                              type="time"
                                              value={this.state.wednesday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  wednesday: {
                                                    ...prevState.wednesday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                              {(this.state.wednesday.to.length ==0) && (this.state.wednesday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.wednesdayto}</span> 
                                              :
                                              ""}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Thursday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.thursday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              thursday: {
                                                ...prevState.thursday,
                                                availability: !this.state.thursday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="thursday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="thursday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.thursday.availability}
                                              type="time"
                                              value={this.state.thursday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  thursday: {
                                                    ...prevState.thursday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                              {(this.state.thursday.from.length ==0) && (this.state.thursday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.thursdayfrom}</span>
                                              :
                                              ""
                                              } 
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input
                                              disabled={!this.state.thursday.availability}
                                              type="time"
                                              value={this.state.thursday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  thursday: {
                                                    ...prevState.thursday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                              {(this.state.thursday.to.length ==0) && (this.state.thursday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.thursdayto}</span> 
                                              :
                                              ""
                                                   }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Friday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.friday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              friday: {
                                                ...prevState.friday,
                                                availability: !this.state.friday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="friday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="friday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.friday.availability}
                                              type="time"
                                              value={this.state.friday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  friday: {
                                                    ...prevState.friday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                              {(this.state.friday.from.length ==0) && (this.state.friday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.fridayfrom}</span>
                                              :
                                              ""
                                              } 
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input
                                              disabled={!this.state.friday.availability}
                                              type="time"
                                              value={this.state.friday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  friday: {
                                                    ...prevState.friday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                               {(this.state.friday.to.length ==0) && (this.state.friday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.fridayto}</span> 
                                              :
                                              ""
                                               }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row form-row align-items-center mb-2">
                                <div className="col-md-3 col-lg-5">
                                  <h4 className="m-0">Saturday</h4>
                                </div>
                                <div className="col-md-9 col-lg-7">
                                  <div
                                    className="row form-row justify-content-between align-items-center">
                                    <div className="col-lg-3 col-md-4">
                                      <div className="custom-control custom-switch">
                                        <input type="checkbox"
                                          value={this.state.saturday.availability}
                                          onChange={() => {
                                            this.setState(prevState => ({
                                              saturday: {
                                                ...prevState.saturday,
                                                availability: !this.state.saturday.availability
                                              }
                                            }))
                                          }} className="custom-control-input"
                                          id="saturday" name="example" />
                                        <label className="custom-control-label"
                                          htmlFor="saturday">Availability</label>
                                      </div>
                                    </div>
                                    <div className="col-md-8 col-lg-9">
                                      <div className="row form-row time-fields">
                                        <div className="col-6">
                                          <div className="from-time">
                                            <input
                                              disabled={!this.state.saturday.availability}
                                              type="time"
                                              value={this.state.saturday.from}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  saturday: {
                                                    ...prevState.saturday,
                                                    from: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="09:00 am" />
                                               {(this.state.saturday.from.length ==0) && (this.state.saturday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.saturdayfrom}</span>
                                              :
                                              ""
                                              } 
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="to-time">
                                            <input 
                                              type="time"
                                              disabled={!this.state.saturday.availability}
                                              value={this.state.saturday.to}
                                              onChange={(e) => {
                                                this.setState(prevState => ({
                                                  saturday: {
                                                    ...prevState.saturday,
                                                    to: e.target.value
                                                  }
                                                }))
                                              }} className="form-control mr-2"
                                              placeholder="08:00 pm" />
                                              {(this.state.saturday.to.length ==0) && (this.state.saturday.availability ) ?
                                              <span style={{color:"red",marginTop:"4px"}}>{this.state.errors.saturdayto}</span> 
                                              :
                                              ""
                                                 }
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="social-form-info card-body border-top">
                          <div className="row">
                            <div className="col-md-6 col-12">
                              <button className="btn btn-default submitbtn" onClick={this.submitForm} style={{ marginRight: "30px" }}>Submit</button>
                              <button disabled={this.state.saveFormbtn} onClick={this.saveForm} className="btn btn-default submitbtn" >Save</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <ReactTooltip 	multiline={true} place="bottom" effect="solid" />
                <NotificationContainer />


              </div>
              :
              <div className="spinner">
              <Spinner animation="border" variant="danger" />
              </div>
  }
              <MobileVerification paymentModalShow={(data)=>this.paymentModalShow(data)} mobileNumber={this.state.mobile_number} sideDashboard={(name)=>{this.props.sideDashboard(name)}} formData={this.state.formData} show={this.state.show} handleShow={()=>this.handleShow()} handleClose={()=>this.handleClose()} />
              <Modal style={{marginTop:"100px"}} show={this.state.PymentModal} onHide={this.paymentModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Payment Detail</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                   {
                     this.state.proceedloader ?
                     <div style={{display:"flex",justifyContent:"center"}}>
                     <Spinner animation="border" variant="danger" />
                     </div>
                     :
                     <>
                     <div className="row">
                      <div className="col-5"> 
                     <h5>Package:</h5>
                     </div>
                     <div className="col-4"> 
                   <p style={{fontWeight:"600"}}>{this.state.selectedPlan.Name}</p>
                       </div>
                       </div>
                       <div className="row">
                      <div className="col-5"> 
                             <h5>Price:</h5>
                             </div>
                             <div className="col-4"> 
                       <p style={{fontWeight:"600"}}>{this.state.selectedPlan.Price}</p>
                       </div>
                       </div>
                       <div className="mt-2">
                   <div className="radio">
              <input type="radio" name="optradio" defaultChecked /> <label style={{marginLeft:"5px",fontWeight:"600"}}> Paypal</label>
              </div>
           </div>
                       </>
                   }
                           </Modal.Body>
                   <Modal.Footer>
                       <Button variant="secondary" onClick={this.paymentModalClose}>
                           Close
                           </Button>
                  <Button variant="primary" onClick={()=>this.paymentMethod(this.state.listingId)}>
                  Proceed to payment 
                  </Button>
                    </Modal.Footer>
                           </Modal>
 
            </div>
        
      </>
    );
  }
}

export default withRouter(AddListing);