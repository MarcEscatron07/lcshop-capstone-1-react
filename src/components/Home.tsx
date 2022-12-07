import React from 'react';
import { useLocation } from 'react-router-dom';

import Template from './layout/Template';

function Home() {
    const location = useLocation();

    return (
        <>
            <Template currentPath={location.pathname}>
                <p>Hello from Home Page</p>
            </Template>
        </>
    )
}

export default Home;