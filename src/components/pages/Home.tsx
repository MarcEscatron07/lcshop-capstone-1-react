import React, { useEffect, useState } from 'react';

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
]

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
                                        <div className={className} data-bs-interval="5000">
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

                    <div className="col">

                    </div>
                </div>
            </Template>
        </>
    )
}

export default Home;