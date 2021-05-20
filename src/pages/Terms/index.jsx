import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card,Accordion } from 'react-bootstrap';
// import './question.css';
import Header from '../../Components/topHeader/index'
import Footer from '../../Components/footer/footer'
class Terms extends Component {
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
                    <h2>TERMS AND CONDITION </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                   <Accordion className="privacyContainer" defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="00">
                      1.	Introduction
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="00">
                        <Card.Body>
                              <div className='px-3'>
                               
                            <ol>
                                <li>	These Terms and Conditions (referred to as “Terms” below), as may be amended from time to time, set out your (referred to as “you” or “Venue” or” “User” or “Vendor” below) rights and obligations and those of PartyCrack (referred to as “PartyCrack”, “us”, “we” or “our” below) in relation to access to and use of our online platform available either through our website www.partycrack.com or www.partycrack.com.au (referred as “website” or “site” below), mobile application or our Services (defined below) provided either online, by email, by telephone or through any other means (collectively referred as “Platform”). By using the PartyCrack Services, whether as a "Visitor" (meaning you simply browse the PartyCrack website) or as a "User" (meaning you have registered with and/or submitted content to the PartyCrack website either as an individual or as a company), you agree to be bound by this Agreement and the PartyCrack Privacy Policy. This Agreement includes your rights, obligations and restrictions regarding your use of the PartyCrack Services, please read it carefully. User (and “You”) may refer to both Customers as well as Vendors for the purpose of this Agreement. The term “Customer” shall refer to individuals or Parties undertaking PartyCrack Services through the PartyCrack platform and the term “Vendor” refers to the individual or entities listed on the PartyCrack platform who provide services or venues independently to the customers. If you do not agree with the Terms of this Agreement, you should leave the PartyCrack Website and discontinue use of the PartyCrack Services immediately. If you wish to become a User, submit content, video or images, communicate with other Users and generally make use of the PartyCrack Services, you must read this Agreement and indicate your acceptance during the content submission process. By using the PartyCrack services or by doing any of the above, you are complying with all our terms and conditions and clauses mentioned hereinafter.</li>
                                <li>	We urge you to think before you upload, submit or embed content. This agreement permits you to upload to, submit to or embed on the PartyCrack services only photos or other content that you own the copyright to or otherwise have the right to publish. By uploading, submitting or embedding photos or other content that you do not own the copyright to or do not otherwise have the right to publish, you may subject yourself to legal liability. It is your responsibility to ensure you have adequate rights to publish to the PartyCrack services all photos and other content you post and PartyCrack takes no liability of the same whatsoever. </li>
                            </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                       2.	Term
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body><p>This Agreement shall remain in full force and effect while you use the PartyCrack Services or are a User/ Vendor on the website. PartyCrack may terminate your use of the PartyCrack Website or the PartyCrack Services, in its sole discretion, for any reason or no reason whatsoever, at any time, without warning or notice to you. Upon such termination of agreement, the User shall be stopped from using PartyCrack Services and all content shall remain to be the Property of PartyCrack.</p></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                       3.	Eligibility
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body><p>Use of the PartyCrack Services is void where prohibited. By registering, you (i) represent and warrant that you have the right, authority, and capacity to enter into and to fully abide by all of the terms and conditions of this Agreement, as far as age, jurisdiction, laws of land, etc. are concerned and (ii) agree to comply with all applicable domestic and international laws, statutes, ordinances and regulations regarding your use of the PartyCrack Services. You must be at least 18 years old to use our Platform. By accessing or using our Platform, you represent and warrant that you are at least 18 years old.</p>
                            <p>Failure to use our Platform in accordance with these Terms(as defined throughout this document) may subject you to civil and/or criminal liabilities and/or penalties and/or ban from our Platform.</p>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                       4. Key Terms
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>“Booking” – a booking of any venue/service made on any terms agreed between User and Venue following a Booking Enquiry.</p>

                           <p> “Booking Enquiry” – a message sent to you through our Platform by a User directly outside our platform or by a PartyCrack Representative on behalf of a User in order to ask for a quote, describe any preferences, ask a question about or show interest in a venue or service made available for Booking.</p>

                            <p>"Content" - all works and materials (including without limitation text, graphics, images, audio material, video material, audio-visual material, scripts, software and files)</p>

                            <p>“Vendor” – A person or an entity who provides services or a person, sub-lessor or a duly authorised representative of a legal entity who is in a lawful control of a property and has listed the same on our Platform (which shall include, but not be limited to, catering, decorating, music, cleaning, barista, DJ, event planners, Restaurant, Banquet halls, hotels, clubs etc)</p>

                            <p>“Platform” – our website, mobile application and Services through which Users (defined below) may learn about Venues or services and make Bookings with the Venues or Vendors that have created Profiles and published their venues or services on our Platform for the purposes of making them available for Bookings. </p>

                            <p>“Profile” – web pages describing details of a venue and services on our Platform.</p>

                           <p> “PartyCrack account” - an account created following a registration with our Platform and that allows to create Profiles, publish Venues or services and receive Booking Enquiries.</p>

                            <p>“PartyCrack Representative” - any employee or Vendor to PartyCrack Pty LTD.</p>

                           <p> “User” - a person or a legal entity who uses our platform for searching and contacting registered vendors on our platform.</p>

                            <p>“Your Content” – Content that you submit to our Platform for storage or publication on, processing by, or transmission via our Platform.</p>

                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                       5.	Services
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                        <Card.Body>
                           <div className='px-3'>
 <ol>
                                <li>	PartyCrack provides an online Platform that introduces Users who wish to learn about Venues or services and make Bookings enquiries with the Vendors that have created Profiles and published their venues or services on our Platform for the purposes of making them available for Bookings (referred to as “Services”). PartyCrack may provide Services either online, by email, by telephone or through any other means.
                            </li>
                                <li>	Users make Bookings directly with Vendors. PartyCrack acts only as an intermediary to help advertise Venues or services from Vendors, to refer Users to Vendors and to increase your traffic. Any contract, arrangement or agreement is between you and a User. PartyCrack is not a party to nor liable under any contract, arrangement or agreement entered into between Vendor and User, nor is PartyCrack a contracting agent or insurer.
                           </li>
                                <li>	You(Vendors) agree that your contact details will be published on our platform and users will be able to reach out to you via any channel (not limited to phone call, sms, Whatsapp, Facetime) etc at any time and we(Platform) will have no control over that. You agree that PartyCrack can publish all your contact details on their platform. 
                           </li>
                                <li>	Users accept and acknowledge that they are only visiting PartyCrack platform to obtain information about a Vendor and that the book for the same is done individually, separate from PartyCrack and hence, they shall not hold PartyCrack liable in any manner for any issues that may arise in the future, related to such Vendor or such booking. That the Vendors accepts and agrees that all transactions occur between the Users and PartyCrack is not involved in the same in any manner.
                           </li>
                                <li>	Through our Platform, a User can view details and learn about Venues or services offered by Vendors and send you Booking Enquiries which you agree to receive.
                            </li>
                                <li>	Users can find Venues or vendors by browsing Venues/vendors who registered with us and published their Profiles. Alternatively, a User may fill in the “Help me with venues/vendor” form or contact us by any other means, so that a PartyCrack Representative will select or suggest a suitable Venue or vendor for a User.
                           </li>
                                <li>	You agree that you will respond to Booking Enquiries from Users or PartyCrack Representatives either by replying to or rejecting Booking Enquiries. When responding to any Booking Enquiry you undertake to do so promptly and accurately. Errors in responding to Booking Enquiries will be treated to be in favour of a User.
                           </li>
                                <li>You agree that PartyCrack Representative has a right to contact you about Booking Enquiries you received and you agree and undertake to provide an accurate and truthful information.
                          </li>
                                <li>PartyCrack may contact a User at any time after you have replied to a Booking Enquiry to ask about the status of a Booking Enquiry made through our Platform.
                            </li>
                                <li>	PartyCrack provides an opportunity to and may invite Users to leave feedback about a Venue or a service. Feedback will not be altered by PartyCrack and will be published on our website as it was submitted to us once a PartyCrack Representative has checked it for obscenities.
</li>
                            </ol>
                        
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                       6.	Your Content: licence
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                        <Card.Body>
                           <div className='px-3'>
                               <ol>
                                   <li>PartyCrack does not claim ownership of your Content. However, you grant to us a worldwide, irrevocable, non-exclusive, perpetual, royalty-free licence to:
                                       <ol className='px-5'>
                                           <li>use, reproduce, store, adapt, publish, translate and distribute your Content in any existing or future media;</li>
                                           <li>	reproduce, store and publish your Content on and in relation to this Platform and any successor Platform</li>
                                           <li>reproduce, store and, with your specific consent, publish your Content on and in relation to this website;</li>
                                           <li>	manage, edit, adapt, and improve your Content you created on our Platform;</li>
                                           <li>use your Content that you provided to us or that you made publicly available for our own marketing, advertising and commercial purposes.</li>
                                       </ol>
                                   </li>
                                   <li>	You grant to us the right to sub-license the rights licensed under this Section.</li>
                                   <li>You grant to us the right to bring an action for infringement of the rights licensed under Section 6.1.</li>
                                   <li>	4.	You hereby waive all your moral rights in your Content to the maximum extent permitted by applicable law; and you warrant and represent that all other moral rights in your Content have been waived to the maximum extent permitted by applicable law.</li>
                                   <li>Without prejudice to our other rights under these Terms, if you breach any provision of these Terms in any way, or if we reasonably suspect that you have breached these Terms in any way, we may delete, unpublish or edit any or all of your Content.</li>
                               </ol>	
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                  <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                       7.	Prohibited Content
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                        <Card.Body>
                            <p>PartyCrack reserves the right, in its sole and absolute discretion, to determine whether User Content is appropriate; and to remove any User Content, without notice or liability to you, which it determines to be inappropriate. Without limiting the generality of the foregoing, the following is a partial list of the types of User Content that PartyCrack deems to be inappropriate:</p>
                           <div className='px-3'>
                               <ol>
                                   <li>Content that criticizes a business or individual beyond that of merely offering an opinion</li>
                                   <li>Content that harasses or advocates harassment of another person</li>
                                   <li>	Content that exploits people in a sexual or violent manner</li>
                                   <li>Content that contains nudity, violence, or offensive subject matter or contains a link to an adult website</li>
                                   <li>Content that includes racially, ethically, or otherwise objectionable language</li>
                                   <li>	Content that is libellous, defamatory, or otherwise tortious language</li>
                                   <li>Content that solicits personal information from anyone under 18</li>
                                   <li>Content that promotes information that you know is false or misleading or promotes illegal activities or conduct that is abusive, threatening, obscene, defamatory or libellous</li>
                                   <li>Content that promotes an illegal or unauthorized copy of another person’s copyrighted work, such as providing pirated computer programs or links to them, providing information to circumvent manufacture-installed copy-protect devices, or providing pirated music or links to pirated music files</li>
                                   <li>Content that involves the transmission of "junk mail," "chain letters," or unsolicited mass mailing, instant messaging, "spimming," or "spamming"</li>
                                   <li>Content that contains restricted or password only access pages or hidden pages or images (those not linked to or from another accessible page</li>
                                   <li>Content that furthers or promotes any criminal activity or enterprise or provides instructional information about illegal activities including, but not limited to making or buying illegal weapons, violating someone’s privacy, or providing or creating computer viruses</li>
                                   <li>Content that solicits passwords or personal identifying information for commercial or unlawful purposes from other Users</li>
                                   <li>Content that is owned, created or belongs to a third party and the entity posting/publishing such content has no authority to do so</li>
                                   <li>Content that involves commercial activities and/or sales without our prior written consent such as contests, sweepstakes, barter, advertising, or pyramid schemes</li>
                                   <li>PartyCrackhas no obligation to search for, scan, check, review, modify or remove any Content that breaches the letter or spirit of the Terms. However, if PartyCrack finds such Content in breach of these Terms or law, we may modify or remove such Content.</li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                      8.	Prohibited Activity
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                        <Card.Body>
                            <p>You expressly agree that you are prohibited from engaging in, and will not engage in, the following prohibited activities in connection with your use of the PartyCrack Services-</p>
                                <div className='px-3'>
                               <ol>
                                   <li>copying, modifying, translating, publishing, broadcasting, transmitting, licensing, sublicensing, assigning, distributing, performing, publicly displaying, or selling any Third Party Content or PartyCrack Content appearing on or through the PartyCrack Services</li>
                                   <li>	criminal or tortious activity, including child pornography, fraud, trafficking in obscene material, drug dealing, gambling, harassment, stalking, spamming, spimming, sending of viruses or other harmful files, copyright infringement, patent infringement, or theft of trade secrets</li>
                                   <li>covering or obscuring the banner advertisements on your personal profile page, or any PartyCrack page via HTML/CSS or any other means</li>
                                   <li>any automated use of the system, such as using scripts to add friends or send comments or messages</li>
                                   <li>interfering with, disrupting, or creating an undue burden on the PartyCrack Services or the networks or services connected to the PartyCrack Services</li>
                                   <li>attempting to impersonate another User, person, or representative of PartyCrack</li>
                                   <li>using the account, username, or password of another User at any time or disclosing your password to any third party or permitting any third party to access your account</li>
                                   <li>	selling or otherwise transferring your profile, without our permission</li>
                                   <li>using any information obtained from the PartyCrack Services in order to harass, abuse, or harm another person</li>
                                   <li>	displaying an advertisement on your profile, or accepting payment or anything of value from a third person in exchange for your performing any commercial activity on or through the PartyCrack Services on behalf of that person, such as placing commercial content on your profile, posting blogs or bulletins with a commercial purpose, or sending private messages with a commercial purpose</li>
                                   <li>	using the PartyCrack Services in a manner inconsistent with any and all applicable laws and regulations</li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                     9.	Acceptable use
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                        <Card.Body>
                            <p>You expressly agree that you are prohibited from engaging in, and will not engage in, the following prohibited activities in connection with your use of the PartyCrack Services-</p>
                                <div className='px-3'>
                               <ol>
                                   <li>You must not:
                                       <ol className='px-5'>
                                           <li>use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website;</li>
                                           <li>	use our Platform in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity;</li>
                                           <li>use our website or mobile application to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software;</li>
                                           <li>conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent;</li>
                                           <li>access or otherwise interact with our website using any robot, spider or other automated means;</li>
                                           <li>	violate the directives set out in the robots.txt file for our website; or</li>
                                           <li>use data collected from our website or mobile application for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing).</li>
                                       </ol>
                                   </li>
                                   <li>	You must not use data collected from our website to contact individuals, companies or other persons or entities.</li>
                                   <li>You must ensure that all the information you supply to us through our Platform, or in relation to our website, is true, accurate, current, complete and non-misleading.</li>
                                   <li>	Unless you own or control the relevant rights in the material, you must not:
                                        <ol className='px-5'>
                                            <li>republish material from our website (including republication on another website);</li>
                                            <li>sell, rent or sub-license material from our website;</li>
                                            <li>reproduce, duplicate, copy or otherwise exploit material from our website for a commercial purpose; or</li>
                                            <li>redistribute material from our website.</li>
                                        </ol>
                                   </li>
                                   <li>Notwithstanding Section 9.4, you may redistribute our newsletter in print and electronic form to any person.</li>
                                   <li>We reserve the right to restrict access to areas of our website, or indeed our whole Platform, at our discretion; you must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our Platform.</li>
                                   <li>PartyCrack reserves a right, in our sole discretion, at any time
                                        <ol className='px-5'>
                                            <li>to rectify any errors or oversights in any portion of our Platform;</li>
                                            <li>to make any changes or improvements to our Platform’s features, components, Content and functionality;</li>
                                            <li>edit or delete any document or Content on our Platform.</li>
                                        </ol>
                                   </li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                    10.	Application
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="8">
                        <Card.Body>
                            <p>Subject to these Terms, PartyCrackgrants Venues and Users a non-exclusive, non-transferable, revocable license to download and use our application, in object code form only, on compatible mobile devices, solely to support Venue’s and User’s permitted use of our Platform and Services. All relevant terms and conditions and any usage rules set out by the app store you download our mobile application from will apply.</p>
                             
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                     <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                    11.	Limited warranties
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="9">
                        <Card.Body>
                            <p>You expressly agree that you are prohibited from engaging in, and will not engage in, the following prohibited activities in connection with your use of the PartyCrack Services-</p>
                                <div className='px-3'>
                               <ol>
                                   <li>Although we will do our best to preserve safety and smooth functioning of our Platform, we do not guarantee, warrant or represent:
                                       <ol className='px-5'>
                                           <li>the accuracy, completeness or timeliness of the information published and made available through on our website, application or Services;</li>
                                           <li>that the website, application or any our Service will remain available;</li>
                                           <li>that access to or operation of our Platform will be free from interruption or interference;</li>
                                           <li>that our Platform will be free from errors, viruses or any other harmful components, or that such defect will be fixed.</li>
                                           <li>Reviews, comments, Venue and services description and any other information or material posted through our Platform is not intended as advice and should not be relied upon. PartyCrack cannot and does not guarantee and is not responsible for truthfulness or accuracy of the Content the Venues or Users submit to our Platform or provide to us. PartyCrack excludes all responsibility and liability related to any Venue or User Content to the maximum extent allowed by applicable law. All Bookings will be made and any content will be used at your own risk.</li>
                                      </ol>	
                                   </li>
                                  <li>We reserve the right to discontinue or alter any or all of our Services, and to stop publishing our website or our mobile application, at any time in our sole discretion without notice or explanation; and save to the extent that these Terms expressly provide otherwise, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any our Services, or if we stop publishing the website our mobile application.</li>
                                  <li>To the maximum extent permitted by applicable law, we exclude all representations, warranties, terms and conditions, express or implied, in relation to the subject matter of these Terms, our Platform and the use of our Platform.</li>
                                  <li>Each of us acknowledge that in entering into contract under these Terms, neither you nor PartyCrack will rely on any representation, statement, assurance or warranty (“Representation”) of any person, unless such Representation is expressly laid out in these Terms. The only rights and remedies available to us arising out of or in connection with a Representation shall be for breach of contract the terms of which are provided in these Terms and Conditions.</li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
            <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="10">
                     12.	Limitations and exclusions of liability
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="10">
                        <Card.Body>
                            <p>You expressly agree that you are prohibited from engaging in, and will not engage in, the following prohibited activities in connection with your use of the PartyCrack Services-</p>
                                <div className='px-3'>
                               <ol>
                                   <li>PartyCrack will not be responsible or liable for any damage or losses which you sustain as a result of any Booking Enquiry made through our Platform including without limitation any business interruption, loss of business, income, revenue, profits, contracts, commercial opportunities, anticipated savings or any other benefit, data, information, office time or waste of resources however arising and whether foreseeable or not and whether caused by tort (including negligence), breach of contract, legal action or otherwise.</li>
                                   <li> Neither PartyCrack including its parent company Cinmaya Solutions Pty Ltd nor our affiliates, parents, subsidiaries, directors, employees, officers or agents shall be liable, including without limitation, for: 
                                       <ol className='px-5'>
                                           <li>any business losses, including (without limitation) business interruption, loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities, goodwill or any other benefit, reputation, claim, office time or waste of resources;</li>
                                           <li>any loss or corruption of any data, database or software;</li>
                                           <li>any damage to your device which is used to access or use our Platform;</li>
                                           <li>costs of substitute products or services;</li>
                                           <li>any special, indirect, incidental, exemplary, consequential or punitive loss or damage;</li>
                                           <li>service interruption or system failure;</li>
                                           <li>damage to property, personal injury or bodily injury, death or emotional distress</li>
                                       </ol>
                                   </li>
                                   <li>whether foreseeable or not, whether PartyCrack has informed about the possibility of such damage or not, whether caused by tort (including negligence), breach of contract, legal action or otherwise, arising directly or indirectly out of or in connection with, without limitation:
                                        <ol className='px-5'>
                                          <li>these Terms; or</li>
                                          <li>access or use or inability to access or use or a delay of our website, mobile application, Services or Content; or</li>
                                          <li>any communication or interactions with Users or Venues registered with us or other persons with whom you communicate or interact as a result of your use of our Platform; or</li>
                                          <li>creating or publishing your Profile, or sending, receiving and responding to Booking Enquiries; or</li>
                                          <li>any interruptions in our Platform or Services; or</li>
                                          <li>viruses or any other harmful components picked up by accessing or using our website or mobile application or any site, application, tools or services that are linked to our website or mobile application; or</li>
                                          <li>any defects, errors, inaccuracies, hitches, malfunctions of any kind in our website, mobile application, content, or graphics; or</li>
                                          <li>any inaccuracy in information or content made available through our Platform; or</li>
                                          <li>	suspension, termination, ban or other action taken with respect to your PartyCrack account; or</li>
                                          <li>duration or appearance of your Profile in the search results; or</li>
                                          <li>your need to revise, adjust, amend or update your content, policies, business standards or conduct or your inability to do business as a result of any amendments made to these Terms or our policies, subject to Section 19.</li>
                                        </ol>
                                   </li>
                                   <li>You are fully responsible for any relationship with a User after you replied to a Booking Enquiry, including but not limited to making or changing a Booking, Booking cancellations, any claims, refunds, compensation or reimbursement.</li>
                                   <li>	As PartyCrack is not a party to a contract between you and a User, all claims a User may have in case he or she is not satisfied with a booked Venue or your service, whether in whole or in part, will be made against you.</li>
                                   <li>PartyCrack has no control over any conduct of Users and disclaims all liability in this regard to the maximum extent permitted by applicable law.</li>
                                   <li>PartyCrack cannot and does not guarantee and is not responsible for truthfulness or accuracy of the Users’ identities or the Content Users submit to our Platform or provide to us.</li>
                                   <li>PartyCrack does not check, monitor or control creditworthiness of Users.</li>
                                   <li>	PartyCrack are not responsible for mediation or the enforcement of any obligations arising from a contract between you and User.</li>
                                   <li>Any review that a User posts on our website is a subjective opinion of a relevant individual only. Although we will use reasonable endeavours to monitor the Content of these reviews, neither PartyCrack nor our affiliates, parent, subsidiaries, directors, employees, officers or agents shall be responsible for content, objectivity, reliability or the truthfulness of such reviews. If you have any concerns regarding the content of any review, please contact</li>
                                   <li>Nothing in these Terms will 
                                        <ol className='px-5'>
                                            <li>limit or exclude any liability for death or personal injury resulting from negligence;</li>
                                            <li>limit or exclude any liability for fraud or fraudulent misrepresentation;</li>
                                            <li>limit any liabilities in any way that is not permitted under applicable law; or</li>
                                            <li>exclude any liabilities that may not be excluded under applicable law.</li>
                                         </ol>
                                   </li>
                                   <li>The limitations and exclusions of liability set out in this Section 12 and elsewhere in these Terms are subject to Section 12.11; and govern all liabilities arising under these Terms or relating to the subject matter of these Terms, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty.</li>
                                   <li>You accept that we have an interest in limiting the personal liability of our employees, officers and directors and, having regard to that interest, you acknowledge that we are a limited liability entity; you agree that you will not bring any claim personally against our employees, officers and directors in respect of any losses you suffer in connection with the Platform or these Terms (this will not, of course, limit or exclude the liability of the limited liability entity itself for the acts and omissions of our officers and employees).</li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
              <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="11">
                     13.	Breaches of these Terms and Conditions
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="11">
                        <Card.Body>
                            <div className='px-3'>
                               <ol>
                                   <li>1.	Without prejudice to our other rights under these Terms, if you breach these Terms in any way, or if we reasonably suspect that you have breached these Terms in any way, we may:
                                       <ol className='px-5'>
                                           <li>send you one or more formal warnings;</li>
                                           <li>temporarily suspend your access to our Platform;</li>
                                           <li>permanently prohibit you from accessing our Platform;</li>
                                           <li>block computers using your IP address from accessing our website;</li>
                                           <li>using your account, block your access and use of our application;</li>
                                           <li>contact any or all your internet Vendors and request that they block your access to our Platform;</li>
                                           <li>	commence legal action against you, whether for breach of contract or otherwise; and/or</li>
                                           <li>suspend or delete your account on our Platform.</li>
                                       </ol>
                                   </li>
                                   <li>Where we suspend or prohibit or block your access to our website or a part of our website, mobile application or Services, you must not take any action to circumvent such suspension or prohibition or blocking (including without limitation creating and/or using a different account).</li>
                                   
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
           <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="12">
                    14.	Additional Services
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="12">
                        <Card.Body>
                            <div className='px-3'>
                               <ol>
                                   <li>In addition to our Services described in Section 5 & 6 of these Terms, PartyCrack may in its absolute discretion offer a range of Additional Services to Vendors.</li>
                                   <li>Additional Services shall be governed by these Terms or any additional provisions as may be published on our website or communicated through a PartyCrack Representative, in each case as may be varied from time to time.
</li>
                                   <li>Additional Marketing Services may include but not limited to any of the following: advice or consultation with a PartyCrack Representative on creating Content and Profiles that are inviting to Users; photography packages; promotion; positioning your Profile(s) on our website pages so as to make them easily noticeable for Users; direct marketing on your behalf by PartyCrack Representative; social media marketing and campaigns; newsletters; content marketing; conversion rate optimisation; search engine optimisation; website analytics; newsletters and mailshots; creation and distribution of marketing literature or social media posts; email marketing; live events; print media; consultation on pay per click marketing campaigns and the organisation of promotional events specific to a Venue.</li>
                                   <li>	You hereby agree that when providing Additional Marketing Services, PartyCrack may from time to time promote your Venue(s) or services by creating new or sharing existing Content (including photos of your Venue(s) or services through any social media channels or collateral in printed or digital format and may make such representations on your behalf as it shall deem appropriate.
</li>
                                   <li>PartyCrack preserves the right of full editorial control over all the content produced and distributed as part of Additional Marketing Services and may make changes to the content at any time. You acknowledge and agree that you shall have no claim in connection with production or distribution of content as part of Additional Marketing Services against PartyCrack.
</li>
                                   <li>	PartyCrack offers no representations, warranties or guarantees as to the effectiveness of the Additional Services for the purpose of generating Booking Enquiries or Bookings.
</li>
                                   <li>You hereby agree that in accepting these Terms, you have not relied on any written or oral representation of any kind other than those expressly set out in these Terms. If you relied on any written or oral representation of any kind that was not expressly set out in these Terms, you agree and acknowledge that you will not have any remedy in respect of such representation and that in either case PartyCrack will not in any circumstance have any liability otherwise than pursuant to provisions expressly set out in these Terms.
</li>
                                   <li>To the extent not prohibited by applicable law, PartyCrack shall not in any circumstances be liable for any direct, indirect, incidental, special, immediate, consequential, punitive, or exemplary damages or losses, including but not limited to, special damage (even if PartyCrack have been advised or were aware of the possibility of such damages), loss of profits, revenue, anticipated savings, goodwill, business opportunity or other economic advantage or loss, damage or corruption of data, however caused and whether arisen in contract, tort (including negligence) or otherwise, arising out of, or related to the actions of PartyCrack in providing Additional Services.
</li>
                                   <li>Without prejudice to Sections 11 and 12 of these Terms, if PartyCrack actions when providing any Additional Services to you cause you to sustain loss or damage to your tangible property or direct financial loss not falling within the types defined in Section 15.8, the total liability of PartyCrack, whether based on contract, tort (including negligence) or other grounds, in any circumstance shall not exceed the Total Payment you have paid or owe to PartyCrack for the relevant Additional Services.
</li>
                                   <li>PartyCrack reserves an absolute right to terminate provision of Additional Services without full or partial refund if you breach any provisions of these Terms
</li>
                               </ol>
                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="13">
                    15.	Third party websites
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="13">
                        <Card.Body>
                            <div className='px-3'>
                               <ol>
                                   <li>Our website and mobile application include hyperlinks to other websites owned and operated by third parties; such hyperlinks are not recommendations or endorsements.                                   </li>
                                   <li>	We have no control over third party websites and their contents, and we accept no responsibility or liability for them or for any loss or damage that may arise from your use of them.</li>
                                   <li>Our Platform implements services of Google Maps/Earth as well as Google Maps API(s). Your use of Google Maps/Earth is determined by Google Maps/Earth Additional Terms of Service.</li>
                                   
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="14">
                   16.	Indemnification
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="14">
                        <Card.Body>
                            <div className='px-3'>
                               <ol>
                                   <li>You agree to indemnify and hold PartyCrack and its parent company Cinmaya Solutions, its affiliates, parents, subsidiaries, partners, employees, directors, officers or agents harmless from and against any claims, liabilities, losses, damages, expenses and costs, including but not limited to reasonable legal fees, arising out of or in connection with any breach by you of these Terms or use of our Platform and our Services.</li>
                                   
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="15">
                   17.	Notices
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="15">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>The notices, requests and other communication shall be made by PartyCrack in writing.</li> 
                                   <li>All notices shall be given by PartyCrack either by electronic mail, by post or fax using the contact details you have provided to us or by posting a notice to our website.
</li> 
                                   <li>All notices shall be effective immediately upon being posted on our website.
</li> 
                                   <li>All notices shall be effective upon (i) receipt of the notice or (ii) 1 business day after an email or fax was transmitted or 7 (five) days after mailing within the Australia, whichever occurs earlier.
	</li> 
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="16">
                  18.	No waiver
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="16">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                  <li>	Unless expressly notified in writing and signed by a duly authorised PartyCrack Representative, our failure to enforce any our right or your strict performance of any provision of these Terms will not constitute a waiver of our right to enforce such provision or our right in future.</li> 
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="17">
                 19.	Amendments
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="17">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>We may revise these Terms from time to time to incorporate variations such as legislative, regulatory or technological developments, new functionalities or features of our Platform as well as changes in our Service or other relevant changes.</li>
                                   <li>The revised Terms shall apply to the use of our Platform and Services from the date of publication of the revised Terms on the website. You should check this page occasionally to ensure you agree with any changes to the Terms. We may also notify you of changes to these Terms by email or through the private messaging system on our website.</li>
                                   <li>By continuing to use our Platform you agree to be bound by the latest modified Terms. In case any changes to our Terms or Policies are required by applicable law, they will apply to Profiles you have already published. If you do not wish to agree to the changed Terms, then it will not be possible for us to provide you our Platform and you will need to deactivate your PartyCrack account.</li>
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="18">
                20.	Severability
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="18">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>If a provision of a contract under these Terms and Conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.</li>
                                   <li>If any unlawful and/or unenforceable provision of a contract under these Terms and Conditions would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</li>
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="19">
               21.	Third party rights
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="19">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 

                                   <li>A contract under these Terms and Conditions is for our benefit and your benefit, and is not intended to benefit or be enforceable by any third party.</li>
                                   <li>The exercise of the parties' rights under a contract under these Terms and Conditions is not subject to the consent of any third party.</li>
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="20">
              22.	Entire agreement
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="20">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                    <li>Subject to above sections, these Terms and Conditions, together with our Privacy and Cookies Policy, shall constitute the entire agreement between you and us in relation to your use of our Platform and Services and shall supersede all previous agreements between you and us in relation to your use of our Platform and our Services.</li>
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="21">
             23.	Governing law and jurisdiction
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="21">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>A contract under these Terms and Conditions shall be governed by and construed in accordance with Australian law.
</li>
                                   <li>Any disputes relating to a contract under these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts of Melbourne.
</li>
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="22">
            24.	Termination, cancellation and suspension of account
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="22">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>We may
                                         <ol className='px-5'> 
                                             <li>suspend your account;</li>
                                             <li>cancel your account; and/or</li>
                                             <li>edit your account details,</li>
                                             <li>at any time in our sole discretion without notice or explanation.</li>
                                            </ol>	
                                   </li>
                                   <li>You may temporary make your Profiles hidden from public view or cancel your PartyCrack account at any time.</li>
                                   <li>Without prejudice to Sections 24.1 and 24.2 above, termination, cancellation or suspension of your PartyCrack account or and temporary hiding your Profile from public view does not discharge you from any obligations you have undertaken under the contract governed by these Terms.</li>
                               </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="23">
           25.	Report Abuse and Illegal Activity
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="23">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>If you noticed any activity violating any provision of these Terms while using our Platform, please contact us support@partycrack.com.au
                                   </li>
                                  </ol>	

                           </div>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="24">
          26.	Our details
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="24">
                        <Card.Body>
                            <div className='px-3'>
                               <ol> 
                                   <li>The website www.PartyCrack.com as well as a mobile app are operated by Cinmaya Solutions Pty Ltd , registered in Australia ACN 646182151.
  </li>
  <li>	You can contact us by emailing at: support@PartyCrack.com.au</li>
                                  </ol>
	

                           </div>
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

export default Terms;