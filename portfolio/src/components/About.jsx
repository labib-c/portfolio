import React from 'react';

export default() => {
    return (
        <section className="page-section bg-white text-secondary mb-0" id="about">
            <div className="container">
                {/* <!-- About Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary">About</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div className="row">
                    <div className="col ml-auto"><p className="lead">Hello! My name is Labib Chowdhury and I'm a Computer Science and Statistics graduate from the University of Toronto. 
                    My technical interests lie in Machine Learning and it's applications on common issues, as well as Full Stack Web Development. Outside of tech, I am an avid Toronto based sports fan! 
                    I am currently looking for new graduate and junior software engineering roles.
                    <br></br>
                    You can find my resume below, please reach out if you want to discuss anything!
                    </p></div>
                </div>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-dark" href={require("./../assets/resume.pdf")}><i className="fas fa-download mr-2"></i>CV/Resume</a>
                </div>
            </div>
        </section>
    )
}
