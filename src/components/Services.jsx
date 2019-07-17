import React, { Component } from 'react'
import idGenerator from 'react-id-generator'

import ServiceCard from './ServiceCard'

export default class Services extends Component {
    innerHTML = React.createRef();

    componentDidMount(){
        this.props.setPosition("services", this.innerHTML)
        console.log(this.innerHTML)
    }

    render() {
        const { services } = this.props;
        return (
            <div id="service-section" ref={ this.innerHTML }>
                <div className="service-cards" style={ {background: "transparent", overflow: "hidden", minWidth: "30%"} }>
                    <sub>get to know</sub>
                    <h2>Main Facts <br/>About Our Coin And <br/>Bussiness Model</h2>
                </div>
                {
                    services.map( cardDetails => <ServiceCard key={ idGenerator } cardDetails={ cardDetails } />)
                }
            </div>
        )
    }
}
