import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idGenerator from 'react-id-generator'

import LinkItem from "./LinkItem"

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav id="navigation">
                    { this.props.links.map(link => <LinkItem key={ idGenerator() }link={ link }/>) }
                </nav>
            </div>
        )
    }
}

Navigation.propTypes = {
    links: PropTypes.array.isRequired
}