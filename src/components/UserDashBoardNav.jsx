import React from 'react'

import Logo from './Logo'
import UserNavProfile from './UserNavProfile'
import UserNavigationHolder from './UserNavigationHolder'

export default function UserDashBoardNav({ user, navigations, changeCurrentPage }) {
    const { userName, profileImage } = user;

    return (
        <div id="user-dashboard-nav">
            <Logo imageURL={ require("../img/logo.png") } siteName="BitMax" />
            <UserNavProfile imageURL={ profileImage } userName={ userName }/>
            <UserNavigationHolder navigations={ navigations } userName={ userName } changeCurrentPage={ changeCurrentPage }/>
        </div>
    )
}
