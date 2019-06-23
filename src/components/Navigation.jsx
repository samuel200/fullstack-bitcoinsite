import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkItem from "./LinkItem"

export default class Navigation extends Component {
    navigationStyle = {
        color: "#a4a4a4",
        position: "relative",
        top: "10px", 
    }
    render() {
        return (
            <nav style={ this.navigationStyle }>
                { this.props.links.map(link => <LinkItem link={ link }/>) }
            </nav>
        )
    }
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired
}