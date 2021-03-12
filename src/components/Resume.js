import React from 'react';

function Resume(props) {
    return (
        <div>
            {/* WORK EXPERIENCE */}
            <div className="cover">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Work Experience</h1>
                    </div>
                </div>
                <div className="mt-5">
                    <a href="http://marketing-automation.ca/" target="_blank" rel="noreferrer"><h4 className="text-center">Marketing Automation Canada (October 2018 - Present)</h4></a>
                    <h5 className="text-center">Title: Marketing Automation Executive</h5>
                </div>
                <div className="container">
                    <p className="lead-p text-center">Marketing Automation Canada is an eleven year old marketing automation managed services company providing expert, certiﬁed marketing automation services. We work with B2B, B2C, and a variety of verticals, including education, tech, and health, and many more. <br /><br />As a Marketing Automation Executive I'm responsible for managing the marketing automation platform (Marketo) and fully leveraging its capabilities for my clients. We work closely with partners, designers, developers and project managers to implement all programmatic and operational initiatives through Marketo.</p>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col">
                        <a href="https://w3.accelya.com/" target="_blank" rel="noreferrer"><h4 className="text-center">Mercator Solutions | Accelya (July 2014 - December 2016)</h4></a>
                        <h5 className="text-center">Title: Marketing Communications and Campaigns Specialist</h5>
                    </div>
                </div>

                <div className="container">
                    <p className="lead-p text-center">Mercator is a leading provider of software platforms and product-enabled solutions that bring intelligence, predictability, and value to the travel, transportation, and logistics industry.
                    <br /><br />
                    As the communications specialist, I support the Content and Comms. Manager and others in the organization to develop and implement communications strategies with key constituencies. We also collaborate with others in the organization to achieve brand consistency, coordination of messages, and the highest standards for external communications. An integral part of this position is producing content for both print and our website.
                    </p>
                </div>
            </div>
            {/* EDUCATION */}
            <div id="education" className="py-5">
                <div className="row">
                    <div className="col">
                        <h1 className="white text-center">Education</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="bad text-center"><img className="img-circle text-center education-img" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="" />
                            <br />York University (January 2020 - December 2020)</h4>
                        <h5 className="white text-center">Certificate in Full Stack Web Development</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="bad text-center"><img className="img-circle text-center education-img" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="" />
                            <br />Sheridan College (September 2017 - July 2018)</h4>
                        <h5 className="white text-center">Post Graduate Certificate in Marketing Management</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4 className="bad text-center"><img className="img-circle text-center education-img" src="https://upload.wikimedia.org/wikipedia/commons/5/50/Closed_Book_Icon.svg" alt="" />
                            <br />MAEER MIT-SOM: Maharashtra School of Technology - School of Management (July 2009 - April 2012)</h4>
                        <h5 className="white text-center">Bachlors of Business Management</h5>
                    </div>
                </div>
            </div>
            {/* FOOTER */}
            <footer id="footer" className="row bottom bg-dark text-white p-3">
                <div className="container">
                    <p className="text-center">Copyright © 2021 FloMarketing</p>
                </div>
            </footer>
        </div>
    );
}

export default Resume;