import React from 'react';

export default() => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Social</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://github.com/labib-c"><i className="fab fa-fw fa-github"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/labib-c/"><i className="fab fa-fw fa-linkedin-in"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/labib_c/"><i className="fab fa-fw fa-instagram"></i></a>
                    </div>
                    {/* <!-- Footer About Text--> */}
                    <div className="col">
                        <h4 className="text-uppercase mb-4">Theme by Freelance</h4>
                        <p className="lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
