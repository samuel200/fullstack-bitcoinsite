import React from 'react'

import Logo from './Logo'
import UserProfileIcon from './UserProfileIcon'

export default function UserTopBar() {
    return (
        <div className="user-top-bar">
            <Logo imageURL={ require("../img/logo.png") } siteName="BitMax" />
            <UserProfileIcon />
        </div>
    )
}