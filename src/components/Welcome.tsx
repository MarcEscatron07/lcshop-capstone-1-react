import React from 'react';

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
    return (
        <>
            <div className="row main-index">
                <div className="col col-viewport">

                    <div className="row">
                        <div className="col d-flex text-center justify-content center align-items-center">
                            <div className="welcome-header w-100">
                                <img src="images/lcshop-logo-header.png" alt="" />
                                <h1 className="text-white">GEAR UP LIKE THE <strong>PROS</strong></h1>
                                <div>
                                    <a href="/home">
                                        <button className="btn btn-outline-primary rounded-button">
                                            Show Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

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
                            <div className="d-flex">
                                <div className="box-shade bg-light p-5">
                                    <h1 className="md-heading mb-4 d-inline-block">BECOME A MEMBER</h1>
                                    <p>
                                        An enthusiast of the League of Legends Pro-scene? Passionate in representing
                                        your
                                        favorite team? Subscribe to be the first to hear about our latest items, special
                                        offers, free giveaways and get equipped with our LCS Merchandise!
                                    </p>
                                    <form>
                                        <div className="form-group d-inline">
                                            <label htmlFor="email-address">Email address:</label>
                                            <input 
                                                className="form-control w-50 mb-2 d-inline" 
                                                type="email" 
                                                id="email-address" aria-describedby="emailHelp"
                                                placeholder="Enter email" />
                                            <button type="submit"
                                                className="welcome-subscribe btn btn-primary rounded-button">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome;