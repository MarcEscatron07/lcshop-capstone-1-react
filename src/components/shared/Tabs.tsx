import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

interface IProps {
    tabsList: any[],
    defaultTab: string,
    onSelectTab: any
}

function Tabs(props: IProps) {
    // const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState<string>(props?.defaultTab ?? '');

    useEffect(() => {
        // console.log('currentTab > val', currentTab)
    }, [currentTab])

    const onClickAction = (tab: any) => {
        if(tab && tab.tabName) {
            setCurrentTab(tab.tabName)
            if(props?.onSelectTab) {
                props.onSelectTab(tab.tabName);
            }
        }
    }

    return (
        <>
            <ul className="nav nav-tabs">                
                {props.tabsList.map((tab, idx) => {
                    const className: string = currentTab === tab?.tabName ? 'nav-link active' : 'nav-link';

                    return (
                        <li className="nav-item p-2 p-md-0">
                            <div key={idx} className={className} onClick={() => onClickAction(tab)}>{tab?.tabName}</div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

Tabs.propTypes = {
    tabsList: PropTypes.array.isRequired,
    defaultTab: PropTypes.string.isRequired,
    onSelectTab: PropTypes.func.isRequired
}

export default Tabs;