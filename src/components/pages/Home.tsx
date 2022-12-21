import React from 'react';

import Template from '../layout/Template';

const carouselItems: any[] = [
    {
        imgSrc: 'images/hom-carousel1.png',
        imgAlt: 'Home Carousel 1',
        slideLabel: 'Slide 1'
    },
    {
        imgSrc: 'images/hom-carousel2.png',
        imgAlt: 'Home Carousel 2',
        slideLabel: 'Slide 2'
    },
    {
        imgSrc: 'images/hom-carousel3.png',
        imgAlt: 'Home Carousel 3',
        slideLabel: 'Slide 3'
    },
    {
        imgSrc: 'images/hom-carousel4.png',
        imgAlt: 'Home Carousel 4',
        slideLabel: 'Slide 4'
    },
];

const featuredItems: any[] = [
    {
        featSrc: 'images/hom-featureimg1.png',
        featTitle: 'LCS Summer Finals Gold Foil Tee',
        featTitleColor: 'white',
        featBtnText: 'Buy Now',
        featBtnLink: '#'
    },
    {
        featSrc: 'images/hom-featureimg2.png',
        featTitle: "'47 Scrum Tee",
        featTitleColor: 'black',
        featBtnText: 'Get One',
        featBtnLink: '#'
    }
];

const productItems: any[] = [
    {
        prodSrc: 'images/home/hom-jersey-tl.webp',
        prodAlt: 'Team Liquid LCS Jersey 2019',
        prodDesc: 'Made exclusively for the Team Liquid 2019 LCS campaign, featuring angled designed with gold accents and the iconic team logo on the chest to show your devotion to Team Liquid!',
        prodCurrency: '$',
        prodPrice: 80.00.toFixed(2),
        prodBtnText: 'Add To Cart',
        prodBtnLink: '#'
    },
    {
        prodSrc: 'images/home/hom-jersey-c9.png',
        prodAlt: 'Cloud9 LCS Jersey 2019',
        prodDesc: 'Made exclusively for the Cloud9 2019 LCS campaign, featuring the classic black and blue theme, and benefits from having the iconic team logo on the chest to show your devotion to Cloud9!',
        prodCurrency: '$',
        prodPrice: 80.00.toFixed(2),
        prodBtnText: 'Add To Cart',
        prodBtnLink: '#'
    },
    {
        prodSrc: 'images/home/hom-jersey-ggs.png',
        prodAlt: 'Golden Guardians LCS Jersey 2019',
        prodDesc: 'Made exclusively for the Golden Guardians 2019 LCS campaign, featuring an all blue design with gold accents with the iconic team logo on the chest to show your devotion to Golden Guardians!',
        prodCurrency: '$',
        prodPrice: 80.00.toFixed(2),
        prodBtnText: 'Add To Cart',
        prodBtnLink: '#'
    }
];

function Home() {
    
    return (
        <>
            <Template>
                <div className="row">
                    <div className="col-12 p-0">
                        <div id="home-carousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {carouselItems.map((item,idx) => {
                                    return (
                                        <button key={idx} type="button" data-bs-target="#home-carousel" data-bs-slide-to={idx} className={idx === 0 ? "active" : ""} aria-current="true" aria-label={item?.slideLabel}></button>
                                    )
                                })}
                            </div>
                            <div className="carousel-inner">
                                {carouselItems.map((item,idx) => {
                                    let className: string = idx === 0 ? "carousel-item active" : "carousel-item";
                                    return (
                                        <div key={idx} className={className} data-bs-interval="5000">
                                            <img src={item?.imgSrc} className="d-block w-100" alt={item?.imgAlt} />
                                        </div>
                                    )
                                })}
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
                                <div className="carousel-control-wrapper p-3 d-flex align-items-center bg-dark">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </div>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
                                <div className="carousel-control-wrapper p-3 d-flex align-items-center bg-dark">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="col-12 p-0">
                        <div className="row">
                            {featuredItems.map((item,idx) => {
                                return (
                                    <div key={idx} className="col home-featured box-shade w-100" style={{backgroundImage: `url(${item?.featSrc})`}}>
                                        <div className="home-btn-wrapper text-center text-white">
                                            <div className="home-featured-title mt-3" style={{color: `${item?.featTitleColor}`}}>
                                                {item?.featTitle}
                                            </div>
                                            <div className="home-btn-container">
                                                <a href={item?.featBtnLink}><button className="btn btn-outline-primary rounded">
                                                    {item?.featBtnText}</button></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-12 p-5 bg-dark">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-5 text-center text-white">THE LCS JERSEYS</h2>
                            </div>
                            <div className="col-12">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {productItems.map((item, idx) => {
                                        return (
                                            <div key={idx} className="col">
                                                <div className="card h-100">
                                                <img src={item?.prodSrc} className="card-img-top img-fluid" alt={item?.prodAlt} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item?.prodAlt}</h5>
                                                    <p className="card-text">{item?.prodDesc}</p>
                                                </div>
                                                <div className="card-footer d-flex flex-wrap justify-content-between justify-content-md-center justify-content-lg-between align-items-center">
                                                    <small className="text-muted">{item?.prodCurrency}{item?.prodPrice}</small>
                                                    <a href={item?.prodBtnLink}><button className="card-button btn btn-primary">{item?.prodBtnText}</button></a>                                                    
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Home;