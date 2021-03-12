import React from 'react';

function Home(props) {
    return (
        <div className="container-fluid">
            <div className="row cover top mt-3 mb-5">
                <div className="col">
                    <div className="headline">
                        <h1 className="text-center mb-3">Hi, I'm Florance</h1>
                        <p className="lead text-center ">A marketing automation expert and web developer in training</p>
                    </div>
                </div>
            </div>

            <div id="about" >
                <div className="row">
                    <div className="col text-center ">
                        <h2 className="text-center mb-2">About Me</h2>
                    </div>
                </div>
                <div className="row m-5 ">
                    <div className="col-lg-6 ">
                        <p className=" text-center ">I’ve been working in the Marketing Automation sphere since the inception of my career. I’ve predominantly worked in Marketo, Hubspot and Salesforce and over the past few months, I’ve dived into web development. In the past, I’ve mostly worked at early-stage tech startups in Dubai and Toronto. And off late I’m really starting to come to the terms that I may have a coffee addiction.</p>
                    </div>
                    <div className="col-lg-6 text-center ">
                        <img className="img-circle text-center profile-img" src="Images/florance-headshot.jpeg" alt="florance-headshot" />
                    </div>
                </div>
            </div>


            <div id="expertise" className="cover">
                <div className="row">
                    <div className="col text-center ">
                        <h2 className="text-center mb-2">Platforms of Expertise</h2>
                    </div>
                </div>
                <div className="row mt-2 px-5 text-center">
                    <div className="col-lg-3 about-tools">
                        <p>HTML</p>
                    </div>
                    <div className="col-lg-3 about-tools">
                        <p>CSS</p>
                    </div>
                    <div className="col-lg-3 about-tools">
                        <p>Javascript</p>
                    </div>
                    <div className="col-lg-3 about-tools">
                        <p> Bootstrap</p>
                    </div>
                </div>
                <div className="row mt-2 px-5  text-center">
                    <div className="col-lg-3 about-tools">
                        <p>Marketo</p>
                    </div>
                    <div className="col-lg-3 about-tools">
                        <p>Salesforce</p>
                    </div>
                    <div className="col-lg-3 about-tools">
                        <p>Hubspot</p>
                    </div>
                    <div className="col-lg-3 about-tools">
                        <p>Git</p>
                    </div>
                </div>
            </div>

            <footer id="footer" className="row bottom text-white p-3 mt-3">
                <div className="container">
                    <p className="text-center">Copyright © 2021 FloMarketing</p>
                </div>
            </footer>
        </div>

    );
}

export default Home;