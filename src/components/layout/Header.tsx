import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import { navRoutesList } from '../../routes';

function Header() {
    const location = useLocation();
    // console.log("Header > location", location)

    function renderHeaderLinks(route: any, idx: number) {
        return (
            <li key={idx} className="nav-item p-2 p-md-0">
                {route?.routeName === 'Cart' ? <span className="d-none d-lg-inline text-white fw-bold">|</span> : null}
                <Link className={`nav-link${location?.pathname === route?.path ? ' active' : ''}`} to={route?.path}>{
                    route?.routeName === 'Cart' ? <FontAwesomeIcon icon={faCartShopping} /> : <>{route?.routeName}</>
                }</Link>
            </li>
        )
    }

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
                            className="navbar-toggler bg-warning" 
                            type="button" 
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">                                
                                {navRoutesList.map((route: any, routeIdx: number) => renderHeaderLinks(route, routeIdx))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;