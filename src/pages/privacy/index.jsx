import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card,Accordion } from 'react-bootstrap';
// import './question.css';
import Header from '../../Components/topHeader/index'
import Footer from '../../Components/footer/footer'
class Privacy extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    render() {

        return (
            <Fragment>
                <Header/>
                 <Container>
                <Row>
                    <Col>
                    <h2>Privacy Policy</h2>
                    <p>We have created this Privacy Statement (Policy) in order to demonstrate our firm commitment to help our users better understand what information we collect about them and what may happen to that information.</p>
                    <p>The terms "We, PartyCrack, Us" refer to PartyCrack.com or PartyCrack.com.au and the terms "You, Your" refer to a user of PartyCrack.com or PartyCrack.com.au.
In the course of our business of helping our viewers plan their parties/events, we collect certain information from you.
</p>
                    <p>In the course of registering for and availing various services we provide from time to time through our website, you may be required to give your Name, address, Email address, phone number and other business details like but not limited to photos, description, pricing, calendar availability, features, catering, opening times, capacity.</p>
                    <p>The Personal Information is used for three general purposes: to customize the content you see, to fulfil your requests for certain services, and to contact you about our services. Unless otherwise stated explicitly, this Policy applies to Personal Information as disclosed on any of the Media.
The Data we collect and use is upon your consent and none of our activities amount to breach of compliance. We value your security and privacy and are doing our best to ensure security of the data you provide to us in any manner whatsoever. We acknowledge your consent for providing such data to us for smooth execution of our services and note your acceptance to providing us with all information so collected, including Name, Gender, Email, Contact Number, Age, Location, Device Details, Browsing Information, SMS, App Install and Usage, Preferences, Intent etc.

</p>
                    <p>When you use the PartyCrack Platform, we automatically collect information, including personal information, about the services you use and how you use them. This information is necessary for the adequate fulfillment of the contract between you and us, to enable us to comply with legal obligations and for our legitimate interest in being able to provide and improve the functionalities of the PartyCrack Platform. </p>
                    
                    <p className='mb-0'>This information can be:</p>
                    <p className='mb-0'>“Geographic location information”, </p>
                    <p >“Platform use information” such as pages or content views, including time and frequency, pattern of service use, search queries, sending and receiving Booking Enquiries, or using other features of PartyCrack Platform, </p>
                    <p >Data logging and device information like log data and information about your device when you access and use our Platform (including if you clicked on links to third party applications), regardless of whether you have a PartyCrack Account and whether you are logged in,  IP address, visit times and dates, device information, browser type and version, operating system, referral source, length of visit, device event information, unique identifiers, crash data, cookie data,  </p>
                    <p >Cookies and Similar Technologies. We use cookies and other similar technologies, such as Local Shared Objects (also known as LSOs or Flash cookies), web beacons, tracking URLs either directly or through our trusted and reputable service providers. Insofar as those cookies are not strictly necessary for the provision of our Platform and Services], </p>
                    <p className='mb-0'>Information from third parties</p>
                    <p>When you link, connect or log in to your PartyCrack Account with a third party site (such as Facebook or Google+), that third party site may send us information such as your account or profile information, to the extent allowed by your privacy settings on that third party site.</p>
                     <h4></h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                   <Accordion className="privacyContainer" defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="00">
                    Using your personal information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="00">
                        <Card.Body>
                            <p>We may use, store and process your personal information to provide, understand, manage, develop and improve our Platform and Services and to create a safe and trusted environment as well as to comply with legal requirements.</p>
                             <p className='pb-0'>We may use the information we collect for the following purposes:</p>
                              <div className='px-3'>
                            <ol>
                                <li>Identification and authentication</li>
                                <li>To protect PartyCrack and the users of the Services</li>
                                <li>To customise the content and any advertising displayed on the Services and permit content on the Services (such as postings, marketing or third party advertisements) to be targeted, on an aggregate basis, to the users for whom it is most likely to be relevant
</li>
                                <li>To improve our services and develop new service features</li>
                                <li>To provide, maintain and protect our Services and to verify the identity of authorised users of the Services.
</li>
                                <li>Providing your information to a user with whom you have or had a contract facilitated by PartyCrack
</li>
                                <li>As required by law, order of a court, tribunal or regulator or if PartyCrack reasonably believes that the use or disclosure of the information is reasonably necessary for enforcement related activities
</li>
                                <li>To ensure that PartyCrack receives payment of the fees due to it
</li>
                                <li>To ensure that PartyCrack receives payment of the fees due to it
</li>
                                <li>To contact you to inform you about promotions or upcoming changes or improvements to our services
</li>
                                <li>To contact you to administer our User Agreement:
</li>
                                <li>	To conduct research</li>
                                <li>To expand our user base, including marketing communications to be targeted to potential users.
</li>
                                <li>To develop our relationships with affiliate service providers and provide or arrange internal or external verification services obtained by you via the Services
</li>
                                <li>To generate data reports on an aggregated, non-personally identifiable basis, for both internal and third party use, but subject to any applicable laws (for example, we may show advertisers or investors trends relating to the general use of PartyCrack's services); and
</li>
                                <li>Your contact information may also be used for accounting, invoicing and billing purposes, marketing purposes, by third party service providers to PartyCrack, and to respond to any enquiry you make
</li>
                                <li>	When you contact PartyCrack, we may keep a record of the communication(s) between you and PartyCrack to help resolve any issues you might have.
</li>
                                <li>	If other user(s) of the Services already have your userID (or other information identifying you), and you have chosen to upload a photo or other personal information to your PartyCrack account, we may show those user(s) that personal information; 
</li>
                           </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                      Sharing your personal information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ol className='px-3'>
                                <li>	We share your information, including personal information, where you have given us your consent and for the purposes we explain at that time. Such instances include when you authorize a third party application or website to access your PartyCrack Account or when you take part in promotional activities held by our partners or third parties.
</li>
                                <li>We may disclose your personal information to any of our members, employees, officers, insurers, professional advisers, agents, suppliers, contractors or subcontractors of PartyCrack (this means our ultimate holding company and all its subsidiaries) insofar as reasonably necessary for performance of our Services and the contract between you and ourselves and for the other purposes set out in this Policy. These related entities are covered under this Privacy Policy and may have additional confidentiality obligations and legal requirements on privacy protection.
</li>
                                <li>	We use a variety of third party service providers to help us provide services related to the PartyCrack Platform. Service providers may be located inside or outside of the Australian region. In particular, these providers are based in EEA, North America and Australia/Asia Pacific. These service providers may help us with such tasks as identity verification, checking information against public databases, carrying out background checks; fraud prevention and risk assessment; providing customer service, day to day operations, analytics, advertising and marketing; developing and improving functionalities of our Platform, carrying out maintenance and debugging. PartyCrack will need to share your information, including personal information for the purposes of ensuring fulfilment of the contract between you and ourselves. These providers have limited access to your information in order to allow them to perform these tasks on our behalf, and are contractually bound to protect and use it in compliance with this Privacy Policy and exclusively for the defined purposes for which such information was disclosed.
</li>
                                <li>When you as a User send a Booking Enquiry, we disclose to the Vendor your personal information and essential contact information (your full name, email and telephone number) and other information you agree to share. When you as a Vendor receive a Booking Enquiry, we disclose the essential contact information (your full name, email, telephone number, company name) to the User. We share this information to the extent necessary for and for the purposes of facilitating interaction between Users and Vendors, completing the Booking Enquiry and making a Booking, and to enable us to provide you our Services and Platform and to fulfil the contract between you and ourselves.
</li>
                                <li>We may share aggregated information and other anonymised information for regulatory compliance, industry, market and business analysis, demographic profiling, marketing, advertising and other business purposes.
</li>
                                <li>
                                    We may disclose your personal information to the extent we are required or permitted to do so by law or if such disclosure is reasonable necessary:

                                    <ol className='px-5'>
                                        <li>to comply with applicable law;</li>
                                        <li>in compliance with legal process, in connection with legal proceedings, criminal investigation or alleged or suspected illegal activity or any activity that may expose PartyCrack, its Members to legal liability;
</li>
                                        <li>in order to establish, exercise or defend our legal rights (including providing information to others for the purposes of fraud prevention and reducing credit risk);
</li>
                                        <li>to enforce and administer our Terms and Conditions or other agreements with Members;
</li>
                                        <li>to protect the rights, property or personal safety of PartyCrack, its employees, its Members, or members of the public;
</li>
                                        <li>to the purchaser (or prospective purchaser) of any business or asset that we are (or are contemplating) selling;
</li>
                                        <li>to the seller (or prospective seller) of any business or asset we are (or are contemplating) buying;
</li>
                                        <li>in the event of either prospective acquisition, merger, reorganisation, sale of assets, bankruptcy or insolvency event, we may sell, transfer or share some or all of our assets, including your information relating to such transaction or upon considering of such transaction (for example, as a part of due diligence). In such event, we will notify you before your personal information is transferred and is regulated by a different privacy policy;
</li>
                                        <li>	to any person who we reasonably believe may apply to a court or other competent authority for disclosure of that personal information where, in our reasonable opinion, such court or authority would be reasonably likely to order disclosure of that personal information.
</li>
                                    </ol>

                                </li>
                            </ol>                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                      Third Parties
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>The Services may contain links to third party websites including the networks of our valued affiliate service providers, advertisers, Stripe and PayPal, or make available services obtained from third parties, including verification services by third party verification providers. If you follow a link to any of these websites, for instance PayPal payment system, or use any services obtained from third party service providers via the Services that requires you to provide personal data directly to such third parties (for instance third party verification providers), note that they have their own privacy policies. If you use our Services to link to another site, or use a service obtained from a third party service provider via the Services, you will be subject to that site's or third party's terms and conditions of use, privacy policy and security statement. We strongly encourage you to view these before disclosing any of your personal information on such sites. PartyCrack does not control, and does not accept any responsibility or liability for, the privacy policy of, and use of personal information by, any party other than PartyCrack, including any user of the Site, the operators of any website to which the Site links, or third party service providers to whom you directly provide your personal information (including sensitive information if relevant) to.</p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                      Operating Internationally
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <ol className='px-3'>
                                <li>To allow PartyCrack to operate internationally, we may transfer, store, and process your information within our corporate family of companies or with service providers based in EEA, Asia Pacific/Australia and North America. 
</li>
                                <li>	By using the PartyCrack Platform, you consent and authorize us to transfer, store, and process your information for the purposes described in this Privacy Policy in Asia and possibly other countries.
</li>
                            </ol>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                      Protecting your personal information
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                           <div className='px-3'>
                               <ol>
                                   <li>We take technical and organisational precautions and we are continuously implementing and updating administrative, technical and physical security measures to prevent unauthorised access, loss, destruction, misuse or alteration of data.
</li>
                                   <li>We will store all the personal information you provide on our secure (password- and firewall-protected) servers and use information access controls and data encryption where possible.
</li>
                                   <li>If you know or have reason to believe that your PartyCrack Account credentials have been lost, stolen, misappropriated, or otherwise compromised or in case of any actual or suspected unauthorized use of your PartyCrack Account, please contact us by sending us an email to support@PartyCrack.com.au
</li>
                                   <li>	The transmission of information via the internet is not completely secure. So, whilst we will do our best to protect your personal information, we cannot guarantee the security of your data transmitted to our Platform. Any transmission is at your own risk.
</li>
                            </ol>
                        
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                      Your Rights and Choices
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p>We will allow you, at any time, to access, edit, update, restrict processing and/ or delete the personal data that we hold about you. Where we process your personal data with your consent, you may withdraw it at any time. You also have a right to object to processing based on legitimate interests or These rights may be limited in some circumstances, for example, if:</p>
                           <div className='px-3'>
                               <ol>
                                   <li>We are legally permitted or required to deny you access to, and/ or to retain, the information because we are subject to a legal requirement or have a compelling legitimate interest; or
</li>
                                   <li>You make a request that is unreasonably repetitive, requires PartyCrack to make a disproportionate effort, risks the privacy of others, or there are other valid reasons why we cannot comply.
</li>
                              </ol>	
                              <p>We need to prevent information in our systems from being accidentally or maliciously destroyed. This means that, where you delete information from our services, residual copies of that information on our active servers, as well as any corresponding information on our back-up systems, may not be immediately deleted.</p>	
                           <p>If you have concerns about how we handle your personal information or require further information, please email PartyCrack using the contact form provided on the Services. If you have unresolved complaints, you have the right to complain to a data protection authority.</p>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                  <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                     Retention
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <p>We retain your personal data for as long as is necessary with regard to the purposes for which it was collected or lawfully further processed, or for as long as may be necessary.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                      Control of Your Password
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <p>You are responsible for all actions taken with your login information and password, including fees. Therefore we do not recommend that you disclose your account password or login information to any third parties. If you lose control of your password, you may lose substantial control over your personally identifiable information and may be subject to legally binding actions taken on your behalf. Therefore, if your password has been compromised for any reason, you should immediately change your password.</p>
                         </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                    Amendments
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                        <Card.Body>
                           <div className='px-3'>
                               <ol>
                                  <li>PartyCrack reserves a right to update this Privacy Policy from time to time. If we make changes to this Privacy Policy, we will post the revised Privacy Policy on our website and update the “Last Updated” date.
</li>
                                  <li>You should check this page occasionally to ensure you agree with any changes to this policy.
</li>
                                  <li>We may also notify you of changes to this Privacy Policy in advance before they become effective by email or through the private messaging system on our website.
</li>
                                  <li>If you do not wish to agree to the changed Privacy Policy of our website, then it will not be possible for us to provide you our Platform and you will need to delete your PartyCrack account. If you do not delete your Account before the date the revised Privacy Policy becomes effective, your continued access to or use of the PartyCrack Platform will be subject to the terms of the revised Privacy Policy. 
</li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                    Cookies and Similar Technologies
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            <p>PartyCrack uses cookies and similar tracking technologies for a number of purposes including to access your information when you sign in, keep track of your preferences, direct specific content to you, report on PartyCrack's user base, and to improve PartyCrack's services. We also use cookies or anonymous identifiers when you interact with our affiliate service providers (for example, when you integrate your PartyCrack account with your Facebook profile) and as further described below.</p>
                             <p className='mb-0'>We use the following types of cookies and similar technologies:</p>
                             <p className='mb-0'>Strictly Necessary Cookies</p>
                             <p>We use cookies and similar technologies that are necessary to the operation of our Services. This includes technologies that allow you access to our website, services, mobile app or that are required to identify irregular site behaviour, prevent fraudulent activity and improve security, or that allow you to make use of our functions such as saved search or similar functions;</p>
                             <p>If you change the settings on your internet browser to block or restrict cookies (including cookies associated with PartyCrack's services), or to indicate when a cookie is being set by PartyCrack, the PartyCrack Services may not work as intended. You should remember that, while you may still be able to use the Services if your cookies are disabled, our services may not function properly on your device and you may not be able to take advantage of certain PartyCrack features.</p>
                             <p className='mb-0'>Functionality Cookies</p>
                             <p>We use cookies and similar technologies that allow us to offer you enhanced functionality when accessing or using our Services. This may include identifying you when you sign into our website, keeping you signed in as you browse or keeping track of your specified preferences, interests, or past items viewed so that we may enhance the presentation of content on our website and mobile app.</p>
                             <p className='mb-0'>Performance Analytics Cookies</p>
                             <p>We use cookies and similar technologies to assess the performance of our Services. We use this information to analyse and help us understand how you and other visitors use our Services so we can improve the content or layout of our Services. We also use this information to track the number of our visitors and analyse the popularity of the features we offer.</p>
                             <p className='mb-0'>Advertising Cookies</p>
                             <p>We may use first-party or third-party cookies and similar technologies to deliver content, including ads relevant to your interests. This includes using technologies to understand the usefulness to you of the advertisements and content that has been delivered to you, such as whether you have clicked on an advertisement.</p>
                             <p>You may reject first-party advertising cookies and similar technologies through your browser settings. </p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                     <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                   Contact Us
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="9">
                        <Card.Body>
                            <p>If you have any suggestions, questions or comments regarding our Privacy Policy, please email us at support@partycrack.com.au</p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
           

            </Accordion>
                </Col>
                </Row>
            </Container> 
            <br></br>
            <br></br>
            <br></br>
             <Footer/>
        </Fragment>
        );
    }
}

export default Privacy;