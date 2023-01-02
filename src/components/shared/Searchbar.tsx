import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface IProps {
    type: 'onChange' | 'onClick';
    onSearch: any
}

function Searchbar(props: IProps) {
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        // console.log('Search > val', search)
    }, [search])

    const handleChangeSearch = (e: any) => {
        // console.log('handleChangeSearch > event', e?.target?.value)        
        if(props.type === 'onChange' && props.onSearch) {
            props.onSearch(e?.target?.value)
        } else {
            setSearch(e?.target?.value);
        }
    }

    const handleClickSearch = () => {
        if(props.type === 'onClick' && props.onSearch) {
            props.onSearch(search)
        }
    }

    return (
        <>
            <div className="searchbar-wrapper">
                <input className="searchbar form-control shadow-none" type="search" placeholder="Search.." aria-label="Search" onChange={handleChangeSearch} />
                <button className="searchbar-icon btn btn-outline-primary" type="submit" onClick={handleClickSearch} disabled={props.type === 'onChange'}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </>
    )
}

Searchbar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Searchbar;