import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

interface IProps {
    currentPath: string,
    hasNoMarginTop?: boolean,
    children: any
}

function Template(props: IProps){
    const currentPath = props.currentPath ?? '';
    // console.log('Template > currentPath: ', currentPath)

    return (
        <>
            <div className="container-fluid">
                {currentPath !== '/' ? <Header /> : null}
                <div className="main" style={{marginTop: props.hasNoMarginTop ? '0px' : '85px'}}>
                    {props.children}
                </div>
                <Footer />                
            </div>
        </>
    )
}

Template.propTypes = {
    currentPath: PropTypes.string.isRequired,
    hasNoMarginTop: PropTypes.bool
}

export default Template;