import React from 'react';
import PropTypes from 'prop-types';

export default function Logo({ imageURL, siteName }) {
    return (
        <div id="logo-section" id="logo-section" >
            <img src={ imageURL } alt={ "logo-image" } id="logo-image"/>
            <div className="sitename" id="site-name-holder">
                <span id="site-name">{ siteName }</span>
                <sub id="logo-sub">crypto</sub>
            </div>
        </div>
    )
}

Logo.propTypes = {
    imageURL: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired
}