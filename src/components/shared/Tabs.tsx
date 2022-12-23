import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

interface IProps {
    tabsList: any[],
    defaultTab?: string
}

function Tabs(props: IProps) {
    // const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState<string>();

    useEffect(() => {
        if(props && props.defaultTab) {
            setCurrentTab(props.defaultTab);
        }
    }, [props])

    useEffect(() => {
        // console.log('currentTab > val', currentTab)
    }, [currentTab])

    const onClickAction = (tab: any) => {
        if(tab && tab.tabName) {
            setCurrentTab(tab.tabName)
        }
    }

    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    {props.tabsList.map((tab, idx) => {
                        const className: string = currentTab === tab?.tabName ? 'nav-link active' : 'nav-link';

                        return (
                            <div key={idx} className={className} onClick={() => onClickAction(tab)}>{tab?.tabName}</div>
                        )
                    })}
                </li>
            </ul>
        </>
    )
}

Tabs.propTypes = {
    tabsList: PropTypes.array,
    defaultTab: PropTypes.string,
}

export default Tabs;