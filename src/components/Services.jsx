import React, { Component } from 'react'

import ServiceCard from './ServiceCard'

export default class Services extends Component {

    render() {
        const { services } = this.props;
        return (
            <div id="service-section">
                <div>

                </div>
                {
                    services.map( cardDetails => <ServiceCard cardDetails={ cardDetails } />)
                }
            </div>
        )
    }
}
