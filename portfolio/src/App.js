import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import { render } from '@testing-library/react';
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
    const navbarItems = [ "portfolio", "about", "contact"]
    return (
      <div className="App">
          <Navbar navbarItems={navbarItems}></Navbar>
          <header className="masthead bg-primary text-white text-center">
              <div className="container d-flex align-items-center flex-column">
                  <img className="masthead-avatar mb-5" src={require("./assets/img/avataaars.svg")} alt="" />
                  <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                  
                  <div className="divider-custom divider-light">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                      <div className="divider-custom-line"></div>
                  </div>
                  
                  <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
              </div>
          </header>
          {/* <!-- Portfolio Section--> */}
          <Portfolio portfolioItems={portfolioItems}></Portfolio>
          {/* <!-- About Section--> */}
          <About></About>
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
              <div className="container"><small>Copyright © Your Website 2020</small></div>
          </section>
          {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
          <div className="scroll-to-top d-lg-none position-fixed">
              <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i className="fa fa-chevron-up"></i></a>
          </div>
          {/* <!-- Portfolio Modals--><!-- Portfolio Modal 1--> */}
          <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
              <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content">
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fas fa-times"></i></span>
                      </button>
                      <div className="modal-body text-center">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-lg-8">
                                      {/* <!-- Portfolio Modal - Title--> */}
                                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                                      {/* <!-- Icon Divider--> */}
                                      <div className="divider-custom">
                                          <div className="divider-custom-line"></div>
                                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                          <div className="divider-custom-line"></div>
                                      </div>
                                      <img className="img-fluid rounded mb-5" src={require("./assets/img/portfolio/cabin.png")} alt="" />
                                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                      <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Portfolio Modal 2--> */}
          <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
              <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content">
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fas fa-times"></i></span>
                      </button>
                      <div className="modal-body text-center">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-lg-8">
                                      {/* <!-- Portfolio Modal - Title--> */}
                                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                                      {/* <!-- Icon Divider--> */}
                                      <div className="divider-custom">
                                          <div className="divider-custom-line"></div>
                                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                          <div className="divider-custom-line"></div>
                                      </div>
                                      <img className="img-fluid rounded mb-5" src={require("./assets/img/portfolio/cake.png")} alt="" />
                                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                      <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Portfolio Modal 3--> */}
          <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
              <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content">
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fas fa-times"></i></span>
                      </button>
                      <div className="modal-body text-center">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-lg-8">
                                      {/* <!-- Portfolio Modal - Title--> */}
                                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                                      {/* <!-- Icon Divider--> */}
                                      <div className="divider-custom">
                                          <div className="divider-custom-line"></div>
                                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                          <div className="divider-custom-line"></div>
                                      </div>
                                      <img className="img-fluid rounded mb-5" src={require("./assets/img/portfolio/circus.png")} alt="" />
                                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                      <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Portfolio Modal 4--> */}
          <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
              <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content">
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fas fa-times"></i></span>
                      </button>
                      <div className="modal-body text-center">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-lg-8">
                                      {/* <!-- Portfolio Modal - Title--> */}
                                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                                      {/* <!-- Icon Divider--> */}
                                      <div className="divider-custom">
                                          <div className="divider-custom-line"></div>
                                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                          <div className="divider-custom-line"></div>
                                      </div>
                                      <img className="img-fluid rounded mb-5" src={require("./assets/img/portfolio/game.png")} alt="" />
                                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                      <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Portfolio Modal 5--> */}
          <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
              <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content">
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fas fa-times"></i></span>
                      </button>
                      <div className="modal-body text-center">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-lg-8">
                                      {/* <!-- Portfolio Modal - Title--> */}
                                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                                      {/* <!-- Icon Divider--> */}
                                      <div className="divider-custom">
                                          <div className="divider-custom-line"></div>
                                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                          <div className="divider-custom-line"></div>
                                      </div>
                                      <img className="img-fluid rounded mb-5" src={require("./assets/img/portfolio/safe.png")} alt="" />
                                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                      <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- Portfolio Modal 6--> */}
          <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
              <div className="modal-dialog modal-xl" role="document">
                  <div className="modal-content">
                      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true"><i className="fas fa-times"></i></span>
                      </button>
                      <div className="modal-body text-center">
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div className="col-lg-8">
                                      {/* <!-- Portfolio Modal - Title--> */}
                                      <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                                      {/* <!-- Icon Divider--> */}
                                      <div className="divider-custom">
                                          <div className="divider-custom-line"></div>
                                          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                          <div className="divider-custom-line"></div>
                                      </div>
                                      <img className="img-fluid rounded mb-5" src={require("./assets/img/portfolio/submarine.png")} alt="" />
                                      <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                      <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  

}

export default App;
