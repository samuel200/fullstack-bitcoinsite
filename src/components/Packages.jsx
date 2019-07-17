import React from 'react'
import PlanCard from './PlanCard';

export default function Packages({ plans }) {
    return (
        <div>
            <h1>Packages</h1>
            <div id="package-section">
                {
                    plans.map(plan => <PlanCard planType={ plan } />)
                }
            </div>
        </div>
    )
}
