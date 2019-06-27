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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur nam error ex provident, alias at hic. 
                Sequi alias eveniet, nulla blanditiis consequatur magni
                 expedita laudantium consequuntur nisi dolor modi maiores.</p>
        </div>
    )
}
