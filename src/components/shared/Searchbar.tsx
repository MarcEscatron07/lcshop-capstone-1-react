import React from 'react';

function Searchbar() {

    return (
        <>
            <div className="searchbar-wrapper">
                <input className="searchbar form-control" type="search" placeholder="Search.." aria-label="Search" />
                <button className="searchbar-icon btn btn-outline-primary" type="submit"><i className="fa fa-search fa-lg"></i></button>
            </div>
        </>
    )
}

export default Searchbar;