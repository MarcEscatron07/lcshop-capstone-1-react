import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
    src: string,
    alt: string,
    title: string,
    description: string,
    price?: string,
    buttonText?: string,
    cardLayout?: 'default' | 'custom',
    footerLayout?: 'default' | 'custom'
}

function Card(props: IProps) {

    const cardClassname: string = !props.cardLayout || props.cardLayout === 'default' ? 'card-default' : 'card-custom';
    const footerClassname: string = !props.footerLayout || props.footerLayout === 'default' ? 'footer-default' : 'footer-custom';

    return (
        <>
            <div className="card h-100">
            <img src={props.src} className="card-img-top img-fluid" alt={props.alt} />
            <div className="card-body">
                <h5 className={`card-title ${cardClassname}`}>{props.title}</h5>
                <p className={`card-text ${cardClassname}`}>{props.description}</p>
            </div>
            <div className={`card-footer ${footerClassname}`}>
                {!props.footerLayout || props.footerLayout === 'default' ? (
                    <small className="text-muted">{props?.price ?? '$0.00'}</small>
                ) : null}
                <button className="card-button btn btn-primary">{props?.buttonText ?? 'OK'}</button>                                                    
            </div>
            </div>
        </>
    )
}

Card.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string,
    buttonText: PropTypes.string,
    footerLayout: PropTypes.string
}

export default Card;