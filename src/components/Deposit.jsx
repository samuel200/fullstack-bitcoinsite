import React from 'react'
import TakeMoney from './TakeMoney';

export default function Deposit({ packageName }) {
    return (
        <div id="deposit-section">
            <TakeMoney packageName={ packageName } />
        </div>
    )
}
