import React from 'react'

import TeamOfExperts from './TeamOfExperts'

export default function Experts({ profiles }) {

    return (
        <div id="experts">
            <TeamOfExperts profiles={ profiles } />
        </div>
    )
}
