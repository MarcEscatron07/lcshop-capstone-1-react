import React from 'react';
import { useNavigate } from 'react-router-dom';

import Template from '../layout/Template';
import Card from '../shared/Card';

import {
    carouselItems,
    featuredItems,
    lcsTeams,
    lcsPartners
} from '../../variables/Home';

import {
    items
} from '../../variables/Shop';

function Home() {
    const navigate = useNavigate();
    const lcsJerseys: any[] = items && items[0] && items[0].items ? items[0]?.items.slice(0, 3) : [];
    const lcsCollections: any[] = items && items[2] && items[2].items ? items[2]?.items.slice(0, 3) : [];

    const onClickAction = (origin: string) => {
        if(origin === 'Newsletter') {
            navigate('/');
        }
    }

    function renderHomeItems(item: any, idx: number) {
        return (
            <div key={idx} className="col">
                <Card 
                    src={item?.srcFront}
                    alt={item?.name}
                    title={item?.name}
                    description={item?.desc}
                    price={`${item?.currency}${item?.price}`}
                    buttonText={item?.btnText}
                    imgObj={{front: item?.srcFront, back: item?.srcBack}}
                />
            </div>
        )
    }
    
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
                                    <div key={idx} className="col-12 col-md home-featured box-shade w-100" style={{backgroundImage: `url(${item?.featSrc})`}}>
                                        <div className="home-btn-wrapper text-center text-white">
                                            <div className="home-featured-title mt-3" style={{color: `${item?.featTitleColor}`}}>
                                                {item?.featTitle}
                                            </div>
                                            <div className="home-btn-container">
                                                <button className="btn btn-outline-primary rounded">{item?.featBtnText}</button>
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
                                    {lcsJerseys.map((item: any, idx: number) => renderHomeItems(item, idx))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 p-5 text-center">
                        <div className="p-5">
                            <h3 className="mb-4 fw-bold">SAVE & GET THE NEWEST ITEMS IN THE SHOP!</h3>
                            <h5 className="mb-5">Subscribe to get special offers, free giveaways, and the best deals!</h5>
                            <button className="btn btn-primary" onClick={() => onClickAction('Newsletter')}>SUBSCRIBE TO OUR NEWSLETTER</button>
                        </div>
                    </div>

                    <div className="col-12 p-5 bg-dark">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="mb-5 text-center text-white">LCS 2019 COLLECTIONS</h2>
                            </div>
                            <div className="col-12">
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    {lcsCollections.map((item: any, idx: number) => renderHomeItems(item, idx))}
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
                                                    <img src={team?.teamSrc} alt={team?.teamAlt} className="img-fluid" />
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
                                                <img key={idx} className="lcs-partners img-fluid" src={partner?.partnerSrc} alt={partner?.partnerAlt} title={partner?.partnerAlt} height={partner?.imgHeight} width={partner?.imgWidth} />
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