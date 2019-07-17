import React from 'react'
import { withRouter } from 'react-router-dom'

import Logo from './Logo'
import UserNavProfile from './UserNavProfile'
import UserNavigationHolder from './UserNavigationHolder'

function UserDashBoardNav({ user, navigations, changeCurrentPage, match }) {
    const { userName, profileImage } = user;

    return (
        <div id="user-dashboard-nav">
            <Logo imageURL={ require("../img/logo.png") } siteName="BitMax" url={match.url}/>
            <UserNavProfile imageURL={ profileImage } userName={ userName }/>
            <UserNavigationHolder navigations={ navigations } userName={ userName } changeCurrentPage={ changeCurrentPage }/>
        </div>
    )
}

export default withRouter(UserDashBoardNav);