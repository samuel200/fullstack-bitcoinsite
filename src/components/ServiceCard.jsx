import React from 'react';
 
export default function ServiceCard({ cardDetails }) {
    const { header, content, iconName, backgroundImage } = cardDetails;

    let serviceCardStyle = {
        backgroundImage: `url('${ backgroundImage }')`,
    }
   
    return (
        <div className="service-cards" style={ serviceCardStyle } >
            <i className="large material-icons">{ iconName }</i>
            <h3>{ header }</h3>
            <p>{ content }</p>
        </div>
    )
}
