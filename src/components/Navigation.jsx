import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
    render() {
        return (
            <nav>
                { this.props.links.map(link=> <a>{ link }{" "}</a>) }
            </nav>
        )
    }
}

Navigation.propTypes = {
    links: PropTypes.shape(PropTypes.string)
}