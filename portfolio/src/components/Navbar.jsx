import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
      };

    render(){
        return (
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" onClick={this.scrollToTop}>Start Bootstrap</a><button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            {
                                this.props.navbarItems && this.props.navbarItems.map((item, index) =>
                                    <li className="nav-item mx-0 mx-lg-1">
                                        <Link 
                                            className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            activeClass="active"
                                            to={item}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                        >
                                        {item}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
    
        )
    }
}
export default Navbar;
