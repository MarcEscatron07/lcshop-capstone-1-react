import React from 'react'

function Breadcrumb() {
    return (
        <>
            <div className="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default Breadcrumb;