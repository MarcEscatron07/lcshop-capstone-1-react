import React, { useEffect, useState } from 'react';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';
import Tabs from '../shared/Tabs';
import Searchbar from '../shared/Searchbar';

const tabs: any[] = [
    {
        tabName: 'Jerseys',
        tabHeader: 'LCS Team Stage Jerseys',
    },
    {
        tabName: 'Casual Wear',
        tabHeader: 'LCS Casual Wear'
    },
    {
        tabName: 'Accessories',
        tabHeader: 'LCS Accessories'
    }
]

function Shop() {
    const [shopTab, setShopTab] = useState<string>(tabs[0]?.tabName);

    useEffect(() => {
        console.log('Shop > shopTab val', shopTab)
    }, [shopTab])

    const handleSelectTab = (currentTab: string) => {
        setShopTab(currentTab);
    }

    return (
        <>
            <Template>
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-12 px-5 py-4">
                        <div className="row mb-4">
                            <div className="col d-md-flex justify-content-between">
                                <div className="d-md-flex py-2">
                                    <Tabs tabsList={tabs} defaultTab={tabs && tabs[0]?.tabName} onSelectTab={handleSelectTab} />
                                </div>
                                <div className="d-md-flex py-2">
                                    <Searchbar />
                                </div>                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* {shopTab === tabs[0]?.tabName ? (
                                    <>
                                        <h3 className="mb-2">{tabs[0]?.tabHeader}</h3>
                                    </>
                                ) : null} */}
                                {/* {tabs.map((tab) => {
                                    if(shopTab === tabs[0]?.tabName) {
                                        return (
                                            <>
                                                <h3 className="mb-2">{tabs[0]?.tabHeader}</h3>
                                            </>
                                        )
                                    } else {
                                        return null;
                                    }
                                })} */}
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Shop;