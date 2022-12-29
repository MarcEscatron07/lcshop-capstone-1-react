import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <>
            <div className="row">
                <div className="col">
                    <nav id="navigation-bar" className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                        <div className="d-flex justify-content-center align-items-center">
                            <Link className="navbar-brand" to="/home">
                                <img id="nav-logo-img" src="images/favicon.png" alt="lcshop-logo" />
                            </Link>
                            <Link id="nav-logo-label" to="/home">
                                <h2 className="text-white m-0">LCShop</h2>
                            </Link>
                        </div>
                        <button 
                            className="navbar-toggler bg-white" 
                            type="button" 
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                    <Link className="nav-link" to="/shop">Shop</Link>
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                    <Link className="nav-link" to="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;