import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

function Breadcrumb() {
    const navigate = useNavigate();
    const bcrumbs = useBreadcrumbs();
    console.log('Breadcrumb > bcrumbs', bcrumbs)

    const onClickAction = (path: string) => {
        navigate(path);
    }

    return (
        <>
            <div className="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        {bcrumbs.map(({  match, breadcrumb }, index) => {
                            const className: string = index === bcrumbs.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item';
                            const pathname: string = match?.pathname === '/' ? '/home' : match?.pathname;

                            return (                                
                                <li key={index} className={className} onClick={() => {onClickAction(pathname)}}>{breadcrumb}</li>
                            )
                        })}
                    </ol>
                </nav>
            </div>
        </>
    )
}

export default Breadcrumb;