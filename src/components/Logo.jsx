import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Logo({ imageURL, siteName }) {
    return (
        <div id="logo-section" id="logo-section" >
            <img src={ imageURL } alt={ "logo-image" } id="logo-image"/>
            <div id="site-name-holder">
                <span id="site-name"><Link to="/">{ siteName }</Link></span>
                <sub id="logo-sub">crypto</sub>
            </div>
        </div>
    )
}

Logo.propTypes = {
    imageURL: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired
}