import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface IProps {
    sortByList: any[],
    defaultSort: string,
    onSelectSort: any
}

function SortBy(props: IProps) {
    const [currentSort, setCurrentSort] = useState<string>(props?.defaultSort ?? '');

    useEffect(() => {
        // console.log('currentSort > val', currentSort)
    }, [currentSort])

    const onSortAction = (e: any) => {
        setCurrentSort(e?.target?.value);
        if(props.onSelectSort) {
            props.onSelectSort(e?.target?.value);
        }
    }
    
    return (
        <>
            <div className="sortby-wrapper">
                <label className="my-0 mx-2 fw-bold" htmlFor="sort-by">Sort By</label>
                <select className="sortby-select" name="sort" id="sort-by" onChange={onSortAction}>
                    {props.sortByList.map((sort, sortIdx) => {
                        return (
                            <option key={sortIdx} value={sort?.value}>{sort?.name}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

SortBy.propTypes = {
    sortByList: PropTypes.array.isRequired,
    defaultSort: PropTypes.string.isRequired,
    onSelectSort: PropTypes.func.isRequired
}

export default SortBy;