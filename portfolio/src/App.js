import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import PortfolioModal from './components/PortfolioModal';
import ContactMe from './components/ContactMe';

class App extends React.Component {
  render(){
    const portfolioItems = [
      { modalLabel: "CourseHub",
        imgSrc: require("./assets/img/portfolio/coursehub.png"),
        projectLink: "https://coursehub.ca"
      },
      { modalLabel: "Intro to Machine Learning",
        imgSrc: require("./assets/img/portfolio/machine-learning.png"),
        projectLink: "https://github.com/labib-c/Intro-to-Machine-Learning"
      }, 
      { modalLabel: "Lossless Compression",
        imgSrc: require("./assets/img/portfolio/compression.png"),
        projectLink: "https://github.com/labib-c/lossless-compression"
      }
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
          <ContactMe></ContactMe>
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
