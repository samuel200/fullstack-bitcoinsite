import React, { Component } from 'react'

import ServiceCard from './ServiceCard'

export default class Services extends Component {
    state = {
        services: [
            {
                header: "",
                content: "",
                iconClass: ""
            }
        ]
    }
    
    servicesStyle = {
        background: "#353535",
        minHeight: "300px",
        width: "100%"
    }

    render() {
        return (
            <div style={ this.servicesStyle }>
                <ServiceCard />
            </div>
        )
    }
}
