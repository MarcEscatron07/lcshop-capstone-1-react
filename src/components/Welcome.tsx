import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Template from './layout/Template';

const featuredItems = [
    {
        imgClass: 'featured-top',
        imgSrc: 'images/lnd-featured-image1.jpg',
        imgAlt: 'lnd-featured-image1'
    },
    {
        imgClass: 'featured-bottom',
        imgSrc: 'images/lnd-featured-image2.jpg',
        imgAlt: 'lnd-featured-image2'
    }
]

function Welcome() {
    const location = useLocation();
    const navigate = useNavigate();

    const onClickAction = (origin: string) => {
        if(origin === 'Show Now') {
            navigate('/home');
        }
    }

    return (
        <>
            <Template currentPath={location.pathname} hasNoMarginTop>
                <div className="row">
                    <div className="col-12 d-flex">
                        <div className="welcome-header w-100 text-center justify-content align-items-center">
                            <img src="images/lcshop-logo-header.png" alt="lcs-logo" />
                            <h1 className="text-white">GEAR UP LIKE THE <strong>PROS</strong></h1>
                            <div>
                                <button className="btn btn-outline-primary rounded-button" onClick={() => onClickAction('Show Now')}>
                                    Show Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 d-flex">
                        <div className="row welcome-body">
                            <div className="col-md-4">
                                <div className="p-3 p-md-5 flex-column flex-md-row justify-content-between align-items-center">
                                    <div className="mx-auto px-3">
                                        {featuredItems.map(item => {
                                            return (
                                                <div>
                                                    <img className={"welcome-featured box-shade img-fluid mb-2 " + item?.imgClass}
                                                        src={item?.imgSrc} alt={item?.imgAlt}/>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 d-flex justify-content-center align-items-center">
                                <div className="welcome-subscribe-box d-flex">
                                    <div className="box-shade bg-light p-5">
                                        <h1 className="md-heading mb-4 d-inline-block">BECOME A MEMBER</h1>
                                        <p>
                                            An enthusiast of the League of Legends Pro-scene? Passionate in representing
                                            your
                                            favorite team? Subscribe to be the first to hear about our latest items, special
                                            offers, free giveaways and get equipped with our LCS Merchandise!
                                        </p>
                                        {/* <form> */}
                                            <div className="form-group d-inline">
                                                <label htmlFor="email-address">Email address:</label>
                                                <input 
                                                    className="form-control w-50 mb-2 d-inline" 
                                                    type="email" 
                                                    id="email-address" aria-describedby="emailHelp"
                                                    placeholder="Enter email" />
                                                <button className="welcome-subscribe-btn btn btn-primary rounded-button">Subscribe</button>
                                            </div>
                                        {/* </form> */}
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

export default Welcome;