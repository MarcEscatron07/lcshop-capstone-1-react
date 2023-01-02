import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Template from './layout/Template';

import { featuredItems } from '../variables/Welcome';

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

                    <div className="col-12 pb-4 pb-md-0 d-flex">
                        <div className="row welcome-body">
                            <div className="col-md-4 p-4 p-md-5 pe-md-2">
                                <div className="flex-column flex-md-row justify-content-between align-items-center">
                                    {featuredItems.map((item: any, idx: number) => {
                                        return (
                                            <img key={idx} className={"welcome-featured box-shade img-fluid mb-2 " + item?.imgClass} src={item?.imgSrc} alt={item?.imgAlt}/>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="col-md-8 p-4 p-md-5 ps-md-2">
                                <div className="welcome-subscribe-box">
                                    <div className="h-100 box-shade bg-light p-5">
                                        <h1 className="md-heading mb-4 d-inline-block">BECOME A MEMBER</h1>
                                        <p className="mb-5">
                                            An enthusiast of the League of Legends Pro-scene? Passionate in representing
                                            your
                                            favorite team? Subscribe to be the first to hear about our latest items, special
                                            offers, free giveaways and get equipped with our LCS Merchandise!
                                        </p>
                                        {/* <form> */}
                                            <div className="form-group d-inline">
                                                <label htmlFor="email-address">Email address:</label>
                                                <input 
                                                    className="form-control w-50 mb-md-2 me-md-2 d-inline" 
                                                    type="email" 
                                                    id="email-address" aria-describedby="emailHelp"
                                                    placeholder="Enter email" />
                                                <button className="btn btn-primary rounded-button">Subscribe</button>
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