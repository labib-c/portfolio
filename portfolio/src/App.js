import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import PortfolioModal from './components/PortfolioModal';

class App extends React.Component {
  render(){
    const portfolioItems = [
      { modalLabel: "cabin",
        imgSrc: require("./assets/img/portfolio/cabin.png")},
  
      { modalLabel: "cake",
        imgSrc: require("./assets/img/portfolio/cake.png")}, 
  
      { modalLabel: "circus",
        imgSrc: require("./assets/img/portfolio/circus.png")},
  
      { modalLabel: "game",
        imgSrc: require("./assets/img/portfolio/game.png")}, 
  
      { modalLabel: "safe",
        imgSrc: require("./assets/img/portfolio/safe.png")}, 
  
      { modalLabel: "submarine",
        imgSrc: require("./assets/img/portfolio/submarine.png")}
    ]
    const navbarItems = [ "about", "portfolio", "contact"]
    return (
      <div className="App">
          <Navbar navbarItems={navbarItems}></Navbar>
          <Header></Header>
          {/* <!-- About Section--> */}
          <About></About>
          {/* <!-- Portfolio Section--> */}
          <Portfolio portfolioItems={portfolioItems}></Portfolio>
          {/* <!-- Contact Section--> */}
          <section className="page-section" id="contact">
              <div className="container">
                  {/* <!-- Contact Section Heading--> */}
                  <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  {/* <!-- Contact Section Form--> */}
                  <div className="row">
                      <div className="col-lg-8 mx-auto">
                          {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.--> */}
                          <form id="contactForm" name="sentMessage" novalidate="novalidate">
                              <div className="control-group">
                                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                      <label>Name</label><input className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div className="control-group">
                                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                      <label>Email Address</label><input className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div className="control-group">
                                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                      <label>Phone Number</label><input className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div className="control-group">
                                  <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                      <label>Message</label><textarea className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                      <p className="help-block text-danger"></p>
                                  </div>
                              </div>
                              <br />
                              <div id="success"></div>
                              <div className="form-group"><button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- Footer--> */}
          <Footer></Footer>
          {/* <!-- Copyright Section--> */}
          <section className="copyright py-4 text-center text-white">
              <div className="container"><small>Copyright © 2020</small></div>
          </section>
          {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
          <div className="scroll-to-top d-lg-none position-fixed">
              <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
          </div>
          {/* <!-- Portfolio Modals--><!-- Portfolio Modal 1--> */}
          {
            portfolioItems && portfolioItems.map((item, index) =>
              <PortfolioModal portfolioItem={ item }></PortfolioModal>
            )
          }
      </div>
    );
  }
}

export default App;
