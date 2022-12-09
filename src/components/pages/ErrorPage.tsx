import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    let error = useRouteError();
    let errorStatus: string | null = null;
    let errorMessage: string | null = null;

    console.log('ErrorPage > error: ', error)

    if(typeof error == 'object' && error !== null) {
        const newError: any = { ...error };
        // errorStatus = newError['statusText'];
        errorMessage = newError['error']['message'];
    }

    return (
        <>
            <div id='error-page'>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>
                    <i>Error: {errorStatus || errorMessage}</i>
                </p>
            </div>
        </>
    )
}

export default ErrorPage;