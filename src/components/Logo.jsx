import React from 'react';
import PropTypes from 'prop-types';

export default function Logo({imageURL, siteName}) {
    return (
        <div>
            <img src={ imageURL } alt={ "logo-image" }/>
            <span>{ siteName }</span>
        </div>
    )
}

Logo.propTypes = {
    imageURL: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired
}