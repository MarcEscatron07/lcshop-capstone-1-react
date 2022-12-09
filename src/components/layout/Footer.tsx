import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="row main-footer">
                <div className="col p-2">
                    <footer className="d-flex px-4 flex-column flex-md-row justify-content-around justify-content-md-between align-items-center">
                        <div className="d-flex py-2">
                            <div className="d-flex justify-content-center align-items-center">
                                <a className="px-1" href="https://www.facebook.com/lolesports/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a className="px-1" href="https://twitter.com/LCSOfficial/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a className="px-1" href="https://www.instagram.com/lolesports/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                            </div>
                        </div>
                        <div className="py-2 text-center">
                            <div className="mb-1">
                                &copy; 2019 &nbsp;<Link to="/home">LCShop</Link>. All rights Reserved.
                            </div>
                            <div>
                                <Link to="/privacy-policy"><u>Privacy Policy</u></Link> | <Link to="/disclaimer"><u>Disclaimer</u></Link>
                            </div>
                        </div>
                        <div className="d-flex py-2 justify-content-center">
                            <div className="px-1">
                                <img src="https://am-a.akamaihd.net/image/?resize=101:32&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Ffooter%2Friot.png"
                                    alt="riot-games" />
                            </div>
                            <div className="px-1">
                                <img src="https://am-a.akamaihd.net/image/?resize=97:36&f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Ffooter%2Flol.png"
                                    alt="league-of-legends" />
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer;