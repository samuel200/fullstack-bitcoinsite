import React from 'react'
import idGenerator from 'react-id-generator'

import Profile from './Profile'

export default function TeamOfExperts({ profiles }){

    return(
        <div id="team-of-experts">
            <div className="profile-head">
                <sub>our amazing</sub>
                <h2>team of experts</h2>
            </div>
            <div className="profile-holder">
                {
                    profiles.workers.map(profile => <Profile key={ idGenerator() } profile={ profile } />)
                }
            </div>
        </div>
    )
}
