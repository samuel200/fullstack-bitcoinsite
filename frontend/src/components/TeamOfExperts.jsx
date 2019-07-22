import React, { Component } from 'react'
import idGenerator from 'react-id-generator'

import Profile from './Profile'


export default class TeamOfExperts extends Component {

    innerHTML = React.createRef();

    componentDidMount(){
        this.props.setPosition("experts", this.innerHTML);
    }

    render() {
        return(
            <div className="team-of-experts" ref={ this.innerHTML }>
                <div className="profile-head">
                    <sub>our amazing</sub>
                    <h2>team of experts</h2>
                </div>
                <div className="profile-holder">
                    {
                        this.props.profiles.workers.map(profile => <Profile key={ idGenerator() } profile={ profile } />)
                    }
                </div>
            </div>
        )
    }
}