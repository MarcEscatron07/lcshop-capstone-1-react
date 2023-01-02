import React, { useEffect, useState } from 'react';
import moment from 'moment';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';
import Tabs from '../shared/Tabs';
import SortBy from '../shared/SortBy';
import Searchbar from '../shared/Searchbar';
import Card from '../shared/Card';

import {
    tabs,
    sortBy,
    items
} from '../../variables/Shop';

const sortItems = (items: any[] = [], sort: string = '') => {
    let newItems: any[] = JSON.parse(JSON.stringify(items)); // deep clone the object
    newItems = newItems.map((nItem: any) => {
        nItem['items'] = nItem['items'] && nItem['items'].sort((a: any, b: any) => {
            switch(sort) {
                case 'sort-latest':
                    return moment(b?.dateAdded).diff(a?.dateAdded);                        
                case 'sort-oldest':
                    return moment(a?.dateAdded).diff(b?.dateAdded);
                case 'sort-alpha-asc':
                    return a?.name > b?.name ? 1 : -1;
                case 'sort-alpha-desc':
                    return a?.name < b?.name ? 1 : -1;
                case 'sort-price-asc':
                    return a?.price > b?.price ? 1 : -1;
                case 'sort-price-desc':
                    return a?.price < b?.price ? 1 : -1;
                default:
                    return 1;
            }
        });
        return nItem;
    })
    return newItems;
}

function Shop() {
    const [shopTab, setShopTab] = useState<string>(tabs[0]?.tabName ?? 'Jerseys');
    const [shopSort, setShopSort] = useState<string>(sortBy[0]?.value ?? '');
    const [shopSearch, setShopSearch] = useState<string>('');
    const [shopItems, setShopItems] = useState<any[]>(sortItems(items, sortBy[0]?.value ?? '') ?? []);

    useEffect(() => {
        // console.log('Shop > shopTab val', shopTab)
    }, [shopTab])

    useEffect(() => {
        // console.log('Shop > shopSort val', shopSort)
        // console.log('Shop > shopItems val', shopItems)

        setShopItems(sortItems(shopItems, shopSort));
    }, [shopSort, shopItems])

    useEffect(() => {
        // console.log('Shop > shopSearch val', shopSearch)

        if(shopSearch.trim() !== '') {
            const newItems: any[] = JSON.parse(JSON.stringify(items)); // deep clone the object
            newItems.map((nItem: any) => {
                nItem['items'] = nItem['items'] && nItem['items'].filter((item: any) => item?.name && 
                    item?.name.toLowerCase().includes(shopSearch.toLowerCase()));
                return nItem;
            })
            setShopItems(newItems);
        } else {
            setShopItems(items ?? []);
        }
    }, [shopSearch])

    const handleSelectTab = (currentTab: string) => {
        setShopTab(currentTab);
    }

    const handleSelectSort = (value: string) => {
        // console.log('handleSelectSort > value', value)
        setShopSort(value);
    }

    const handleSearch = (value: string) => {
        setShopSearch(value);
    }

    const dateFormatter = (date: moment.Moment) => {
        return (<>Date Added: <b>{moment(date).format('MMM. DD, YYYY')}</b></>);
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

    function renderShopItems() {
        return shopItems.map((sItem: any, sIdx: number) => {
            if(sItem?.tab === shopTab) {
                if(sItem?.items && sItem?.items.length > 0) {
                    return sItem?.items?.map((item: any, idx: number) => {
                        return (
                            <div key={idx} className="col-md-3 py-3">
                                <Card 
                                    src={item?.srcFront}
                                    alt={item?.name}
                                    title={item?.name}
                                    description={item?.dateAdded && dateFormatter(item?.dateAdded)}
                                    price={`${item?.currency}${item?.price}`}
                                    buttonText={item?.btnText}
                                    cardLayout="centered"
                                    imgObj={{front: item?.srcFront, back: item?.srcBack}}
                                />
                            </div>
                        ) 
                    })
                } else {
                    return <p key={sIdx} className="fw-bold">Nothing Here...</p>;
                }
            } else {
                return null;
            }
        })
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
                                    <Searchbar type="onChange" onSearch={handleSearch}/>
                                </div>                                
                            </div>
                        </div>
                        <div className="row line-separator pb-4">
                            <div className="col">
                                <div className="tab-panel">
                                    {tabs.map((tab, tabIdx) => renderTabContent(tab, tabIdx))}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col p-3">
                                <div className="row">
                                    {renderShopItems()}
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