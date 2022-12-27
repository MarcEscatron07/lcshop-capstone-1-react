import React, { useEffect, useState } from 'react';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';
import Tabs from '../shared/Tabs';
import SortBy from '../shared/SortBy';
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
];

const sortBy: any[] = [
    {
        name: 'LATEST',
        value: 'sort-latest'
    },
    {
        name: 'FEATURED',
        value: 'sort-featured'
    },
    {
        name: 'BEST SELLING',
        value: 'sort-best-selling'
    },
    {
        name: 'ALPHABETICAL, A-Z',
        value: 'sort-alpha-asc'
    },
    {
        name: 'ALPHABETICAL, Z-A',
        value: 'sort-alpha-desc'
    },
    {
        name: 'PRICE (ASCENDING)',
        value: 'sort-price-asc'
    },
    {
        name: 'PRICE (DESCENDING)',
        value: 'sort-price-desc'
    },
];



function Shop() {
    const [shopTab, setShopTab] = useState<string>(tabs[0]?.tabName);
    const [shopSort, setShopSort] = useState<string>(sortBy[0]?.value);
    const [shopSearch, setShopSearch] = useState<string>('');

    useEffect(() => {
        console.log('Shop > shopTab val', shopTab)
    }, [shopTab])

    useEffect(() => {
        console.log('Shop > shopSort val', shopSort)
    }, [shopSort])

    useEffect(() => {
        console.log('Shop > shopSearch val', shopSearch)
    }, [shopSearch])

    const handleSelectTab = (currentTab: string) => {
        setShopTab(currentTab);
    }

    const handleSelectSort = (value: string) => {
        // console.log('handleSelectSort > value', value)
        setShopSort(value);
    }

    const handleClickSearch = (value: string) => {
        setShopSearch(value);
    }

    function renderTabContent(tab: any, tabIdx: number) {
        if(shopTab === tab?.tabName) {
            return (
                <div key={tabIdx} className="d-flex justify-content-between align-items-center">
                    <h3 className="mb-2">{tab?.tabHeader}</h3>
                    <SortBy sortByList={sortBy} defaultSort={sortBy && sortBy[0]?.value} onSelectSort={handleSelectSort} />
                </div>
            )
        } else {
            return null;
        }
    }

    return (
        <>
            <Template>
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-12 px-5 py-4">
                        <div className="row mb-5">
                            <div className="col d-md-flex justify-content-between">
                                <div className="d-md-flex py-2">
                                    <Tabs tabsList={tabs} defaultTab={tabs && tabs[0]?.tabName} onSelectTab={handleSelectTab} />
                                </div>
                                <div className="d-md-flex py-2">
                                    <Searchbar onClickSearch={handleClickSearch}/>
                                </div>                                
                            </div>
                        </div>
                        <div className="row line-separator pb-4">
                            <div className="col">
                                <div className="tab-panel">
                                    {tabs.map((tab, tabIdx) => {
                                        return renderTabContent(tab, tabIdx);
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/* Shop items here (Jerseys, Casual Wear, Accessories) */}
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Shop;