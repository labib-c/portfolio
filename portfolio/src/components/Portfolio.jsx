import React from 'react'

export default( { portfolioItems } ) => {
    return (
        <section className="page-section bg-primary text-white portfolio mb-0" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white  mb-0">Portfolio</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    {   
                        portfolioItems && portfolioItems.map(({modalLabel, imgSrc}, index) =>
                        
                        <div className="col-md-6 col-lg-4 mb-5">                            
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target={"#"+`${modalLabel}`}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={ imgSrc } alt="" />
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}
