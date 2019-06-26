import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkItem from "./LinkItem"

export default class Navigation extends Component {
    render() {
        return (
            <nav id="home-navigation">
                { this.props.links.map(link => <LinkItem link={ link }/>) }
            </nav>
        )
    }
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired
}