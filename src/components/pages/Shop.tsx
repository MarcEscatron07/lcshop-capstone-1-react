import React from 'react';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';
import Tabs from '../shared/Tabs';
import Searchbar from '../shared/Searchbar';

const tabs: any[] = [
    {
        tabName: 'Jerseys',
        tabValue: ''
    },
    {
        tabName: 'Casual Wear',
        tabValue: ''
    },
    {
        tabName: 'Accessories',
        tabValue: ''
    }
]

function Shop() {

    return (
        <>
            <Template>
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb />
                    </div>
                    <div className="col-12 px-5 py-4">
                        <div className="row">
                            <div className="col">
                                <Tabs tabsList={tabs} defaultTab={tabs && tabs[0]?.tabName} />
                            </div>
                            <div className="col d-flex justify-content-end">
                                <div className="d-flex">
                                    <Searchbar />
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