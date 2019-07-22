import React from 'react'
import idGenerator from 'react-id-generator'

import Profile from './Profile'

export default function Advisors({ profiles }){

    return(
        <div className="team-of-experts">
            <div className="profile-head">
                <sub>our helping</sub>
                <h2>advisors</h2>
            </div>
            <div className="profile-holder" >
                {
                    profiles.advisors.map(profile => <Profile key={ idGenerator() } profile={ profile } />)
                }
            </div>
        </div>
    )
}