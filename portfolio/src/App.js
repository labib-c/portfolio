import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import PortfolioModal from './components/PortfolioModal';
import ContactMe from './components/ContactMe';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

class App extends React.Component {
  render(){
    const portfolioItems = [
      { modalLabel: "Custos - Threat Intelligence",
        imgSrc: require("./assets/img/portfolio/custos-logo.png"),
        projectLink: "https://custos-client.herokuapp.com/login",
        github: "https://github.com/labib-c/Custos-Public",
      },
      { modalLabel: "CourseHub",
        imgSrc: require("./assets/img/portfolio/coursehub.png"),
        projectLink: "https://coursehub.ca",
        github: "https://github.com/labib-c/coursehub",
      },
      { modalLabel: "DeepNet Finder",
        imgSrc: require("./assets/img/portfolio/neural-net-finder.png"),
        projectLink: "https://colab.research.google.com/drive/1roQ2yoCT-OseJXWvySHvx7PtqDmgw8An?usp=sharing",
        github: "https://github.com/labib-c/neuralNet-Finder",
      },
      { modalLabel: "Intro to Machine Learning",
        imgSrc: require("./assets/img/portfolio/machine-learning.png"),
        projectLink: "",
        github: "https://github.com/labib-c/Intro-to-Machine-Learning",
      }, 
      { modalLabel: "Lossless Compression",
        imgSrc: require("./assets/img/portfolio/compression.png"),
        projectLink: "",
        github: "https://github.com/labib-c/lossless-compression",
      },
      { modalLabel: "EXT2 File System",
        imgSrc: require("./assets/img/portfolio/file-system.png"),
        projectLink: "",
        github: "https://github.com/labib-c/ext2-file-system"
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
