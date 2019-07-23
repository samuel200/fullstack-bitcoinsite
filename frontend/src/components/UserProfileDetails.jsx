import React from 'react'

export default function UserProfileDetails({ userProfile }) {
    let{ username, email, trader_id, balance } = userProfile;
    return (
        <div className="user-profile-details">
            <h3>PROFILE</h3>
            <p>Username:<span>{ username }</span></p>
            <p>Email:<span>{ email }</span></p>
            <p>Trader ID:<span>{ trader_id }</span></p>
            <p>Account Balance:<span>${ balance }</span></p>
        </div>
    )
}
