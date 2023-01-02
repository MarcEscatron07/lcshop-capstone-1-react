import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

interface IProps {
    src: string,
    alt: string,
    title: string,
    description?: any,
    price?: string,
    buttonText?: string,
    cardLayout?: 'default' | 'centered',
    imgObj?: { front: string, back: string }
}

function Card(props: IProps) {
    const [imgSrc, setImgSrc] = useState<string>(props.src ?? '');

    const cardImgClassname: string = !props.imgObj?.back ? ' faded' : '';
    const cardBodyClassname: string = !props.cardLayout || props.cardLayout === 'default' ? ' card-default' : ' card-centered';


    useEffect(() => { setImgSrc(props.src); }, [props.src])

    useEffect(() => {
        // console.log('Card > imgSrc', imgSrc)
    }, [imgSrc])    

    const handleOnMouseEnter = () => {
        if(props.imgObj && props.imgObj?.back) {
            setImgSrc(props.imgObj?.back);
        }
    }

    const handleOnMouseLeave = () => {
        if(props.imgObj && props.imgObj?.front) {
            setImgSrc(props.imgObj?.front);
        }
    }

    return (
        <>
            <div className="card h-100">
                <div className="p-3">
                    <img src={imgSrc} className={`card-image card-img-top img-fluid${cardImgClassname}`} alt={props.alt} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} />
                </div>
                <div className="card-body">
                    <h5 className={`card-title${cardBodyClassname}`}>{props.title}</h5>
                    {props.description ? (<p className={`card-text${cardBodyClassname}`}>{props.description}</p>) : null}
                </div>
                <div className="card-footer">
                    <small className="text-muted fw-bold">{props?.price ?? '$0.00'}</small>
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
    description: PropTypes.any,
    price: PropTypes.string,
    buttonText: PropTypes.string,
    cardLayout: PropTypes.string,
    imgObj: PropTypes.object
}

export default Card;