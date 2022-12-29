import React from 'react';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';

function ContactUs() {

    return (
        <>
            <Template>
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb />
                    </div>
                    <div className="col">
                        <div className="row p-5 flex-column flex-md-row">
                            <div className="col-md-7 mb-3 mb-md-0 text-center">
                                <div className="p-3 p-md-5 bg-dark h-100">
                                    <h2 className="page-header text-white d-inline-flex">CONTACT US</h2>
                                    <div className="d-flex flex-wrap p-4 justify-content-center">
                                        <div className="p-3 mb-3 bg-white text-center">
                                            <p className="m-0">
                                                If you want to ask any questions related to our products,
                                                services or shipping details, please contact us by using the form on the right.
                                                We will be happy to assist you in a timely manner.
                                            </p>
                                        </div>
                                        <p className="text-white w-100">Our Location:</p>
                                        <iframe title="iframe-location" className="img-fluid"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13225.92580723176!2d-118.4570477!3d34.0315191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb138a2986f3%3A0xbc1ae96c56b867c8!2sLCS%20Studios!5e0!3m2!1sen!2sph!4v1573278214863!5m2!1sen!2sph"
                                            width="600" height="450" style={{border: '0'}}></iframe>
                                        <p className="mt-2 text-white">12312 W Olympic Blvd, Los Angeles, CA 90064, United States
                                        </p>
                                        <div className="d-flex flex-wrap p-2 mt-2 bg-white">
                                            <p className="m-0 px-2">You may email us at: <strong
                                                    className="text-primary">customerservice@wearenations.com</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="contact-form-container p-3 p-md-4 bg-dark h-100">
                                    <label htmlFor="fname">First Name:</label>
                                    <input type="text" id="fname" name="fname" placeholder="Your name.." />

                                    <label htmlFor="lname">Last Name:</label>
                                    <input type="text" id="lname" name="lname" placeholder="Your last name.." />

                                    <label htmlFor="country">Country:</label>
                                    <select className="select-default" id="country" name="country">
                                        <option value="us">Australia</option>
                                        <option value="us">Austria</option>
                                        <option value="us">Belgium</option>
                                        <option value="us">Brunei</option>
                                        <option value="ca">Canada</option>
                                        <option value="ca">China</option>
                                        <option value="ca">Germany</option>
                                        <option value="ca">Japan</option>
                                        <option value="ca">Malaysia</option>
                                        <option value="ph">Philippines</option>
                                        <option value="ph">Singapore</option>
                                        <option value="us">United Kingdom</option>
                                        <option value="us">United States</option>
                                    </select>

                                    <label htmlFor="subject">Subject:</label>
                                    <textarea id="subject" name="subject" placeholder="Your message.."></textarea>
                                    <div className="d-flex mt-2 justify-content-end">
                                        <button type="submit" className="btn btn-primary rounded">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default ContactUs;