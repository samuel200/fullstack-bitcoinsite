import React from 'react'

export default function UserProfileDetails({ userProfile }) {
    let{ username, email, traderId, balance } = userProfile;
    return (
        <div className="user-profile-details">
            <h3>PROFILE</h3>
            <p>Username:<span>{ username }</span></p>
            <p>Email:<span>{ email }</span></p>
            <p>Trader ID:<span>{ traderId }</span></p>
            <p>Account Balance:<span>${ balance }</span></p>
        </div>
    )
}
