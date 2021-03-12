import React from 'react';

function Portfolio(props) {
    return (
        <div id="portfolio" className="cover">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Portfolio</h1>
                </div>
            </div>
     
      <div className="container">
        <div className="row portfolio-projects">
          <div className="col-lg-6">
            <div className="row"> 
              <div className="col-sm-5 text-center">
                <h4 className="portfolio-projects--title">HTML Project</h4>
                <p className="portfolio-projects--desc">Coded a 2-column responsive page for a school project</p>
                <p className="portfolio-projects--desc">Skills: HTML and CSS</p>
                <a className="btn btn-rounded portfolio-projects--btn" href="https://codepen.io/FloMarketing/pen/NWqWPMJ" target="_blank" role="button" rel="noreferrer">View Project</a>
              </div>
              <div className="col-sm-7 text-center">
                <a href="https://codepen.io/FloMarketing/pen/NWqWPMJ" target="_blank" rel="noreferrer"> <img className="portfolio-projects--image" src="Images/project-1.png" alt=""/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row"> 
              <div className="col-sm-5 text-center pull-right-sm">
                <h4 className="portfolio-projects--title">Dog Age Calculator</h4>
                <p className="portfolio-projects--desc">Javascript template to calculate your dog's age</p>
                <p className="portfolio-projects--desc">Uses: HTML and Javascript </p>
                <a className="btn btn-rounded portfolio-projects--btn" href="https://codepen.io/FloMarketing/pen/OJVNQOj" target="_blank" role="button" rel="noreferrer">View Project</a>
              </div>
              <div className="col-sm-7 text-center pull-right-sm">
                <a href="https://codepen.io/FloMarketing/pen/OJVNQOj" target="_blank" rel="noreferrer"><img className="img-rounded portfolio-projects--image" src="Images/project-2.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-projects">
          <div className="col-lg-6"> 
            <div className="row"> 
              <div className="col-sm-5 text-center">
                <h4 className="portfolio-projects--title">Marketo Hacks</h4>
                <p className="portfolio-projects--desc">Showcases blog created for Marketing Automation Canada</p>
                <p className="portfolio-projects--desc">Skills: Copy writing</p>
                <a className="btn btn-rounded portfolio-projects--btn" href="http://marketing-automation.ca/blog-marketo-hacks-for-beginners.html" target="_blank" role="button" rel="noreferrer">View Project</a>
              </div>
              <div className="col-sm-7 text-center">
                <a href="http://marketing-automation.ca/blog-marketo-hacks-for-beginners.html" target="_blank" rel="noreferrer"><img className="img-rounded portfolio-projects--image" src="Images/project-3.png" alt=""/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row"> 
              <div className="col-sm-5 text-center pull-right-sm">
                <h4 className="portfolio-projects--title">Navigation Template</h4>
                <p className="portfolio-projects--desc">A website navigation template to clone and use</p>
                <p className="portfolio-projects--desc">Uses: HTML and CSS</p>
                <a className="btn btn-rounded portfolio-projects--btn" href="https://codepen.io/FloMarketing/pen/JjdobqZ" target="_blank" role="button" rel="noreferrer">View Project</a>
              </div>
              <div className="col-sm-7 text-center pull-right-sm">
                <a href="https://codepen.io/FloMarketing/pen/JjdobqZ" target="_blank" rel="noreferrer"><img className="img-rounded portfolio-projects--image" src="Images/project-4.jpg" target="_blank" alt=""/></a>
              </div>
            </div>
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

export default Portfolio;