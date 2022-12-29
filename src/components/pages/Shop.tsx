import React, { useEffect, useState } from 'react';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';
import Tabs from '../shared/Tabs';
import SortBy from '../shared/SortBy';
import Searchbar from '../shared/Searchbar';
import Card from '../shared/Card';

import {
    tabs,
    sortBy,
    shopItems
} from '../../variables/shop.variables';

function Shop() {
    const [shopTab, setShopTab] = useState<string>(tabs[0]?.tabName);
    const [shopSort, setShopSort] = useState<string>(sortBy[0]?.value);
    const [shopSearch, setShopSearch] = useState<string>('');

    useEffect(() => {
        // console.log('Shop > shopTab val', shopTab)
    }, [shopTab])

    useEffect(() => {
        // console.log('Shop > shopSort val', shopSort)
    }, [shopSort])

    useEffect(() => {
        // console.log('Shop > shopSearch val', shopSearch)
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
                            <div className="col p-3">
                                <div className="row">
                                    {shopItems.map((shopItem: any) => {
                                        if((shopItem?.tab && shopItem?.items) && shopItem?.tab === shopTab) {
                                            return shopItem?.items.map((item: any, idx: number) => {
                                                return (
                                                    <div key={idx} className="col-md-3 py-3">
                                                        <Card 
                                                            src={item?.srcFront}
                                                            alt={item?.name}
                                                            title={item?.name}
                                                            price={`${item?.currency}${item?.price}`}
                                                            buttonText={item?.btnText}
                                                            cardLayout="centered"
                                                            imgObj={{front: item?.srcFront, back: item?.srcBack}}
                                                        />
                                                    </div>
                                                )
                                            })
                                        } else {
                                            return null;
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default Shop;