import React from 'react';
import PropTypes from 'prop-types';

export default function Logo({imageURL, siteName}) {
    let logoSectionStyle = {
        display: "flex",
        width: "20%",
        fontSize: "1.3em"
    }

    let siteNameHolderStyle = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "5px"
    }
    
    let imgStyle = { 
        width: "50px"
    }

    let siteNameStyle = {
        fontWeight: "bold",
        color: "white"
    }

    let siteNameSubStyle = {
        fontSize: ".6em",
        color: "#a4a4a4",
        textTransform: "capitalize"
    }

    return (
        <div id="logo-section" style={ logoSectionStyle }>
            <img src={ imageURL } alt={ "logo-image" } style={ imgStyle }/>
            <div className="sitename" style={ siteNameHolderStyle }>
                <span style={ siteNameStyle }>{ siteName }</span>
                <sub style={ siteNameSubStyle }>crypto</sub>
            </div>
        </div>
    )
}

Logo.propTypes = {
    imageURL: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired
}