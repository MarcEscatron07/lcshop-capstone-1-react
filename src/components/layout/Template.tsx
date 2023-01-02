import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

interface IProps {
    currentPath?: string,
    hasNoMarginTop?: boolean,
    children: any
}

function Template(props: IProps){
    const currentPath: string = props.currentPath ?? '';
    // console.log('Template > currentPath: ', currentPath)
    const urlPathsWithNoHeader: string[] = [
        '/'
    ];
    const mainStyle: object = {
        marginTop: props.hasNoMarginTop ? '0px' : '82px',
    }

    return (
        <>
            <div className="template-wrapper container-fluid">
                {!urlPathsWithNoHeader.includes(currentPath) ? <Header /> : null}
                <div className="main" style={mainStyle}>
                    {props.children}
                </div>
                <Footer />
            </div>
        </>
    )
}

Template.propTypes = {
    currentPath: PropTypes.string,
    hasNoMarginTop: PropTypes.bool
}

export default Template;