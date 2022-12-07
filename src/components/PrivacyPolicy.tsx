import React from 'react';
import { useLocation } from 'react-router-dom';

import Template from './layout/Template';

function PrivacyPolicy() {
    const location = useLocation();

    return (
        <>
            <Template currentPath={location.pathname}>

            </Template>
        </>
    )
}

export default PrivacyPolicy;