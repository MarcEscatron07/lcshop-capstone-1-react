import React from 'react';

import Template from '../layout/Template';

import {
    carouselItems,
    featuredItems,
    productItems,
    collectionItems,
    lcsTeams,
    lcsPartners
} from '../../variables/Home.variables';

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

                    <div className="col-12 p-5 text-center">
                        <div className="p-5">
                            <h3 className="mb-4 fw-bold">SAVE & GET THE NEWEST ITEMS IN THE SHOP!</h3>
                            <h5 className="mb-5">Subscribe to get special offers, free giveaways, and the best deals!</h5>
                            <a href="#"><button className="btn btn-primary">SUBSCRIBE TO OUR NEWSLETTER</button></a>
                        </div>
                    </div>

                    <div className="col-12 p-5 bg-dark">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-5 text-center text-white">LCS 2019 COLLECTIONS</h2>
                            </div>
                            <div className="col-12">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {collectionItems.map((item, idx) => {
                                        return (
                                            <div key={idx} className="col">
                                                <div className="card h-100">
                                                <img src={item?.collSrc} className="card-img-top img-fluid" alt={item?.collAlt} />
                                                <div className="card-body">
                                                    <h5 className="card-title">{item?.collAlt}</h5>
                                                    <p className="card-text">{item?.collDesc}</p>
                                                </div>
                                                <div className="card-footer d-flex flex-wrap justify-content-between justify-content-md-center justify-content-lg-between align-items-center">
                                                    <small className="text-muted">{item?.collCurrency}{item?.collPrice}</small>
                                                    <a href={item?.collBtnLink}><button className="card-button btn btn-primary">{item?.collBtnText}</button></a>                                                    
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 p-5 lcs-teams-container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center text-white">THE LCS TEAMS</h2>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col p-3 p-md-5 mx-auto d-flex flex-column flex-lg-row justify-content-center align-items-center">
                                        {lcsTeams.map((team, idx) => {
                                            return (
                                                <div key={idx} className="text-center">
                                                    <img src={team?.teamSrc} alt={team?.teamAlt} className="img-fluid h-75 w-75" />
                                                    <h5 className="text-white">{team?.teamAlt}</h5>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 p-5">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-3 text-center">OUR PARTNERS</h2>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col p-2 d-flex flex-column flex-lg-row justify-content-center align-items-center">
                                        {lcsPartners.map((partner, idx) => {
                                            return (
                                                <img className="lcs-partners img-fluid" src={partner?.partnerSrc} alt={partner?.partnerAlt} title={partner?.partnerAlt} height={partner?.imgHeight} width={partner?.imgWidth} />
                                            )
                                        })}
                                    </div>
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