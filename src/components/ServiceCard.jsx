import React from 'react';

export default function ServiceCard({ cardDetails }) {
    const { header, content, iconClass, backgroundImage } = cardDetails;

    let serviceCardStyle = {
        backgroundImage: `url(${ backgroundImage })`,
    }

    return (
        <div className="service-cards" style={ serviceCardStyle }>
            <i className={ iconClass + " service-icons" }></i>
            <h3>{ header }</h3>
            <p>{ content }</p>
        </div>
    )
}
