import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface IProps {
    onClickSearch: any
}

function Searchbar(props: IProps) {
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        // console.log('Search > val', search)
    }, [search])

    const handleSearch = (e: any) => {
        // console.log('handleSearch > event', e?.target?.value)
        setSearch(e?.target?.value);
    }

    const handleClickSearch = () => {
        if(props.onClickSearch) {
            props.onClickSearch(search)
        }
    }

    return (
        <>
            <div className="searchbar-wrapper">
                <input className="searchbar form-control" type="search" placeholder="Search.." aria-label="Search" onChange={handleSearch} />
                <button className="searchbar-icon btn btn-outline-primary" type="submit" onClick={handleClickSearch}><i className="fa fa-search fa-lg"></i></button>
            </div>
        </>
    )
}

Searchbar.propTypes = {
    onClickSearch: PropTypes.func.isRequired
}

export default Searchbar;