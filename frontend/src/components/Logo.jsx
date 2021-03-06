import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Logo({ imageURL, siteName, url }) {
    return (
        <div id="logo-section">
            <img src={ imageURL } alt={ "site-logo" } id="logo-image"/>
            <div id="site-name-holder">
                <span id="site-name"><Link to={url ? "" : "/"}>{ siteName }</Link></span>
                <sub id="logo-sub">crypto</sub>
            </div>
        </div>
    )
}

Logo.propTypes = {
    imageURL: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired
}